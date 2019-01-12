$("document").ready(function(){
    
    $('#setup').html("function loaded");
    console.log("function is ready");
    
    
    //VARIABLES ======================================================
    
    let wins = 0;
    let loses = 0;
    
    let num1 = 0; //emerald
    let num2 = 0; //ruby
    let num3 = 0; //diamond
    let nub4 = 0; //sapphire
    
    let numToMatch = 0;
    
    let numToIncrement = 0;
    
    //FUNCTIONS =======================================================
    
    function setStage() {
        
        numToMatch = Math.floor(Math.random() * 102 + 19);
        console.log(numToMatch);
        
        num1 = Math.floor(Math.random() *13);
        num2 = Math.floor(Math.random() *13);
        num3 = Math.floor(Math.random() *13);
        num4 = Math.floor(Math.random() *13);
        
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);
    }
        
    function randomInt() {
        
    }
    
    
    
    //FUNCTION CALLS =================================================
    
    setStage();
    
    //MAIN ============================================================
    
    $('document').on('click', function(){
        
        
    })

});