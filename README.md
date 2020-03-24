# cards
Multiplayer card game

### Tech Stack:
- React
- TypeScript
- socket.io (for websockets)
- DynamoDB

#### TODO:
- Create websocket server using socket.io
- Design modular system to swap out games easily

#### Stretch Goals:
- Add in other card games
- Program CPU with TensorFlow

## Classes:
### Table
Determines next player's turn, distributes cards, manages all cards played, checks with Game class if game is over. Contains Game, Player, Deck classes.

### Game (GameEngine?)
Contains game logic, determines when a game is over, filters out cards needed for game

### Player
Contains player's hand, wins/losses 

### Deck
Contains multiple card classes, handles shuffling of cards

### Card
Attributes such as card value, rank, image/style, and special properties