import { Component } from '@angular/core';
import { LucideCode, LucideCoffee, LucideDynamicIcon, LucideUsers, LucideZap } from '@lucide/angular';
import { CARD_DIRECTIVES } from '../../ui/card.directive';

interface Highlight {
  icon: any;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideDynamicIcon, ...CARD_DIRECTIVES],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly highlights: Highlight[] = [
    {
      icon: LucideCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion',
    },
    {
      icon: LucideZap,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks',
    },
    {
      icon: LucideUsers,
      title: 'Team Player',
      description: 'Collaborative approach to solving complex problems',
    },
    {
      icon: LucideCoffee,
      title: 'Problem Solver',
      description: 'Love tackling challenging technical problems over coffee',
    },
  ];
}
