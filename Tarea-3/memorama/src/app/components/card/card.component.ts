import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card: any;
  @Input() isFlipped: boolean = false;

  flipCard() {
    if (!this.card.matched && !this.isFlipped) {
      this.isFlipped = !this.isFlipped;
    }
  }
}
