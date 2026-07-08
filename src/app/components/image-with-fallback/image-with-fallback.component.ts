import { Component, Input, signal } from '@angular/core';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

/**
 * Angular port of the Figma-generated ImageWithFallback helper: renders the
 * image, and swaps in a placeholder graphic if it fails to load.
 *
 *   <app-image-with-fallback src="..." alt="..." className="w-full h-full object-cover" />
 */
@Component({
  selector: 'app-image-with-fallback',
  standalone: true,
  template: `
    @if (didError()) {
      <div class="inline-block bg-gray-100 text-center align-middle" [class]="className">
        <div class="flex items-center justify-center w-full h-full">
          <img [src]="ERROR_IMG_SRC" alt="Error loading image" />
        </div>
      </div>
    } @else {
      <img [src]="src" [alt]="alt" [class]="className" (error)="onError()" />
    }
  `,
})
export class ImageWithFallbackComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() className = '';

  readonly ERROR_IMG_SRC = ERROR_IMG_SRC;
  readonly didError = signal(false);

  onError(): void {
    this.didError.set(true);
  }
}
