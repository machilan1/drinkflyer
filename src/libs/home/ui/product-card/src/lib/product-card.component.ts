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
      class="border-2 border-[#cd9e53] rounded-lg overflow-hidden p-6"
      (mouseenter)="showHoverImg()"
      (mouseleave)="showNormalImg()"
    >
      <div class="aspect-[3/4] relative rounded-lg overflow-hidden">
        <img
          #front
          class="w-full h-full object-cover absolute z-20 duration-100"
          [src]="product().img"
          alt="a image"
        />
        <img
          class="w-full h-full object-cover absolute z-10"
          [src]="product().imgHover"
          alt="a image"
        />
      </div>
      <div class="flex flex-col items-center mt-4">
        <h3 class="text-center">{{ product().name }}</h3>
        <div class="flex gap-2">
          <div class="flex items-center gap-1">
            @for (item of stars(); track $index) {
            <img src="assets/star.svg" alt="star" />
            }
            <p>{{ product().reviews }} reviews</p>
          </div>
        </div>
        <p>{{ product().price | currency }}</p>
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
