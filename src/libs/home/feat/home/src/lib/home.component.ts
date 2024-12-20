import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '@drinkflyer/marquee';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '@drinkflyer/product-card';
import { StoryCardComponent } from '@drinkflyer/story-card';
import { FeatureSectionComponent } from '@drinkflyer/feature-section';
import { ContentTemplate1Component } from '@drinkflyer/content-template-1';

@Component({
  selector: 'lib-home',
  imports: [
    CommonModule,
    MarqueeComponent,
    ProductCardComponent,
    StoryCardComponent,
    FeatureSectionComponent,
    ContentTemplate1Component,
    MatIconModule,
  ],
  template: `
    <div class="bg-black text-white overflow-hidden px-10">
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
          class="p-4 bg-white rounded-md text-black bg-opacity-30 backdrop-blur-md absolute left-1/2 transform -translate-x-1/2  bottom-6 hover:-translate-y-2 duration-100 text-xl"
          >SHOP NOW</a
        >
      </section>
      <section class="py-9">
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
      <section class="py-9">
        <ul class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          @for (story of stories; track $index) {
          <li>
            <lib-story-card [story]="story"></lib-story-card>
          </li>
          }
        </ul>
      </section>
      <section>
        <lib-feature-section [features]="features"></lib-feature-section>
      </section>
      <!--  -->
      <section>
        <h2 class="text-center text-[3.75rem]">FEATURED IN</h2>
        <ul class="flex flex-wrap justify-center gap-4 mt-8 items-center">
          <li class="w-[10rem]">
            <img src="assets/pub1.avif" alt="a image" />
          </li>
          <li class="w-[10rem]">
            <img src="assets/pub2.avif" alt="a image" />
          </li>
          <li class="w-[10rem]">
            <img src="assets/pub3.avif" alt="a image" />
          </li>
          <li class="w-[10rem]">
            <img src="assets/pub4.avif" alt="a image" />
          </li>
          <li class="w-[10rem]">
            <img src="assets/pub5.avif" alt="a image" />
          </li>
        </ul>
        <ul>
          <li>a testament</li>
        </ul>
      </section>
      <!--  -->
      <section>
        <lib-content-template-1 [content]="content"></lib-content-template-1>
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
  products: {
    img: string;
    imgHover: string;
    name: string;
    stars: number;
    reviews: number;
    price: number;
  }[] = [
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
  stories: {
    img: string;
    description: string;
    button: string;
  }[] = [
    {
      img: 'assets/story1.webp',
      description:
        'Wind down with a high-end cocktail crafted to lift your mood without overstaying its welcome.',
      button: 'Take the edge off',
    },
    {
      img: 'assets/story2.webp',
      description:
        'Enjoy anxiety-free moments with a sense of ease infused into each sip of a THC Flyers cocktail.',
      button: 'Embrace the moment',
    },
    {
      img: 'assets/story3.webp',
      description:
        'Elevate your drinking ritual with bartender flavors expertly crafted with 5MG of Hemp-Derived THC.',
      button: 'Savor Sophistication',
    },
  ];

  features: {
    img: string;
  }[] = [
    {
      img: 'assets/feature1.webp',
    },
    {
      img: 'assets/feature2.webp',
    },
  ];

  content: {
    img: string;
    description: string;
    button: string;
  } = {
    img: 'assets/content1.webp',
    description: 'PREMIUM THC COCKTAILS CRAFTED FOR RELAXATION',
    button: 'UNWIND WITH EVERY SIP',
  };
}
