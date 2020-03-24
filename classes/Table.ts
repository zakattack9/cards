class Table {
  game: Game;
  players: Player[];
  deck: Deck;

  constructor(game: Game, players: Player[]) {
    this.game = game;
    this.players = players;
    // this.deck = new Deck();
  }
}