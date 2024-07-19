function convertToCelsius(){
    var celc=document.getElementById('celsius');
    var celsius =celc.value;
    var farnhiet=(celsius * 9/5) + 32 ;
    
    var farn=document.getElementById('fahrenheit');
    farn.value=farnhiet;
}
function convertToFahrenheit(){
    var farn=document.getElementById('fahrenheit').value;
    var celsius = (farn - 32) * 5/9;
    var celc=document.getElementById('celsius').value=celsius;
}
var number = Math.random() * 100;
function checkGuess(){
   
    var guessInput=document.getElementById('guessInput');
    var guess=guessInput.value;
    console.log(guess);
    var feedback=document.getElementById('feedback');
    if(guess===number){
       feedback.textContent="Congratulations! ";
    }
    else if(guess < number){
        feedback.textContent="Oops! Too samler ";
    }
    else{
        feedback.textContent="Oops! Too greater ";
    }
    guessInput.value="";
   
}