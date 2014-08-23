var lowBet = document.getElementById("200");
lowBet.onclick=function(){ showTable() };

// Start Game
function showTable(){
  //show table/deck etc and remove start message
  var gameSetUp = document.getElementById("game-setup");
  var cardTable = document.getElementById("card-table");
  var start = document.getElementById("start");
  
  gameSetUp.style.display="block";
  cardTable.style.display="block";
  start.style.display="none";
  
  //Deck of cards for game
  var deck = newDeck();
  
  //adds dealer cards
  initialCards(deck[0],deck[1]);
  
  //get these cards to check against player cards
  
  alert(deck[0].card);
  
  deck.splice(0, 2);
  //removes dealer card
  alert(deck[0].card);

  
}
/* 
//show dealer cards - pull first 2 cards from deck
function initialCards(card1, card2){
  var card1img = card1.suit + "-" + card1.card;
  var card2img = card2.suit + "-" + card2.card;
  var dealerParent1 = document.getElementById("dealer-card-1");
  var dealerParent2 = document.getElementById("dealer-card-2");

        
  var dealer1Img = document.createElement('img');
  var dealer2Img = document.createElement('img');
  
  dealer1Img.src = "card-img/" + card1img + ".png";
  dealer2Img.src = "card-img/" + card2img + ".png";
  
  dealerParent1.appendChild(dealer1Img);
  dealerParent2.appendChild(dealer2Img);
  
}
*/
//creates a deck of 52 cards - each card object has a suit,card and points 
function newDeck(){

  var ranks = [ {card:"a", lowPoint: 1, highPoint: 11 },
               {card:"2", points:2} , {card:"3", points:3}, {card:"4", points:4}, {card:"5", points:5}, {card:"6", points: 6}, {card:"7", points: 7}, {card:"8", points:8}, {card:"9", points:9}, {card:"10", points:10}, {card:"j", points:10}, {card:"q", points:10}, {card:"k", points:10} ];
  
  var suits = [ "d", "c", "s", "h"];
  var numOfCards = ranks.length*suits.length;
  
  var deck = [];
  
  // for each suit
  for(var i=0; i<suits.length; i++){
    //for each rank
    for(var j=0; j<ranks.length; j++){
      if(ranks[j].card === "A"){
        deck.push({suit:suits[i], card:ranks[j].card, lowPoint: ranks[j].lowPoint, highPoint: ranks[j].highPoint});
      }
      else{
        deck.push({suit: suits[i], card: ranks[j].card, points: ranks[j].points});
      }
    }
  }  
  
  return shuffleCards(deck);
  
}

//returns new shuffled card array
function shuffleCards(numbers){
   for (var i = numbers.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1));
     var temp = numbers[i];
     numbers[i] = numbers[j];
     numbers[j] = temp;
   }
   return(numbers);
}

