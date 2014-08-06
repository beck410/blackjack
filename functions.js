var showCards = document.getElementById("cards");
showCards.onclick = function(){ displayCards() };

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
  return deck;  
}

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);
  
  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.parentNode.insertBefore(card, cardContainer.nextSibling);
    //URL NOT WORKING
    card.style.backgroundImage = "url(card-img/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";
  }
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



