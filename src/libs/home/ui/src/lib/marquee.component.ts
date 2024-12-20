import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-marquee',
  imports: [CommonModule],
  template: `
    <div class=" group hover:bg-[#c99d4d] hover:text-black py-2">
      <div class="marquee-container flex items-center gap-2">
        @for (item of displayStrings(); track $index) {
        <div
          class=" aspect-square h-3 bg-white group-hover:bg-black spin"
        ></div>
        <p class=" text-nowrap">{{ item }}</p>
        }
      </div>
    </div>
  `,
  styles: `
  .marquee-container {
    animation: marquee 30s linear infinite;
  }

  .marquee:hover {
    animation-play-state: paused;
    color: black;
    background-color: #c99d4d
  }

  .spin{
    animation: spin 3s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent {
  discountInfo = input<string>();
  displayStrings = computed(() => {
    const texts = [];
    for (let i = 0; i < 30; i++) {
      texts.push(this.discountInfo());
    }
    return texts;
  });
}
