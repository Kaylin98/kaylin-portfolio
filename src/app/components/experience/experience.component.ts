import { Component } from '@angular/core';
import { LucideCalendar, LucideMapPin } from '@lucide/angular';
import { CARD_DIRECTIVES } from '../../ui/card.directive';
import { BadgeDirective } from '../../ui/badge.directive';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LucideCalendar, LucideMapPin, ...CARD_DIRECTIVES, BadgeDirective],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = [
    {
      title: 'Software Developer (Intermediate)',
      company: 'iOCO',
      location: 'Midrand',
      period: '06/2024 - Present',
      description:
        "Engineered core modules for Toyota's e-ToyotaONE Dealership Management System. Handled end-to-end feature delivery, writing robust .NET APIs to process complex dealership data and wiring them into high-performance Angular interfaces. Focused on building architecture that scales and UIs that dealership staff can actually navigate without friction.",
      technologies: ['C#', '.NET', 'Microservices', 'SQL', 'HTML Templating'],
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Sovtech',
      location: 'Randburg',
      period: '05/2022 - 06/2024',
      description:
        'Built robust, efficient solutions for client Deloitte using ASP.NET, .NET Core, and Blazor. Deployed and scaled applications on Azure, delivered a cross-platform Xamarin Forms app with live-streaming via Azure Media Services, migrated a legacy API to a modern .NET version, and built Angular/C# systems that streamlined business processes.',
      technologies: ['ASP.NET', '.NET Core', 'Blazor', 'Azure', 'Xamarin Forms', 'Angular', 'C#'],
    },
    {
      title: 'Software Developer',
      company: 'FPT Group (Pty) Ltd',
      location: 'Durban',
      period: '03/2021 - 04/2022',
      description:
        'Developed a truck booking system across web and Android for a logistics platform spanning point of origin to destination. Built RESTful APIs bridging legacy and modern systems, and developed microservices for a Warehouse Management System.',
      technologies: ['Angular', 'C#', 'RESTful APIs', 'Android', 'Microservices'],
    },
    {
      title: 'Developer (Graduate)',
      company: 'Datacentrix',
      location: 'Durban',
      period: '02/2020 - 02/2021',
      description:
        'Built a business process management (leave) system for the graduate program, developed microservices for a Warehouse Management System, and tested systems for the Qatar Foundation and SANParks (South African National Parks).',
      technologies: ['C#', 'Microservices', 'System Testing'],
    },
    {
      title: 'Software Developer (Intern)',
      company: 'Sage',
      location: 'Durban',
      period: '12/2018 - 01/2019',
      description:
        'Supported and updated existing programs at the market leader in integrated accounting, payroll, and payment systems — debugging and troubleshooting production issues while learning AngularJS on the job.',
      technologies: ['AngularJS', 'Debugging'],
    },
  ];
}
