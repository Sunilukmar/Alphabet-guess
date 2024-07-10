alert("Test")

let randomChar = Math.floor(Math.random() * 26) + 65;
char= String.fromCharCode(randomChar);
function  checkGuess() 
{ 
    let Input=document.getElementById("userInput");
    let gameresult=document.getElementById("gameResult");
        x=Input.value;
        if(x=="")
        {
            gameresult.textContent="Please Enter a character"

        }
        else if(x==char)
        {
            gameresult.textContent="You are Right,  You Won the game";
           
        }
        else if(x!=char)
        {
            gameresult.textContent="You are wrong , try again";
           

        }
        else
        {
            gameresult.textContent="Invalid Input.. Enter a valid input";
         

        }

}
