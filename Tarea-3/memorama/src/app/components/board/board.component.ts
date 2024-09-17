import { Component } from '@angular/core';
import { GameService } from '../../game.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.startGame();
  }

  cardClicked(index: number) {
    this.gameService.handleCardClick(index);
  }

  resetGame() {
    this.gameService.startGame();
    this.gameService.showCongratulations = false;
  }
}
