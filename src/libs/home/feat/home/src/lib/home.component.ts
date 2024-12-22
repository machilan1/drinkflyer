import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '@drinkflyer/marquee';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '@drinkflyer/product-card';
import { StoryCardComponent } from '@drinkflyer/story-card';
import { FeatureSectionComponent } from '@drinkflyer/feature-section';
import { ContentTemplate1Component } from '@drinkflyer/content-template-1';
import { AccordionComponent } from '@drinkflyer/accordion';
import { TestamentCardComponent } from '@drinkflyer/testament-card';
import { LeftMenuComponent } from '@drinkflyer/left-menu';
import { RightMenuComponent } from '@drinkflyer/right-menu';
import { BackdropComponent } from '@drinkflyer/backdrop';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'lib-home',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MarqueeComponent,
    ProductCardComponent,
    StoryCardComponent,
    FeatureSectionComponent,
    ContentTemplate1Component,
    AccordionComponent,
    TestamentCardComponent,
    BackdropComponent,
    LeftMenuComponent,
    RightMenuComponent,
    MatIconModule,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  template: `
    <div class="relative">
      <lib-backdrop
        [opening]="backdropOpening()"
        (clicked)="closeAll()"
      ></lib-backdrop>

      <aside
        [ngClass]="{
          'translate-x-0': leftMenuOpening(),
          '-translate-x-full': !leftMenuOpening(),
          'z-10': !leftMenuOpening()
        }"
        class="max-w-[90vw] md:max-w-[60vw] z-50 lg:max-w-[40vw] duration-300  fixed top-0 left-0 h-full w-full -translate-x-full"
      >
        <lib-left-menu (close)="closeAll()"></lib-left-menu>
      </aside>
      <aside
        [ngClass]="{
          'translate-x-0': rightMenuOpening(),
          'translate-x-full': !rightMenuOpening(),
          'z-10': !rightMenuOpening()
        }"
        class="max-w-[90vw] md:max-w-[60vw] z-50 lg:max-w-[40vw] duration-300  fixed top-0 right-0 h-full w-full translate-x-full"
      >
        <lib-right-menu (close)="closeAll()"></lib-right-menu>
      </aside>
      <div class="bg-black text-white overflow-hidden ">
        <lib-marquee discountInfo="FREE SHIPPING ON ORDERS $35+"></lib-marquee>
      </div>

      <header
        class=" px-8 flex justify-between items-center sticky top-0 bg-black text-white py-4 z-20"
      >
        @if (searchOpening()) {
        <div
          @fadeIn
          @fadeOut
          class="absolute left-0 top-0 h-full w-full bg-black flex flex-col justify-center"
        >
          <div class="flex justify-between items-center gap-2 px-45px">
            <form class="flex items-center gap-2 w-full">
              <button type="submit">
                <mat-icon>
                  <img src="assets/svg/mag.svg" alt="search" />
                </mat-icon>
              </button>
              <input
                type="text"
                placeholder="Search"
                class="bg-black text-white outline-none w-full placeholder-white"
              />
            </form>
            <button (click)="closeSearch()">
              <mat-icon>
                <img src="assets/svg/close.svg" alt="close" />
              </mat-icon>
            </button>
          </div>
        </div>
        }
        <button (click)="showLeftMenu()">
          <mat-icon>
            <img src="assets/svg/hamburger.svg" alt="menu" />
          </mat-icon>
        </button>
        <div class="max-w-[15rem]">
          <a href="#">
            <img class="w-full" src="assets/logo.avif" alt="hero image" />
          </a>
        </div>
        <div class="flex gap-2 items-center">
          <button class="hidden lg:block">
            <mat-icon>
              <img src="assets/svg/person.svg" alt="member page link" />
            </mat-icon>
          </button>
          <button (click)="showSearch()">
            <mat-icon>
              <img src="assets/svg/mag.svg" alt="search" />
            </mat-icon>
          </button>
          <button (click)="showRightMenu()">
            <mat-icon>
              <img src="assets/svg/cart.svg" alt="cart" />
            </mat-icon>
          </button>
        </div>
      </header>

      <div class="bg-black text-white">
        <section class="relative">
          <div>
            <img
              class="hidden lg:block w-full"
              src="assets/hero1.webp"
              alt="hero image"
            />
            <img
              class="lg:hidden w-full"
              src="assets/heromobile.webp"
              alt="hero image"
            />
          </div>
          <a
            class="p-4 bg-white rounded-md text-black bg-opacity-30 backdrop-blur-md absolute left-1/2 transform -translate-x-1/2  bottom-6 hover:-translate-y-2 duration-100 text-xl"
            >SHOP NOW</a
          >
        </section>
        <section class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <h2 class="text-center text-36px lg:text-h2">
            UPLIFT YOUR DRINKING RITUAL
          </h2>
          <p class="text-center text-xl mt-6">
            Relax with alcohol-free cocktails enhanced with 5MG of Hemp THC.
          </p>
          <ul
            class="grid grid-cols-2 gap-22.5px lg:grid-cols-4 lg:gap-45px mt-8"
          >
            @for (product of products; track $index) {
            <li>
              <lib-product-card [product]="product"></lib-product-card>
            </li>
            }
          </ul>
        </section>
        <section class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <ul class="grid grid-cols-1 lg:grid-cols-3 gap-45px">
            @for (story of stories; track $index) {
            <li>
              <lib-story-card [story]="story"></lib-story-card>
            </li>
            }
          </ul>
        </section>
        <section class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <lib-feature-section [features]="features"></lib-feature-section>
        </section>
        <!--  -->
        <section class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <h2 class="text-center text-36px">FEATURED IN</h2>
          <ul
            class="flex flex-wrap justify-center gap-y-5 gap-x-10 mt-8 items-center"
          >
            <li class="w-[11.25rem]">
              <img src="assets/pub1.avif" alt="a image" />
            </li>
            <li class="w-[11.25rem]">
              <img src="assets/pub2.avif" alt="a image" />
            </li>
            <li class="w-[11.25rem]">
              <img src="assets/pub3.avif" alt="a image" />
            </li>
            <li class="w-[11.25rem]">
              <img src="assets/pub4.avif" alt="a image" />
            </li>
            <li class="w-[11.25rem]">
              <img src="assets/pub5.avif" alt="a image" />
            </li>
          </ul>
        </section>
        <section class="py-36px">
          <swiper-container
            #swiper_container
            loop="true"
            autoplay="true"
            autoplay-delay="0"
            speed="10000"
            delay="0"
            slides-per-view="2.5"
            space-between="40"
          >
            <swiper-slide>
              <lib-testament-card
                [testament]="testaments[0]"
              ></lib-testament-card>
            </swiper-slide>
            <swiper-slide>
              <lib-testament-card
                [testament]="testaments[1]"
              ></lib-testament-card>
            </swiper-slide>
            <swiper-slide>
              <lib-testament-card
                [testament]="testaments[2]"
              ></lib-testament-card>
            </swiper-slide>
            <swiper-slide>
              <lib-testament-card
                [testament]="testaments[3]"
              ></lib-testament-card>
            </swiper-slide>
            <swiper-slide>
              <lib-testament-card
                [testament]="testaments[4]"
              ></lib-testament-card>
            </swiper-slide>
          </swiper-container>
        </section>
        <!--  -->
        <section class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <lib-content-template-1 [content]="content"></lib-content-template-1>
        </section>
        <section class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <ul
            class="grid grid-cols-1 lg:grid-cols-2 gap-22.5px lg:gap-[2.8rem] mt-8 md:mt-0"
          >
            @for (accordion of accordions; track $index) {
            <li>
              <lib-accordion [accordion]="accordion"></lib-accordion>
            </li>
            }
          </ul>
        </section>
        <footer class="px-22.5px py-18px lg:px-45px lg:py-36px">
          <div class="flex justify-center">
            <a class="cursor-pointer">
              <img src="assets/flyer.avif" alt="logo" />
            </a>
          </div>
          <div
            class="grid grid-cols-1 gap-10 py-36px lg:grid-cols-3 mb-45px md:mb-0"
          >
            <div>
              <div class="grid grid-cols-2 gap-10">
                @for (footerLink of footerLinks; track $index) {
                <ul>
                  @for (link of footerLink.links; track $index) {
                  <li class="text-xl mb-2">
                    <a href="#">{{ link }}</a>
                  </li>
                  }
                </ul>
                }
              </div>
            </div>
            <div>
              <h2 class="text-h3 lg:text-[2.25rem] mb-4">SIGN UP & SAVE</h2>
              <div class="flex flex-col lg:flex-row gap-2 ">
                <input
                  class="w-full bg-black border-2 border-white p-4 rounded-md placeholder-white"
                  type="email"
                  placeholder="email@example.com"
                />
                <button
                  class="text-nowrap p-4 bg-orange rounded-md text-black text-xl hover:-translate-y-[.3rem] duration-100"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div class="text-end">
              <h3 class="text-xl">STAY AWHILE &#64;DRINKFLYERS</h3>
              <ul class="flex lg:justify-end gap-4 mt-8">
                <li>
                  <a>
                    <img src="assets/svg/instagram.svg" alt="instagram icon" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="assets/svg/tiktok.svg" alt="tiktok icon" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="assets/svg/youtube.svg" alt="youtube icon" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src="assets/svg/linkedin.svg" alt="linkedin icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="flex flex-col lg:flex-row justify-between gap-45px lg:gap-0"
          >
            <p>© 2024, Flyers Cocktail Company. Powered by Shopify</p>
            <ul class="flex gap-4 md:justify-end">
              <li>
                <img src="assets/svg/am_express.svg" alt="visa icon" />
              </li>
              <li>
                <img src="assets/svg/dinner_club.svg" alt="dinner club icon" />
              </li>
              <li>
                <img src="assets/svg/discover.svg" alt="discover icon" />
              </li>
              <li>
                <img src="assets/svg/jcb.svg" alt="JCB icon" />
              </li>
              <li>
                <img src="assets/svg/mastercard.svg" alt="mastercard icon" />
              </li>
              <li>
                <img src="assets/svg/visa.svg" alt="visa icon" />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  `,
  styles: `

  a:hover {
    cursor: pointer;
  }

  .discount-info {
    animation: marquee 30s linear infinite;
  }

  .swiper-wrapper {
  transition-timing-function: linear !important;
  animation-timing-function: linear !important;
}

  swiper-slide{
    transition-timing-function: linear !important;
    animation-timing-function: linear !important;
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
  backdropOpening = signal<boolean>(false);
  leftMenuOpening = signal<boolean>(false);
  rightMenuOpening = signal<boolean>(false);
  searchOpening = signal<boolean>(false);

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

  testaments: {
    quote: string;
    name: string;
  }[] = [
    {
      quote:
        'Refreshing and the perfect go-to for after work or out on the town.',
      name: 'Gwen. B',
    },
    {
      quote: 'A delightful drink that helps me unwind without any hangover.',
      name: 'John D.',
    },
    {
      quote: 'Perfect for social gatherings, everyone loved it!',
      name: 'Emily R.',
    },
    {
      quote: 'A great alternative to traditional cocktails, tastes amazing!',
      name: 'Michael S.',
    },
    {
      quote: 'I love the flavors and the relaxing effect it has.',
      name: 'Sarah W.',
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

  accordions: {
    question: string;
    answer: string;
  }[] = [
    {
      question: 'How will Flyers make me feel?',
      answer:
        'Crafted with 5mg of hemp-derived effect, we formulated our cocktails to bring you a light sense of euphoria and relaxation. With our nanotech, you should start to feel these effects within 15 minutes and last for about 45 minutes. Please note, this can vary person to person.',
    },
    {
      question: 'How many cocktails should I drink?',
      answer:
        'We recommend starting with a half or full can to feel the effects first before drinking another.',
    },
    {
      question: 'What else is in Flyers cocktails?',
      answer:
        'Besides our hemp-derived effect, our cocktails are crafted with natural ingredients expertly measured by our Chief Flavor Officer to deliver award winning taste & perfect feel. Scan our can’s QR code to see our testing results.',
    },
    {
      question: "I'm under 21, can I drink Flyers?",
      answer:
        'While we appreciate the enthusiasm, the law is a little less eager. Sit back and wait until your 21st birthday, and perhaps ask your friends and family to hook you up on your special day.',
    },
  ];

  footerLinks: {
    title: string;
    links: string[];
  }[] = [
    {
      title: 'Privacy Policy',
      links: [
        'Privacy Policy',
        'Shipping & Returns',
        'FDA Disclaimer',
        'Terms & Conditions',
        'COA',
      ],
    },
    {
      title: 'Shop',
      links: ['SHOP ALL', 'FAQ', 'CONTACT', 'REVIEWS'],
    },
  ];

  showLeftMenu() {
    this.backdropOpening.set(true);
    this.leftMenuOpening.set(true);
  }

  showRightMenu() {
    this.backdropOpening.set(true);
    this.rightMenuOpening.set(true);
  }

  showSearch() {
    this.searchOpening.set(true);
  }

  closeSearch() {
    this.searchOpening.set(false);
  }

  closeAll() {
    this._closeBackdrop();
    this._closeLeftMenu();
    this._closeRightMenu();
    this.closeSearch();
  }

  _closeLeftMenu() {
    this.leftMenuOpening.set(false);
  }
  _closeRightMenu() {
    this.rightMenuOpening.set(false);
  }
  _closeBackdrop() {
    this.backdropOpening.set(false);
  }
}
