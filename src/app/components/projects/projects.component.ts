import { Component, signal } from '@angular/core';
import { LucideExternalLink } from '@lucide/angular';
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
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideExternalLink, GithubIconComponent, ...CARD_DIRECTIVES, ButtonDirective, BadgeDirective, ImageWithFallbackComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly hoveredIndex = signal<number | null>(null);

  onCardEnter(index: number): void {
    this.hoveredIndex.set(index);
  }

  onCardLeave(): void {
    this.hoveredIndex.set(null);
  }

  readonly projects: Project[] = [
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
}