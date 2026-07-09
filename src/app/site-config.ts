import { Injectable, computed, signal } from '@angular/core';

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
}

const DEFAULT_CONFIG: SiteConfig = {
  name: 'Kaylin Maharaj',
  role: 'Full Stack Software Engineer',
  email: 'kaylinmaharaj@gmail.com',
  phone: '073 355 9325',
  location: 'Randburg, South Africa',
  githubUrl: 'https://github.com/Kaylin98',
  linkedinUrl: 'https://www.linkedin.com/in/kaylin-maharaj-a32a27117',
};

@Injectable({ providedIn: 'root' })
export class SiteConfigService {
  readonly config = signal<SiteConfig>(DEFAULT_CONFIG);

  readonly phoneHref = computed(() => {
    const digits = this.config().phone.replace(/\s+/g, '');
    return `tel:+27${digits.replace(/^0/, '')}`;
  });

  refresh(): void {
    // future: this.http.get<SiteConfig>('/api/site-config').subscribe(c => this.config.set(c));
  }
}