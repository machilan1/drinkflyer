import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '@drinkflyer/marquee';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, MarqueeComponent],
  template: `
    <div class="bg-black text-white overflow-hidden">
      <lib-marquee discountInfo="FREE SHIPPING ON ORDERS $35+"></lib-marquee>
      <header>
        <button>left sidebar trigger</button>
        <img src="assets/logo.png" alt="logo" />
        <button>search bar trigger</button>
        <button>right sidebar trigger</button>
      </header>
      <section>
        <img src="" alt="hero image" />
        <a>Shop now</a>
      </section>
      <section>
        <ul>
          <li>a product</li>
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
export class HomeComponent {}
