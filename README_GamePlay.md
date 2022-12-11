## War Card Game Script

###Setting the game up
The game begins by creating an empty _deck_ and a _card class_
_Cards_ are then created and pushed to the _deck_
The deck is _shuffled_ and _spliced_ in half
**Player 1** recieves half the cards into a _player1 deck_
**Player 2** recieves half the cards into a _player2 deck_

###Playing the game
Players have thier decks face down
Each player takes a card from the **top** of thier deck  and compares them. This is the hand
Whichever player has the card with the higher _value_ takes both cards and puts them on the bottom of thier _player deck_
Then a new hand is played
**War** occurs if both of the players cards are equal values - a tie
In the first round of **war** each player adds 2 more additional cards to the pot and then plays a third to compare. The winner takes the pot (all cards)
If in the first round of **war** it is a tie, each player continues to play single cards until a winner is declared
The winner recieves the pot (all cards played during war)

###Game Over
The game is over when one player has all 52 cards. They are declared the _winner_

###_Note on Shuffle_##
In this version, cards won from the other player are placed at the bottom of the player deck **Face up**
When a player has played all of thier orginal cards (face down cards) they then shuffle their deck, place the deck **Face Down** and resume play
This could repeat multiple times in the game and occasionally shuffling can occur
