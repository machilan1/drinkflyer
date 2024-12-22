import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-accordion',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="border border-orange rounded-lg p-18px">
      <button
        class="flex justify-between items-center cursor-pointer w-full"
        (click)="toggle()"
      >
        <span class="text-xl">
          {{ accordion().question | uppercase }}
        </span>

        <span #icon class="flex items-center justify-center duration-150">
          <mat-icon>
            <img src="assets/svg/more.svg" alt="" />
          </mat-icon>
        </span>
      </button>
      <p #answer class="hidden mt-4 text-xl">
        {{ accordion().answer }}
      </p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  accordion = input.required<{
    question: string;
    answer: string;
  }>();

  expanded = signal<boolean>(false);

  @ViewChild('answer') answer!: ElementRef<HTMLParagraphElement>;
  @ViewChild('icon') icon!: ElementRef<HTMLElement>;

  toggle() {
    if (this.expanded()) {
      this.expanded.set(false);
      this.answer.nativeElement.classList.add('hidden');
      this.icon.nativeElement.classList.remove('rotate-180');
    } else {
      this.expanded.set(true);
      this.answer.nativeElement.classList.remove('hidden');
      this.icon.nativeElement.classList.add('rotate-180');
    }
  }
}
