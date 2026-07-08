import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideDynamicIcon, LucideMail, LucideMapPin, LucidePhone } from '@lucide/angular';
import { CARD_DIRECTIVES } from '../../ui/card.directive';
import { ButtonDirective } from '../../ui/button.directive';
import { InputDirective, LabelDirective, TextareaDirective } from '../../ui/form-controls.directive';

interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideDynamicIcon, ...CARD_DIRECTIVES, ButtonDirective, InputDirective, TextareaDirective, LabelDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  readonly contactInfo: ContactInfo[] = [
    { icon: LucideMail, label: 'Email', value: 'kaylinmaharaj@gmail.com', href: 'mailto:kaylinmaharaj@gmail.com' },
    { icon: LucidePhone, label: 'Phone', value: '073 355 9325', href: 'tel:+27733559325' },
    { icon: LucideMapPin, label: 'Location', value: 'Randburg, South Africa', href: '#' },
  ];

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    form.resetForm();
    alert("Thank you for your message! I'll get back to you soon.");
  }
}
