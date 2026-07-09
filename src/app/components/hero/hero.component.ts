import { Component, inject } from '@angular/core';
import { LucideMail } from '@lucide/angular';
import { ButtonDirective } from '../../ui/button.directive';
import { GithubIconComponent, LinkedinIconComponent } from '../../ui/brand-icons.component';
import { ImageWithFallbackComponent } from '../image-with-fallback/image-with-fallback.component';
import { SiteConfigService } from '../../site-config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideMail, GithubIconComponent, LinkedinIconComponent, ButtonDirective, ImageWithFallbackComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly siteConfig = inject(SiteConfigService);
  readonly config = this.siteConfig.config;

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
