import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-testament-card',
  imports: [CommonModule],
  template: ` <div
    class="border-2 border-orange rounded-lg p-4 flex flex-col items-center gap-4 mx-6"
  >
    <span class="block text-center mb-5 tracking-rating">★★★★★</span>
    <p>&quot;{{ testament().quote }}&quot;</p>
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
