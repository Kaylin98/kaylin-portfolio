import { Component, signal } from '@angular/core';
import { LucideMenu } from '@lucide/angular';
import { ButtonDirective } from '../../ui/button.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideMenu, ButtonDirective],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly isMenuOpen = signal(false);

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }
}
