import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-story-card',
  imports: [CommonModule],
  template: `<div>
    <div class="aspect-square rounded-lg overflow-hidden">
      <img
        class="w-full h-full object-cover"
        [src]="story().img"
        alt="a image"
      />
    </div>
    <div class="flex flex-col items-center">
      <p class="mt-4 mb-6 text-center text-h3">{{ story().description }}</p>
      <a
        class="bg-orange text-black px-4 py-4 rounded-lg cursor-pointer hover:-translate-y-[.3rem] duration-100 text-xl"
        >{{ story().button | uppercase }}</a
      >
    </div>
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCardComponent {
  story = input.required<{
    img: string;
    description: string;
    button: string;
  }>();
}
