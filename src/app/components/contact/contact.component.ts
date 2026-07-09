import { Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideDynamicIcon, LucideMail, LucideMapPin, LucidePhone } from '@lucide/angular';
import { CARD_DIRECTIVES } from '../../ui/card.directive';
import { ButtonDirective } from '../../ui/button.directive';
import { InputDirective, LabelDirective, TextareaDirective } from '../../ui/form-controls.directive';
import { SiteConfigService } from '../../site-config';

interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzjjvpn';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideDynamicIcon, ...CARD_DIRECTIVES, ButtonDirective, InputDirective, TextareaDirective, LabelDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly siteConfig = inject(SiteConfigService);
  private readonly http = inject(HttpClient);

  formData = { name: '', email: '', subject: '', message: '' };

  readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  readonly contactInfo = computed<ContactInfo[]>(() => {
    const c = this.siteConfig.config();
    return [
      { icon: LucideMail, label: 'Email', value: c.email, href: `mailto:${c.email}` },
      { icon: LucidePhone, label: 'Phone', value: c.phone, href: this.siteConfig.phoneHref() },
      { icon: LucideMapPin, label: 'Location', value: c.location, href: '#' },
    ];
  });

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.status.set('sending');

    this.http.post(FORMSPREE_ENDPOINT, this.formData, { headers: { Accept: 'application/json' } }).subscribe({
      next: () => {
        this.status.set('success');
        form.resetForm();
      },
      error: () => {
        this.status.set('error');
      },
    });
  }
}