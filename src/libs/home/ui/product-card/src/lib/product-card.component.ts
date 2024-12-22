import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewChild,
  ElementRef,
  computed,
} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'lib-product-card',
  imports: [CommonModule, CurrencyPipe],
  template: `
    <div
      class="border border-[#cd9e53] rounded-lg overflow-hidden p-2.5  lg:p-6 cursor-pointer"
      (mouseenter)="showHoverImg()"
      (mouseleave)="showNormalImg()"
    >
      <div class="aspect-[3/4] relative rounded-lg overflow-hidden">
        <img
          #front
          class="w-full h-full object-cover absolute z-10 duration-100"
          [src]="product().img"
          alt="a image"
        />
        <img
          class="w-full h-full object-cover absolute z-0"
          [src]="product().imgHover"
          alt="a image"
        />
      </div>
      <div class="flex flex-col items-center mt-4">
        <h3 class="text-center">{{ product().name | uppercase }}</h3>
        <div class="flex gap-2">
          <div class="flex items-center gap-1">
            @for (item of stars(); track $index) {
            <img src="assets/svg/star.svg" alt="star" />
            }
            <p class="text-nowrap">{{ product().reviews }} Reviews</p>
          </div>
        </div>
        <p>{{ product().price | currency }}+</p>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<{
    img: string;
    imgHover: string;
    name: string;
    stars: number;
    reviews: number;
    price: number;
  }>();

  @ViewChild('front', { static: false }) front!: ElementRef<HTMLImageElement>;

  stars = computed(() => Array.from({ length: this.product().stars }));

  showNormalImg() {
    const frontElement = this.front.nativeElement;
    frontElement.classList.remove('opacity-0');
    frontElement.classList.add('opacity-100');
  }

  showHoverImg() {
    const frontElement = this.front.nativeElement;
    frontElement.classList.remove('opacity-100');
    frontElement.classList.add('opacity-0');
  }
}
