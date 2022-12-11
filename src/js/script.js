//FINAL 20221211
// create the deck
class card {
    constructor(suit, value){
        this.suit=suit;
        this.value=value;
    }
}
const deck=[];

deck.push(new card('h',2), new card('h',3), new card('h',4), new card('h',5), new card('h',6), new card('h',7), new card('h',8), new card('h',9), new card('h',10), new card('h',11),new card('h',12), new card ('h',13), new card ('h',13),
new card('s',2), new card('s',3), new card('s',4), new card('s',5), new card('s',6), new card('s',7), new card('s',8), new card('s',9), new card('s',10), new card('s',11),new card('s',12), new card ('s',13), new card ('s',13),
new card('c',2), new card('c',3), new card('c',4), new card('c',5), new card('c',6), new card('c',7), new card('c',8), new card('c',9), new card('c',10), new card('c',11),new card('c',12), new card ('c',13), new card ('c',13),
new card('d',2), new card('d',3), new card('d',4), new card('d',5), new card('d',6), new card('d',7), new card('d',8), new card('d',9), new card('d',10), new card('d',11),new card('d',12), new card ('d',13), new card ('d',13));

shuffle(deck)

///split and distribute the deck
const middle = Math.ceil(deck.length / 2);
const player1 = deck.splice(0, middle);   
const player2 = deck.splice(-middle);


//start the game
let gametime = true;
let innerloop = true;
let pot = [];
let p1shuffcard = player1[0];
let p2shuffcard = player2[0];


do { 
let counter = 10000;
    do {
      
        ck_winners();
        if (gametime === false) {
          return false;
        }
         
        let p1card = p1_pop();
        let p2card = p2_pop();
        
        if (p1card.value === p2card.value) {
          console.log("WARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
        
                ck_winners();
                if (gametime === false) {
                  return false;
                }
           
                     // add to the pot for war 
                      pot.unshift(p1card, p2card,p1_pop(),p1_pop(),p2_pop(),p2_pop());
                      console.log(pot);
                      p1card = p1_pop();
                      p2card = p2_pop();

                ck_winners();
                if (gametime === false) {
                  return false;
                }
                    
                    if (p1card.value === p2card.value) {
                          console.log('war inner loop');
                          do {

                              innerloop = true;
                              pot.unshift(p1card, p2card);

                             ck_winners();
                             if (gametime === false) {
                              return false;
                             }

                              p1card = p1_pop();
                              p2card = p2_pop();
                              
                              if (p1card.value === p2card.value) {
                                 innerloop = true;
                              } else if (p1card.value > p2card.value) {
                                  pot.unshift(p1card, p2card);
                                  [].unshift.apply(player1,pot);
                                  pot.length = 0;
                                  innerloop = false;
                              } else if (p2card.value > p1card.value) {
                                  pot.unshift(p1card, p2card);
                                  [].unshift.apply(player2,pot);
                                  pot.length=0;
                                  innerloop = false;
                              } else {
                                  console.log('innerloop error')
                                  innerloop = false;
                                  gametime = false;
                              }
                            
                              
                          } while (innerloop === true);  

                    } else if (p1card.value > p2card.value) {
                        pot.unshift(p1card, p2card);
                        [].unshift.apply(player1,pot);
                        pot.length=0;
                    

                    } else if (p2card.value > p1card.value) {
                      pot.unshift(p1card, p2card);
                      [].unshift.apply(player2,pot);
                      pot.length=0;

                    } else { 
                        console.log('innerloop error')
                        console.log(p1card);
                        console.log(p2card);
          
                    }                                                                    
          } else if (p1card.value > p2card.value) {
              player1.unshift(p1card,p2card);
              ck_winners();
                if (gametime === false) {
                return false;
            }
          } else if (p2card.value > p1card.value) { 
              player2.unshift(p1card,p2card);
              ck_winners();
                if (gametime === false) {
                return false;
            }
          } else {
            console.log('main hand problem comparing hands')
            console.log(p1card);
            console.log(p2card);
            }
                 
        console.log(player1.length);
        console.log(player2.length);

        counter--;
        console.log(counter);

     } while (counter > 1 && gametime === true);
     gametime = false;
    } while (gametime === true);


  //Functions:

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

// Check for winners:

 function ck_winners() {
      if (player1.length < 1 && player2.length >1) {
        console.log ('Winner: Player 2');
        gametime = false;
    } else if (player1.length > 1 && player2.length < 1) {
        console.log ('Winner: Player 1');
        gametime = false;
    } 
}

function p1_pop() {
  if (player1.length >0) {
    let f1 = player1.pop() 
      if (f1.value === p1shuffcard.value && f1.suit === p1shuffcard.suit) {
        shuffle (player1);
          if (player1.length > 0) {
            p1shuffcard = player1[0];
          } else {
            p1shuffcard = f1;
          }
        console.log('shuffle1');   
    }
    return f1;
  }
}
function p2_pop() {
  if (player2.length >0){
    let f2 = player2.pop()
    if (f2.value === p2shuffcard.value && f2.suit === p2shuffcard.suit) {
        shuffle (player2);
          if (player2.length > 0){
            p2shuffcard = player2[0];
          } else {
            p2shuffcard = f2;
          }
        console.log('shuffle2');    
    }
    return f2;
  }
}




