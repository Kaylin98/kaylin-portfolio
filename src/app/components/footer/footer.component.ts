import { Component } from '@angular/core';
import { LucideMail } from '@lucide/angular';
import { ButtonDirective } from '../../ui/button.directive';
import { GithubIconComponent, LinkedinIconComponent, TwitterIconComponent } from '../../ui/brand-icons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideMail, GithubIconComponent, LinkedinIconComponent, TwitterIconComponent, ButtonDirective],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
