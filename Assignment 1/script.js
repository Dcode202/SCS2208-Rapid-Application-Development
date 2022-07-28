/*============================================= SETTING UP ==================================================*/

var turn = 0 // 0 -> player 1's turn
             // 1 -> player 2's turn

var x = document.getElementById("roll");    // for the event-listener

var P1num1 = 0;     // player 1's 1st dice
var P1num2 = 0;     // player 1's 2nd dice
var P2num1 = 0;     // player 2's 1st dice
var P2num2 = 0;     // player 2's 2nd dice
var tot1 = 0;       // player 1 total score
var tot2 = 0;       // player 2 total score


/*============================================= PLAYER INFO ==================================================*/

//calling startGame() function on each button click
function startGame(){
    
    if(turn == 0){
        // rolling the two dices at the same time
        x.addEventListener("click", dice1());
        x.addEventListener("click", dice2());
            
        // if both the dices give 1, total score -> 0
        if(P1num1 == 1 && P1num2 == 1){
            tot1 = 0;
            document.getElementById("p1Marks").innerHTML = tot1;
        }
        // if both dices results are same
        else if(P1num1 == P1num2){
            // gets another chance
            tot1 = tot1 + P1num1 + P1num2;
            document.getElementById("p1Marks").innerHTML = tot1;
            return;
        }
        else{
            tot1 = tot1 + P1num1 + P1num2;
            document.getElementById("p1Marks").innerHTML = tot1;
        }
            
        // if reached the winning score
        setTimeout(function(){
            if(tot1 >= 100){
                document.getElementById("p1Marks").innerHTML = "&#127881;Winner!";
                document.getElementById("p1Marks").style.fontSize = "32px";
                document.getElementById("p2Marks").style.fontSize = "32px";
                document.getElementById("p1Marks").style.color = "#23bd0d";
                document.getElementById("p2Marks").style.color = "#bd0d3d";
                document.getElementById("p1Marks").style.fontWeight = "600";
                document.getElementById("roll").style.display = "none";
            }
        }, 2000);
            
        // changing players turn after some time
        setTimeout(function () {document.getElementById("player").innerHTML = "Player 2's Turn";}, 2000);
        turn = 1;
        
    }
    else{
        x.addEventListener("click", dice1());
        x.addEventListener("click", dice2());
            
        if(P2num1 == 1 && P2num2 == 1){
            tot2 = 0
            document.getElementById("p2Marks").innerHTML = tot2;
        }
        else if(P2num1 == P2num2){
            tot2 = tot2 + P2num1 + P2num2;
            document.getElementById("p2Marks").innerHTML = tot2;
            return;
        }
        else{
            tot2 = tot2 + P2num1 + P2num2;
            document.getElementById("p2Marks").innerHTML = tot2;
        }
            
        setTimeout(function(){
            if(tot2 >= 100){
                document.getElementById("p2Marks").innerHTML = "&#127881;Winner!";
                document.getElementById("p2Marks").style.fontSize = "32px";
                document.getElementById("p1Marks").style.fontSize = "32px";
                document.getElementById("p2Marks").style.color = "#23bd0d";
                document.getElementById("p1Marks").style.color = "#bd0d3d";
                document.getElementById("p2Marks").style.fontWeight = "600";
                document.getElementById("roll").style.display = "none";
            }
        }, 2000);
            
        setTimeout(function () {document.getElementById("player").innerHTML = "Player 1's Turn";}, 2000);
        turn = 0;
        
    }
}
 

/*============================================= ROLLING THE DICE ==================================================*/

// for the first dice
function dice1(){
    
    // generating random number
    // Math.floor(Math.random() * (max - min + 1)) + min
    if(turn == 0){
        P1num1 = Math.floor(Math.random() * 6) + 1;
    }
    else{
        P2num1 = Math.floor(Math.random() * 6) + 1;
    }
    
    // displaying the relavant image and hiding others
    if((P1num1 == 1 && turn == 0) || (P2num1 == 1 && turn == 1)){
        document.getElementById("dice1-1").style.display = "inline";
        document.getElementById("dice1-2").style.display = "none";
        document.getElementById("dice1-3").style.display = "none";
        document.getElementById("dice1-4").style.display = "none";
        document.getElementById("dice1-5").style.display = "none";
        document.getElementById("dice1-6").style.display = "none";
    }
    else if((P1num1 == 2 && turn == 0) || (P2num1 == 2 && turn == 1)){
        document.getElementById("dice1-1").style.display = "none";
        document.getElementById("dice1-2").style.display = "inline";
        document.getElementById("dice1-3").style.display = "none";
        document.getElementById("dice1-4").style.display = "none";
        document.getElementById("dice1-5").style.display = "none";
        document.getElementById("dice1-6").style.display = "none";
    }
    else if((P1num1 == 3 && turn == 0) || (P2num1 == 3 && turn == 1)){
        document.getElementById("dice1-1").style.display = "none";
        document.getElementById("dice1-2").style.display = "none";
        document.getElementById("dice1-3").style.display = "inline";
        document.getElementById("dice1-4").style.display = "none";
        document.getElementById("dice1-5").style.display = "none";
        document.getElementById("dice1-6").style.display = "none";
    }
    else if((P1num1 == 4 && turn == 0)  || (P2num1 == 4 && turn == 1)){
        document.getElementById("dice1-1").style.display = "none";
        document.getElementById("dice1-2").style.display = "none";
        document.getElementById("dice1-3").style.display = "none";
        document.getElementById("dice1-4").style.display = "inline";
        document.getElementById("dice1-5").style.display = "none";
        document.getElementById("dice1-6").style.display = "none";
    }
    else if((P1num1 == 5 && turn == 0)  || (P2num1 == 5 && turn == 1)){
        document.getElementById("dice1-1").style.display = "none";
        document.getElementById("dice1-2").style.display = "none";
        document.getElementById("dice1-3").style.display = "none";
        document.getElementById("dice1-4").style.display = "none";
        document.getElementById("dice1-5").style.display = "inline";
        document.getElementById("dice1-6").style.display = "none";
    }
    else{
        document.getElementById("dice1-1").style.display = "none";
        document.getElementById("dice1-2").style.display = "none";
        document.getElementById("dice1-3").style.display = "none";
        document.getElementById("dice1-4").style.display = "none";
        document.getElementById("dice1-5").style.display = "none";
        document.getElementById("dice1-6").style.display = "inline";
    }

}

// for the second dice
function dice2(){
    
    if(turn == 0){
        P1num2 = Math.floor(Math.random() * 6) + 1;
    }
    else{
        P2num2 = Math.floor(Math.random() * 6) + 1;
    }
    
    if((P1num2 == 1 && turn == 0) || (P2num2 == 1 && turn == 1)){
        document.getElementById("dice2-1").style.display = "inline";
        document.getElementById("dice2-2").style.display = "none";
        document.getElementById("dice2-3").style.display = "none";
        document.getElementById("dice2-4").style.display = "none";
        document.getElementById("dice2-5").style.display = "none";
        document.getElementById("dice2-6").style.display = "none";
    }
    else if((P1num2 == 2 && turn == 0) || (P2num2 == 2 && turn == 1)){
        document.getElementById("dice2-1").style.display = "none";
        document.getElementById("dice2-2").style.display = "inline";
        document.getElementById("dice2-3").style.display = "none";
        document.getElementById("dice2-4").style.display = "none";
        document.getElementById("dice2-5").style.display = "none";
        document.getElementById("dice2-6").style.display = "none";
    }
    else if((P1num2 == 3 && turn == 0) || (P2num2 == 3 && turn == 1)){
        document.getElementById("dice2-1").style.display = "none";
        document.getElementById("dice2-2").style.display = "none";
        document.getElementById("dice2-3").style.display = "inline";
        document.getElementById("dice2-4").style.display = "none";
        document.getElementById("dice2-5").style.display = "none";
        document.getElementById("dice2-6").style.display = "none";
    }
    else if((P1num2 == 4 && turn == 0) || (P2num2 == 4 && turn == 1)){
        document.getElementById("dice2-1").style.display = "none";
        document.getElementById("dice2-2").style.display = "none";
        document.getElementById("dice2-3").style.display = "none";
        document.getElementById("dice2-4").style.display = "inline";
        document.getElementById("dice2-5").style.display = "none";
        document.getElementById("dice2-6").style.display = "none";
    }
    else if((P1num2 == 5 && turn == 0) || (P2num2 == 5 && turn == 1)){
        document.getElementById("dice2-1").style.display = "none";
        document.getElementById("dice2-2").style.display = "none";
        document.getElementById("dice2-3").style.display = "none";
        document.getElementById("dice2-4").style.display = "none";
        document.getElementById("dice2-5").style.display = "inline";
        document.getElementById("dice2-6").style.display = "none";
    }
    else{
        document.getElementById("dice2-1").style.display = "none";
        document.getElementById("dice2-2").style.display = "none";
        document.getElementById("dice2-3").style.display = "none";
        document.getElementById("dice2-4").style.display = "none";
        document.getElementById("dice2-5").style.display = "none";
        document.getElementById("dice2-6").style.display = "inline";
    }
   
}

