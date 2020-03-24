enum Suit {
  Club = 1,
  Spade,
  Diamond,
  Heart
}

class Card {
  suit: Suit;
  value: number;
  private image: string;
  
  constructor(suit: Suit, value: number) {
    this.suit = suit;
    this.value = value;
  }
}