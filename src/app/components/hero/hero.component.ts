import { Component } from '@angular/core';
import { LucideMail } from '@lucide/angular';
import { ButtonDirective } from '../../ui/button.directive';
import { GithubIconComponent, LinkedinIconComponent } from '../../ui/brand-icons.component';
import { ImageWithFallbackComponent } from '../image-with-fallback/image-with-fallback.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideMail, GithubIconComponent, LinkedinIconComponent, ButtonDirective, ImageWithFallbackComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
