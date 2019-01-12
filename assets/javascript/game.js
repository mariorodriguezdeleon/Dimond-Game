$("document").ready(function(){
    
    //    $('#setup').html("function loaded");
    //    console.log("function is ready");
    
    //VARIABLES ======================================================
    
    let wins = 0;
    let losses = 0;
    
    let num1 = 0; //turquoise
    let num2 = 0; //emerald
    let num3 = 0; //ruby
    let nub4 = 0; //topaz
    
    let numToMatch = 0;
    
    let userTotal = 0;
    
    let userGuessCard = $('#player-guess');
    let numToMatchCard = $('#number-to-match');
    let winsCard = $('#wins');
    let lossesCard = $('#losses');
    
    //FUNCTIONS =======================================================
    
    function setStage() {
        userGuessCard.html("?");
        numToMatchCard.html(numToMatch);
        winsCard.html(wins);
        lossesCard.html(losses);
    } // TO DO: Steps to set and re-set stage
    
    function updateBoardState() {
        userGuessCard.html(userTotal);
    } // TO DO: Add work to update board state
    
    function resetBoard() {
        numToMatchCard.html(numToMatch);
    }
        
    function generateRandomNums() {
        
        numToMatch = Math.floor(Math.random() * 102 + 19);
        console.log("Random number to match: " + numToMatch);
        
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        
        console.log("Random number 1: " + num1);
        console.log("Random number 2: " + num2);
        console.log("Random number 3: " + num3);
        console.log("Random number 4: " + num4);
        
    } // TO DO: DONE
    
    function winner() {
        console.log("you won");
        generateRandomNums();
    } // TO DO: Add functionality to display message when player wins
    
    function loser() {
        console.log("you lost");
        generateRandomNum();
    } // TO DO: Add functionality to display message when player loses
    
    function checkGameState(){
        
        if (userTotal === numToMatch) {
            wins++
            winsCard.html(wins);
            generateRandomNums();
            winner();
            resetBoard();
        } else if (userTotal < numToMatch) {
            updateBoardState()
        } else {
            losses++
            lossesCard.html(losses);
            generateRandomNums();
            loser();
            resetBoard();
        }
    }
    
    //FUNCTION CALLS TO INITIALIZE BOARD =============================
    
    generateRandomNums();
    setStage();
    
    //MAIN ============================================================
    
    $('#turquoise').on('click', function(){
        
        userTotal += num1; //update user total
        console.log(userTotal);
        console.log("this is turquoise!");
        checkGameState(); //call to see check game state
        
    })
    
    $('#emerald').on('click', function(){
        
        userTotal += num2;
        console.log(userTotal);
        console.log("this is emeral!");
        checkGameState();
        
    })
    
    $('#ruby').on('click', function(){
        
        userTotal += num3;
        console.log(userTotal);
        console.log("this is ruby!");
        checkGameState();
        
    })
    
    $('#topaz').on('click', function(){
        
        userTotal += num4;
        console.log(userTotal);
        console.log("this is topaz!");
        checkGameState();
        
    })

});