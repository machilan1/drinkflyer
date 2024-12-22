import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-testament-card',
  imports: [CommonModule],
  template: ` <div
    class="border border-orange rounded-lg p-18px flex flex-col items-center gap-4 max-w-[90vw]"
  >
    <span class="block text-center mb-3 tracking-rating text-18px"
      >★ ★ ★ ★ ★</span
    >
    <p class="text-center">&quot;{{ testament().quote }}&quot;</p>
    <p>{{ testament().name }}</p>
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestamentCardComponent {
  testament = input.required<{
    quote: string;
    name: string;
  }>();
}
