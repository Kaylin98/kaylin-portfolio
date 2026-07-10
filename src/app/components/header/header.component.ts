import { Component, inject, signal } from '@angular/core';
import { LucideDownload, LucideMenu } from '@lucide/angular';
import { ButtonDirective } from '../../ui/button.directive';
import { SiteConfigService } from '../../site-config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideMenu, ButtonDirective,LucideDownload],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly siteConfig = inject(SiteConfigService);
  readonly config = this.siteConfig.config;
  
  readonly isMenuOpen = signal(false);

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }
}
