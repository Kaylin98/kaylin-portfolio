import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { LucideChevronLeft, LucideChevronRight, LucideExternalLink, LucideSmartphone } from '@lucide/angular';
import { CARD_DIRECTIVES } from '../../ui/card.directive';
import { ButtonDirective } from '../../ui/button.directive';
import { BadgeDirective } from '../../ui/badge.directive';
import { GithubIconComponent } from '../../ui/brand-icons.component';
import { ImageWithFallbackComponent } from '../image-with-fallback/image-with-fallback.component';

interface Project {
  title: string;
  description: string;
  image: string;
  videoSrc?: string;
  androidUrl?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface CarouselItem {
  key: string;
  project: Project;
}

const CLONE_COUNT = 3;
const PEEK_RATIO = 0.22;
const AUTO_ADVANCE_MS = 4500;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LucideChevronLeft,
    LucideChevronRight,
    LucideExternalLink,
    LucideSmartphone,
    GithubIconComponent,
    ...CARD_DIRECTIVES,
    ButtonDirective,
    BadgeDirective,
    ImageWithFallbackComponent,
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  readonly projects: Project[] = [
    {
      title: 'Company Research AI',
      description:
        'An AI-powered research assistant that scrapes a company\'s website and generates a structured interview-prep summary - what they do, tech stack, recent news, and culture. Built with a headless-browser scraper for JS-rendered sites, a two-stage LLM pipeline for link filtering and synthesis, and a cached Streamlit UI to keep repeat lookups instant.',
      image: 'images/ai-company-researcher.png',
      videoSrc: 'videos/ai-company-researcher.mp4',
      technologies: ['Python', 'Playwright', 'LLM Agents', 'Streamlit'],
      githubUrl: 'https://github.com/Kaylin98/company-research-ai',
      liveUrl: 'https://company-research-ai-srjjkuerrxhruxe5woaw56.streamlit.app/',
    },
    {
      title: 'Thrust Issues',
      description:
        'A physics-based rocket flyer across three hazardous worlds - thrust with Space, rotate with the arrow keys, and fight momentum as much as gravity. Built with hybrid Rigidbody physics, a finite-state collision system, and procedural UI that adapts its style per level.',
      image: 'images/thrust_issues.png',
      videoSrc: 'videos/thrust-issues.mp4',
      technologies: ['Unity', 'C#', 'Physics Simulation', 'Procedural UI'],
      githubUrl: 'https://github.com/Kaylin98/thrust-issues',
      liveUrl: 'https://play.unity.com/en/games/71f937f3-98ad-4738-a735-3c86a0bba254/thrust-issues',
    },
    {
      title: 'Hold My Beer',
      description:
        'A physics-based endless runner where every drink collected raises your speed and every checkpoint buys you more time. Built around dynamic velocity stacking, a coroutine-driven coin-magnet power-up, and a centralized game manager syncing the countdown under pressure.',
      image: 'images/hold_my_beer.png',
      videoSrc: 'videos/hold-my-beer.mp4',
      androidUrl: 'https://github.com/Kaylin98/hold-my-beer/releases/tag/v1.0.0',
      technologies: ['Unity 6', 'C#', 'Mobile', 'Game Systems Design'],
      githubUrl: 'https://github.com/Kaylin98/hold-my-beer',
      liveUrl: 'https://play.unity.com/en/games/e0ec2768-7935-4498-9475-97fdc4f21fc3/hold-my-beer',
    },
    {
      title: 'Trigger Happy',
      description:
        'A high-speed FPS built for raw movement and reflexes - no filler, no lore, just tight gunplay in a low-poly arena. Built with multi-camera layering to keep the weapon view crisp and a C# controller tuned for immediate, lag-free web deployment.',
      image: 'images/trigger_happy.png',
      videoSrc: 'videos/trigger-happy.mp4',
      technologies: ['Unity (URP)', 'C#', 'FPS Mechanics', 'Responsive Controls'],
      githubUrl: 'https://github.com/Kaylin98/Trigger-Happy',
      liveUrl: 'https://play.unity.com/en/games/85304add-b65f-4304-984f-384633c0a894/trigger-happy',
    },
    {
      title: 'Dhoom',
      description:
        'A cinematic rail-shooter through a volcanic sector, built around Timeline-driven cutscenes and a coordinated wingman system. Features multi-stage boss encounters, custom VFX, and Cinemachine camera work for a movie-like feel between combat and story beats.',
      image: 'images/dhoom.png',
      videoSrc: 'videos/dhoom.mp4',
      technologies: ['Unity 3D', 'C#', 'Cinemachine', 'Unity Timeline'],
      githubUrl: 'https://github.com/Kaylin98/Dhoom',
      liveUrl: 'https://play.unity.com/en/games/9a39a9dd-f90b-4059-97d1-81a2ccdcaba3/dhoom',
    },
  ];

  // --- carousel state ---
  readonly visibleCount = signal(3);
  readonly trackIndex = signal(CLONE_COUNT);
  readonly isPaused = signal(false);
  readonly transitionsEnabled = signal(true);
  readonly prefersReducedMotion = signal(false);

  // --- video hover-preview state (keyed by a unique per-slot id, so clones and real cards behave independently) ---
  readonly hoveredKey = signal<string | null>(null);

  private autoAdvanceTimer: ReturnType<typeof setInterval> | null = null;
  private readonly resizeListener = () => this.updateVisibleCount();
  private readonly motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  private readonly motionListener = () => this.prefersReducedMotion.set(this.motionQuery.matches);

  readonly extendedItems = computed<CarouselItem[]>(() => {
    const items = this.projects;
    const head = items.slice(-CLONE_COUNT).map((p, i) => ({ key: `head-${i}-${p.title}`, project: p }));
    const real = items.map((p) => ({ key: p.title, project: p }));
    const tail = items.slice(0, CLONE_COUNT).map((p, i) => ({ key: `tail-${i}-${p.title}`, project: p }));
    return [...head, ...real, ...tail];
  });

  readonly peekRatio = computed(() => (this.visibleCount() === 1 ? 0 : PEEK_RATIO));
  readonly cardWidthPercent = computed(() => 100 / (this.visibleCount() + this.peekRatio() * 2));
  readonly trackTransform = computed(() => `translateX(-${(this.trackIndex() - this.peekRatio()) * this.cardWidthPercent()}%)`);

  readonly realIndex = computed(() => {
    const n = this.projects.length;
    return (((this.trackIndex() - CLONE_COUNT) % n) + n) % n;
  });

  ngOnInit(): void {
    this.updateVisibleCount();
    window.addEventListener('resize', this.resizeListener);
    document.addEventListener('visibilitychange', this.visibilityListener);
    this.motionQuery.addEventListener('change', this.motionListener);
    this.prefersReducedMotion.set(this.motionQuery.matches);
    this.restartAutoAdvance();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
    this.motionQuery.removeEventListener('change', this.motionListener);
    document.removeEventListener('visibilitychange', this.visibilityListener);
    this.clearAutoAdvance();
  }

  private updateVisibleCount(): void {
    const w = window.innerWidth;
    this.visibleCount.set(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
  }

  private clearAutoAdvance(): void {
    if (this.autoAdvanceTimer !== null) {
      clearInterval(this.autoAdvanceTimer);
      this.autoAdvanceTimer = null;
    }
  }

  private restartAutoAdvance(): void {
    this.clearAutoAdvance();
    if (this.prefersReducedMotion()) return;
    this.autoAdvanceTimer = setInterval(() => {
      if (!this.isPaused()) this.next();
    }, AUTO_ADVANCE_MS);
  }

  next(): void {
    this.transitionsEnabled.set(true);
    this.trackIndex.update((i) => i + 1);
  }

  prev(): void {
    this.transitionsEnabled.set(true);
    this.trackIndex.update((i) => i - 1);
  }

  goTo(index: number): void {
    this.transitionsEnabled.set(true);
    this.trackIndex.set(CLONE_COUNT + index);
  }

  onTrackTransitionEnd(): void {
    this.normalizeTrackIndex();
  }

  private normalizeTrackIndex(): void {
    const n = this.projects.length;
    const i = this.trackIndex();
    const wrapped = CLONE_COUNT + (((i - CLONE_COUNT) % n) + n) % n;
    if (wrapped !== i) {
      this.transitionsEnabled.set(false);
      this.trackIndex.set(wrapped);
    }
  }

  private readonly visibilityListener = () => {
    if (document.hidden) {
      this.clearAutoAdvance();
    } else {
      this.normalizeTrackIndex();
      this.restartAutoAdvance();
    }
  };

  onMouseEnter(): void {
    this.isPaused.set(true);
  }

  onMouseLeave(): void {
    this.isPaused.set(false);
  }

  onFocusIn(): void {
    this.isPaused.set(true);
  }

  onFocusOut(): void {
    this.isPaused.set(false);
  }

  onCardEnter(key: string): void {
    this.hoveredKey.set(key);
  }

  onCardLeave(): void {
    this.hoveredKey.set(null);
  }
}