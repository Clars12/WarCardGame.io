console.log("hello!");
// make a deck - class. consider suit
// due date 12/12
//fisher yates shuffle
//what is getters and setters
//https://stackoverflow.com/questions/72144031/i-have-some-instances-of-a-class-and-i-pushed-them-into-an-array-can-i-loop-thr

// class MainDeck {
//          constructor(cardname, suit) {
//          this.cardname = cardname;
//          this.suit = suit;
//          }

// }
// class MDVal extends MainDeck {
//         constructor(cardname, suit, value)
//         super(cardname, suit);
//         this.value = value
// }
// // //load the MainDeck Class. 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace | Hearts, Diamonds, Spades, and Clubs, can I loop this 
// // //   const civic = new Car('Honda Civic', 'lemonchiffon');

// const twohearts = New MDVal (2, 'Hearts', 2);

// console.log (twohearts);

// const deck[]

// class card {
//         constructor(suit, value){
//             this.suit=suit;
//             this.value=value;
//         }
// }
//  const twoH = new card('Hearts',2);
//  const threeH = new card('Hearts',3);
//  const fourH = new card('Hearts',4);
//  const fiveH = new card('Hearts',5);
//  const sixH = new card('Hearts',6);
//  const sevenH = new card('Hearts',7);
//  const eightH = new card('Hearts',8);
//  const nineH = new card('Hearts',9);
//  const tenH = new card('Hearts',10);
//  const jackH = new card('Hearts',11);
//  const queenH = new card('Hearts',12);
//  const kingH = new card('Hearts',13);
//  const aceH = new card('Hearts',14);

// for each card(deck.push(card))


 //deck.push(twoH,threeH,fourH,fiveh,sixH,sevenH,eightH,nineH,ten,H)
 
//  console.log (aceH.suit);
//  console.log(deck)


// would load the class maindeck into an array use 'push'"fruits.push("Kiwi", "Lemon");'- 'pop'const popped = myFish.pop();' removes the last one. need to shuffle firstm 'shuffle(arr);'

class card {
    constructor(suit, value){
        this.suit=suit;
        this.value=value;
    }
}
const deck=[];

deck.push(new card('h',2), new card('h',3), new card('h',4), new card('h',5), new card('h',6), new card('h',7), new card('h',8), new card('h',9), new card('h',10), new card('h',11));

//Shuffle the deck
function shuffle(arr) {
    var i = arr.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

shuffle(deck)
console.log(deck);

console.log(deck[5].value)

///split and distribute the deck
const middle = Math.ceil(deck.length / 2);
const player1 = deck.splice(0, middle);   
const player2 = deck.splice(-middle);

console.log(player1);  
console.log(player2); 

//Play the game

let p1hand = player1.pop()
let p2hand = player2.pop()

console.log(p1hand)
console.log(p2hand)

if (p1hand === p2hand) {
    console.log('sames');    
} else 
    if (p1hand > p2hand) {
    player1.unshift(p2hand);
    player1.unshift(p1hand);
} else {
    player2.unshift(p1hand);
    player2.unshift(p2hand);

}
console.log(player1);  
console.log(player2); 

///expandin on 'sames'

if (player1.length < 2) {
    console.log('player 2 has won')
    return false;
} 
if player2.length < 2 {
    console.log('player 1 has won')
    return false;
}

let p1handw1= player1.pop()
let p1handw2= player1.pop()
let p2handw1= player2.pop()
let p2handw2= player2.pop()

if (p1handw2 === p2handw2){
    console.log('samesinwarround1')
} else if 


console.log(player1.length)





