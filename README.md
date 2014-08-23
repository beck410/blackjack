Blackjack
=========

Blackjack Game made from Javascript

 ------------------------
|---UNDER CONSTRUCTION---|
 ------------------------

Functions

// loaded onclick = $$ buy in
startGame() {
     - change display prop of card table (block)
     - change display prop of start message (none)
     - 
     - var deck = newDeck() // creates deck of 52 cards & shuffles
     
     while(player has money){
        - newPlay(deck) {
        
        - initialCards(deck[0], deck[1], deck[2]) //function that displays one dealer card and 2 player cards 
    
        - remove first 3 objects from deck 
     
        - playersTurn(deck, dealersTurn(deck) )//function that displays player options - returns array of cards used from deck - callback function is dealer's options
     
        - var playerCards = playersTurn(deck) 
        - var dealersCards = dealersTurn(deck) 
        - remove length of playersCards and dealersCards from deck  
    
    
        return length of deck
    }    
        }
 
    -var removeCards = newPlay(deck)
    - remove removeCards from deck 
    
}

initialCards(playerCard-1, playerCard-2, dealerCard-1){
    
    - create <img> tag and add src for playerCard-1 & playerCard-2
    - create <img> tag and add src for dealerCard-1
}

playersTurn(deck, callback) {
    - change display prop for player options div 
    - add if statements for doubledown, split, insurance
    - call callback when certain criteria is met (over 21, player clicks stand)
    - var playerHitCards = hit(deck, parentNode);
    - return playerHitCards
}

dealersTurn(deck, dealer-card) {
    - change second dealer card <img> to next deck card
    - remove card from deck
    - while (dealer is under 17 or 21){
        switch statements (hit, stand, doubledown, split)
    }
    
    - return dealer cards - hit(deck, parentNode) + 2 image cards 
}

    
//PLAYER OPTIONS

hit(deck, parentNode) {
    - take first card from deck and display under parentNode 
    - put card object into new array 
    - return array of cards used
}

stand() {  
    dealersTurn() or continue
}

doubledown() //LEAVE OUT FOR NOW

split(){ //LEAVE OUT FOR NOW
    if( card 1 === card 2 ){
        -increase margin
        - give 2 more cards
        - create 2 arrays and return them in one big array
}

insurance() //LEAVE OUT FOR NOW