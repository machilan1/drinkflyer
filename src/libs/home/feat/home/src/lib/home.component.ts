import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '@drinkflyer/marquee';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '@drinkflyer/product-card';

@Component({
  selector: 'lib-home',
  imports: [
    CommonModule,
    MarqueeComponent,
    ProductCardComponent,
    MatIconModule,
  ],
  template: `
    <div class="bg-black text-white overflow-hidden">
      <lib-marquee discountInfo="FREE SHIPPING ON ORDERS $35+"></lib-marquee>
      <header class=" px-8 flex justify-between items-center">
        <button><mat-icon>density_medium</mat-icon></button>
        <div class="max-w-[12rem]">
          <img class="w-full" src="assets/logo.avif" alt="hero image" />
        </div>
        <div class="flex gap-2 items-center">
          <button><mat-icon>person</mat-icon></button>
          <button><mat-icon>search</mat-icon></button>
          <button><mat-icon>shopping_cart</mat-icon></button>
        </div>
      </header>
      <section class="relative">
        <div>
          <img class="w-full" src="assets/hero1.webp" alt="hero image" />
        </div>
        <a
          class="px-4 py-3 bg-white rounded-md text-black bg-opacity-30 backdrop-blur-md absolute left-1/2 transform -translate-x-1/2  bottom-6 "
          >Shop now</a
        >
      </section>
      <section class="py-9 px-8">
        <h2 class="text-center text-h2">UPLIFT YOUR DRINKING RITUAL</h2>
        <p class="text-center text-xl">
          Relax with alcohol-free cocktails enhanced with 5MG of Hemp THC.
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          @for (product of products; track $index) {

          <li>
            <lib-product-card [product]="product"></lib-product-card>
          </li>
          }
        </ul>
      </section>
      <section>
        <ul>
          <li>a story</li>
        </ul>
      </section>
      <section>
        <img src="" alt="comparison image" />
        <a>Shop now</a>
      </section>
      <section>
        <h2>Feature In</h2>
        <ul>
          <li>a publication</li>
        </ul>
        <ul>
          <li>a testament</li>
        </ul>
      </section>
      <section>
        <img src="" alt="a image with bottles" />
        <div>PREMIUM COCKTAILS CRAFTED FOR RELAXATION</div>
      </section>
      <section>
        <ul>
          <li>a qa accordion</li>
        </ul>
      </section>
      <footer>
        <div>
          <ul>
            <li>contact us</li>
          </ul>
          <ul>
            <li>privacy policy</li>
          </ul>
          <div>
            <h2>SIGN UP & SAVE</h2>
            <input type="email" placeholder="email" />
            <button>Sign Up</button>
          </div>
          <div>
            <h3>STAY AWHILE DRINKFLYERS</h3>
            <ul>
              <li>instagram icon</li>
              <li>ticktock icon</li>
              <li>youtube icon</li>
              <li>linkedin icon</li>
            </ul>
          </div>
        </div>
        <div>
          <p>© 2021 DRINKFLYERS</p>
          <ul>
            <li>
              <img src="" alt="visa icon" />
            </li>
            <li>
              <img src="" alt="mastercard icon" />
            </li>
            <li>
              <img src="" alt="paypal icon" />
            </li>
            <li>
              <img src="" alt="JCB icon" />
            </li>
            <li>
              <img src="" alt="america express " />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  `,
  styles: `
  .discount-info {
    animation: marquee 30s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  products = [
    {
      img: 'assets/product1-1.webp',
      imgHover: 'assets/product1-2.webp',
      name: 'THC Apéro Spritz',
      stars: 4,
      reviews: 300,
      price: 35,
    },
    {
      img: 'assets/product2-1.webp',
      imgHover: 'assets/product2-2.webp',
      name: "THC ol' Fashioned",
      stars: 5,
      reviews: 150,
      price: 35,
    },
    {
      img: 'assets/product3-1.webp',
      imgHover: 'assets/product3-2.webp',
      name: 'THC Margarita',
      stars: 5,
      reviews: 200,
      price: 45,
    },
    {
      img: 'assets/product4-1.webp',
      imgHover: 'assets/product4-2.webp',
      name: 'THC House Cocktail Flight',
      stars: 5,
      reviews: 100,
      price: 95,
    },
    {
      img: 'assets/product5-1.webp',
      imgHover: 'assets/product5-2.webp',
      name: 'THC Sunset Spritz - Watermelon Mint',
      stars: 4,
      reviews: 300,
      price: 35,
    },
    {
      img: 'assets/product6-1.webp',
      imgHover: 'assets/product6-2.webp',
      name: 'THC Sunset Spritz - Mango Guava',
      stars: 5,
      reviews: 150,
      price: 35,
    },
    {
      img: 'assets/product7-1.webp',
      imgHover: 'assets/product7-2.webp',
      name: 'THC Sunset Spritz - Grapefruit Lime',
      stars: 5,
      reviews: 200,
      price: 35,
    },
    {
      img: 'assets/product8-1.webp',
      imgHover: 'assets/product8-2.webp',
      name: 'THC Sunset Spritz - Party Pack',
      stars: 5,
      reviews: 100,
      price: 95,
    },
  ];
}
