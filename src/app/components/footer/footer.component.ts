import { Component, inject } from '@angular/core';
import { LucideMail } from '@lucide/angular';
import { ButtonDirective } from '../../ui/button.directive';
import { GithubIconComponent, LinkedinIconComponent, TwitterIconComponent } from '../../ui/brand-icons.component';
import { SiteConfigService } from '../../site-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideMail, GithubIconComponent, LinkedinIconComponent, TwitterIconComponent, ButtonDirective],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly siteConfig = inject(SiteConfigService);
  readonly config = this.siteConfig.config;

  readonly year = new Date().getFullYear();
}
