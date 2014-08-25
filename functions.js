var lowBet = document.getElementById("200");
lowBet.onclick=function(){ startGame() };


// Start Game
function startGame(){
  //show table/deck etc and remove start message
  var cardTable = document.getElementById("card-table");
  var start = document.getElementById("start");
  
  cardTable.style.display="block";
  start.style.display="none";
  
  //Deck of cards for game
  var deck = newDeck();
  
  //keep playing new hand until player is out of money - for now, just play new hand twice
  //WORKING LOOP
  var x = 0;
  while(x < 1 ){
  
  //add event listeners to player options

    //empty array to collect cards to count
    var playerPoints = [];
    var dealerPoints = []; 
    
    //put initial cards in points arrays
    playerPoints.push(deck[0],deck[2]);
    dealerPoints.push(deck[1], deck[3]);
    
    //display initial cards on table
    initialCards(playerPoints, dealerPoints);
    
    //removes 4 inital cards from deck 
    deck.splice(0,4);
    
    var hitOption = document.getElementById("hitOption");
    var standOption = document.getElementById("standOption");
    hitOption.addEventListener('click', function(){ hit(deck, playerPoints); }, false);
    standOption.addEventListener('click', function(){ stand(deck, dealerPoints, playerOptions)}, false);
    
    //show player options
    var playerOptions = document.getElementById("playerOptions");
    playerOptions.style.display="block";
    
    
    //stops infinite loop - FOR DEVELOPMENT PURPOSES
    x += 1;
  }
}

function hit(deck , playerPoints){
  //new <img> for card
    playerPoints.push(deck[0]);
    deck.splice(0,1);
    return playerPoints;
}

function stand(deck, player, playerOptions){
  playerOptions.style.display="none";
  //turn show card into first prop in dealerPoints array 
}

function initialCards(playerCards, dealerCards){
  //card-img names
  var pCardimg1 = playerCards[0].suit + '-' + playerCards[0].card;
  var pCardimg2 = playerCards[1].suit + '-' + playerCards[1].card;
  var dCardimg1 = dealerCards[0].suit + '-' + dealerCards[0].card;
  //parent nodes for cards
  var playerParent = document.getElementById("playerCards");
  var dealerParent = document.getElementById("dealerCards");
  //new img elements for each card
  var pCard1 = document.createElement("img");
  var pCard2 = document.createElement("img");
  var dCard1 = document.createElement("img");
  
  //add img src to img elements
  pCard1.src = "card-img/" + pCardimg1 + ".png";
  pCard2.src = "card-img/" + pCardimg2 + ".png";
  dCard1.src = "card-img/" + dCardimg1 + ".png";
  
  //add img below parent div
  playerParent.appendChild(pCard1);
  playerParent.appendChild(pCard2);
  dealerParent.appendChild(dCard1);
}

//creates a deck of 52 cards - each card object has a suit,card and points 
function newDeck(){

  var ranks = [ {card:"a", lowPoint: 1, highPoint: 11 },
               {card:"2", points:2} , {card:"3", points:3}, {card:"4", points:4}, {card:"5", points:5}, {card:"6", points: 6}, {card:"7", points: 7}, {card:"8", points:8}, {card:"9", points:9}, {card:"10", points:10}, {card:"j", points:10}, {card:"q", points:10}, {card:"k", points:10} ];
  
  var suits = [ "d", "c", "s", "h"];
  //var numOfCards = ranks.length*suits.length;
  
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

