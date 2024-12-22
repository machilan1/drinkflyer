import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-backdrop',
  imports: [CommonModule],
  template: `
    <button
      (click)="click()"
      #backdrop
      [ngClass]="{
        'opacity-0': !opening(),
        'opacity-70': opening(),
        'z-[45]': opening(),
        'z-[-1]': !opening()
      }"
      class=" text-transparent w-screen h-screen fixed top-0 left-0  bg-white opacity-70 duration-200"
    >
      _
    </button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackdropComponent {
  opening = input.required<boolean>();
  clicked = output<void>();

  click() {
    this.clicked.emit();
  }
}
