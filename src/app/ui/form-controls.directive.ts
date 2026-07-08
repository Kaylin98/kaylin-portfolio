import { Directive } from '@angular/core';

/** <input appInput [(ngModel)]="value" /> */
@Directive({
  selector: 'input[appInput]',
  standalone: true,
  host: {
    class:
      'flex h-9 w-full min-w-0 rounded-md border border-input bg-input-background px-3 py-1 ' +
      'text-base placeholder:text-muted-foreground outline-none transition-[color,box-shadow] ' +
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ' +
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  },
})
export class InputDirective {}

/** <textarea appTextarea [(ngModel)]="value"></textarea> */
@Directive({
  selector: 'textarea[appTextarea]',
  standalone: true,
  host: {
    class:
      'resize-none flex min-h-16 w-full rounded-md border border-input bg-input-background px-3 py-2 ' +
      'text-base placeholder:text-muted-foreground outline-none transition-[color,box-shadow] ' +
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ' +
      'disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  },
})
export class TextareaDirective {}

/** <label appLabel for="name">Name</label> */
@Directive({
  selector: 'label[appLabel]',
  standalone: true,
  host: { class: 'flex items-center gap-2 text-sm leading-none font-medium select-none' },
})
export class LabelDirective {}
