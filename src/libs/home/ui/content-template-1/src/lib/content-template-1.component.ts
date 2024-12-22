import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-content-template-1',
  imports: [CommonModule],
  template: ` <div class="grid grid-cols-1 lg:grid-cols-2 gap-[2.8rem] mt-8">
    <div class="w-full aspect-square rounded-lg overflow-hidden">
      <img class="w-full h-full object-cover" [src]="content().img" alt="" />
    </div>
    <div class="w-full flex flex-col items-center justify-center">
      <h2 class="text-[2.25rem] lg:text-h2 text-center mb-22.5px">
        {{ content().description }}
      </h2>
      <a
        class="bg-orange text-black leading-none px-4 py-4 rounded-lg cursor-pointer hover:-translate-y-[.3rem] duration-100 text-xl"
      >
        {{ content().button }}
      </a>
    </div>
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTemplate1Component {
  content = input.required<{
    img: string;
    description: string;
    button: string;
  }>();
}
