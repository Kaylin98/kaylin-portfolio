import { Component } from '@angular/core';
import { CARD_DIRECTIVES } from '../../ui/card.directive';
import { BadgeDirective } from '../../ui/badge.directive';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [...CARD_DIRECTIVES, BadgeDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Backend',
      skills: ['C#', '.NET', 'ASP.NET Core (MVC)', 'Web APIs',  'RESTful APIs'],
    },
    {
      category: 'Frontend & Mobile',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'Blazor', 'Tailwind CSS', 'Xamarin Forms'],
    },
    {
      category: 'Data & Cloud',
      skills: ['Microsoft SQL Server', 'Oracle SQL', 'Azure App Services', 'Azure Media Services'],
    },
    {
      category: 'Game Development',
      skills: ['Unity 6', 'C# (Unity)', 'HUD & Post-Processing'],
    },
    {
      category: 'Tools & Others',
      skills: ['GitHub', 'Docker', 'CI/CD', 'Raspberry Pi', 'PC Building'],
    },
  ];
}
