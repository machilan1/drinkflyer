import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-left-menu',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class=" h-screen bg-black py-22.5px px-45px text-white">
      <button (click)="onClose()">
        <mat-icon>
          <img src="assets/svg/close.svg" alt="close" />
        </mat-icon>
      </button>
      <ul class="mb-22.5px mt-45px">
        <li class="text-h3 py-1"><a href="">SHOP ALL</a></li>
        <li class="text-h3 py-1"><a href="">FAQ</a></li>
        <li class="text-h3 py-1"><a href="">CONTACT</a></li>
        <li class="text-h3 py-1"><a href="">REVIEWS</a></li>
      </ul>
      <p class="mb-2">
        <a href="">Log In</a>
      </p>
      <p class="mb-2">
        <a href="">Create account</a>
      </p>
      <div
        class="py-3 px-4 border border-white rounded-md bg-transparent flex items-center mt-8 text-base"
      >
        <input
          class="bg-transparent outline-none w-full placeholder-white text-base"
          type="text"
          placeholder="Search"
        />

        <button>
          <mat-icon>
            <img src="assets/svg/mag.svg" alt="search" />
          </mat-icon>
        </button>
      </div>
      <ul class="flex gap-4 mt-8">
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
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent {
  close = output<void>();
  onClose() {
    this.close.emit();
  }
}
