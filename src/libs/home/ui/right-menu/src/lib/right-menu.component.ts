import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-right-menu',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="h-screen bg-black text-white">
      <div class="flex justify-between items-center px-45px pt-22.5px pb-6">
        <h2 class="text-[1.875rem]">YOUR CART</h2>
        <button (click)="onClose()">
          <mat-icon>
            <img src="assets/svg/close.svg" alt="close" />
          </mat-icon>
        </button>
      </div>
      <p class="text-center text-18px">Your cart is currently empty.</p>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightMenuComponent {
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
