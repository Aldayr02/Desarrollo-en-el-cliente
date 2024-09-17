import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  cards: any[] = [];
  flippedCards: number[] = [];
  attempts: number = 0;
  showCongratulations: boolean = false;

  startGame() {
    this.cards = this.generateCards();
    this.flippedCards = [];
    this.attempts = 0;
    this.showCongratulations = false;
  }

  generateCards() {
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const duplicatedValues = [...cardValues, ...cardValues];

    return this.shuffle(duplicatedValues).map((value) => ({
      content: value,
      isFlipped: false,
      matched: false,
    }));
  }

  shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleCardClick(index: number) {
    const card = this.cards[index];

    if (this.flippedCards.length < 2 && !card.isFlipped && !card.matched) {
      card.isFlipped = true;
      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        this.checkForMatch();
      }
    }
  }

  checkForMatch() {
    const [index1, index2] = this.flippedCards;
    const card1 = this.cards[index1];
    const card2 = this.cards[index2];

    if (card1.content === card2.content) {
      card1.matched = true;
      card2.matched = true;
    } else {
      setTimeout(() => {
        card1.isFlipped = false;
        card2.isFlipped = false;
      }, 1000);
    }

    this.flippedCards = [];
    this.attempts++;

    if (this.cards.every((card) => card.matched)) {
      this.showCongratulations = true;
    }
  }
}
