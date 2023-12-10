class Card{ // A class is a template that is use for creating objects. it allows the user data to be encapsulation, which hides your data inside a class
    constructor(rank,suit){
        this.rank = rank;
        this.suit = suit;
    }
    display(){
        console.log(`${this.rank} of ${this.suit}`); // Template literals, allows for multi lines of string
    }
}
class Deck {  
    constructor() {
      this.cards = [];// An Array is a object that can hold more than one variable. 
      this.initializeDeck(); // this keyword define the current object. 
      this.shuffle();
    }
  
    initializeDeck() { // Definding my deck. 
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  
      for (const suit of suits) { // for statement creates a loop 
        for (const rank of ranks) { // const keyword declare a variable, however that variable can't be reassigned a new value
          this.cards.push(new Card(rank, suit));// push adds a new element to an array, it will show up as the last element in your array and returns a new array
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) { /// for loop, you got your initalize, condition and afterthought. notice the i-- that operator subtracts one from its opendend and returns it.
        const j = Math.floor(Math.random() * (i + 1));// Math. floor method rounds down and returns the largest integer that is either the same or less to the given number
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCard() {
      return this.cards.pop();//pop removes the last element of an array.
    }
  }
  
  
  
 class Player{ // creating player data 
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    playCard(){
        return this.hand.pop();
    }
    addScore(){
        this.score += 1;// the addition assignment performs  an addition assigment and creates a new value.
    }
 }
 class Game{
    constructor(){
        this.player1 = new Player('Will');
        this.player2 = new Player ('Buddyroo');
        this.deck = new Deck();
    }
    initializeGame(){
        for (let i = 0; i < 26; i++){
            this.player1.hand.push(this.deck.dealCard());
            this.player2.hand.push(this.deck.dealCard());
        }
    }
    compareCards(card1,card2){
        const rankOrder = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const rank1 = rankOrder.indexOf(card1.rank);
        const rank2 = rankOrder.indexOf(card2.rank);

        if(rank1 > rank2)return this.player1;
        if(rank1 < rank2)return this.player2;
        return null; // Tie Game null is undefined
    }
    playRound(){
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();
        card1.display();
        card2.display();
        const roundWinner = this.compareCards(card1,card2);

        if (roundWinner === this.player1){ /// strict equality  checks if two openends are are equal and returns Boolean results
            this.player1.addScore();
        } else if(roundWinner === this.player2){ // will run if the if statment is false
            this.player2.addScore();
        }
    }
    displayWinner(){
        console.log(`Final Score: \n ${this.player1.name}: ${this.player1.score}\n ${this.player2.name}:${this.player2.score}`);
        if(this.player1.score > this.player2.score){
            console.log(`${this.player1.name} wins!`);
        } else if (this.player1.score<this.player2.score){
            console.log(`${this.player2.name} wins!`);
        } else {
            console.log('Its a tie!');
        }
    }
    playGame(){
        this.initializeGame();
        for (let i = 0; i < 26; i++){ // notice the difference with the afterthought. ++ 
            this.playRound();
        }
        this.displayWinner();
    }
}
//Runs the game.//
const warGame = new Game();
warGame.playGame();
