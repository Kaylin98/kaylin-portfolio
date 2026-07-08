import { Directive, HostBinding, Input } from '@angular/core';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

const BASE =
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ' +
  'w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none ' +
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ' +
  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ' +
  'transition-[color,box-shadow] overflow-hidden';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-primary text-primary-foreground',
  secondary: 'border-transparent bg-secondary text-secondary-foreground',
  destructive: 'border-transparent bg-destructive text-white',
  outline: 'text-foreground',
};

@Directive({
  selector: '[appBadge]',
  standalone: true,
})
export class BadgeDirective {
  @Input() variant: BadgeVariant = 'default';

  @HostBinding('class')
  get hostClasses(): string {
    return `${BASE} ${VARIANT_CLASSES[this.variant]}`;
  }
}
