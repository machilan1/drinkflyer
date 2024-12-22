import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-section',
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-8">
      @for (feature of features(); track $index) {
      <div class="w-full rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover" [src]="feature.img" alt="" />
      </div>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSectionComponent {
  features = input.required<{ img: string }[]>();
}
