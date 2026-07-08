import { Directive } from '@angular/core';

/** <div appCard> ... </div> */
@Directive({
  selector: '[appCard]',
  standalone: true,
  host: { class: 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border' },
})
export class CardDirective {}

/** <div appCardHeader> ... </div> */
@Directive({
  selector: '[appCardHeader]',
  standalone: true,
  host: { class: 'grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6' },
})
export class CardHeaderDirective {}

/** <h4 appCardTitle> ... </h4> (any element is fine) */
@Directive({
  selector: '[appCardTitle]',
  standalone: true,
  host: { class: 'leading-none' },
})
export class CardTitleDirective {}

/** <p appCardDescription> ... </p> */
@Directive({
  selector: '[appCardDescription]',
  standalone: true,
  host: { class: 'text-muted-foreground text-sm' },
})
export class CardDescriptionDirective {}

/** <div appCardContent> ... </div> */
@Directive({
  selector: '[appCardContent]',
  standalone: true,
  host: { class: 'px-6 pb-6' },
})
export class CardContentDirective {}

/** <div appCardFooter> ... </div> */
@Directive({
  selector: '[appCardFooter]',
  standalone: true,
  host: { class: 'flex items-center px-6 pb-6' },
})
export class CardFooterDirective {}

/** Convenience export so a component can `imports: [...CARD_DIRECTIVES]` */
export const CARD_DIRECTIVES = [
  CardDirective,
  CardHeaderDirective,
  CardTitleDirective,
  CardDescriptionDirective,
  CardContentDirective,
  CardFooterDirective,
] as const;
