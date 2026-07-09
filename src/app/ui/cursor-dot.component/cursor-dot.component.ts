import { Component, HostListener, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cursor-dot',
  standalone: true,
  template: `
    <div
      class="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full transition-[transform,width,height,border-width] duration-150 ease-out"
      [class]="isHovering() ? 'h-9 w-9 border-2 border-primary bg-primary/10' : 'h-3 w-3 bg-primary'"
      [style.transform]="transform()"
    ></div>
  `,
})
export class CursorDotComponent {
  private readonly x = signal(-100);
  private readonly y = signal(-100);
  readonly isHovering = signal(false);

  readonly transform = computed(() => `translate3d(${this.x()}px, ${this.y()}px, 0) translate(-50%, -50%)`);

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.x.set(event.clientX);
    this.y.set(event.clientY);

    const target = event.target as HTMLElement;
    this.isHovering.set(!!target.closest('a, button, input, textarea, [role="button"]'));
  }
}