var userInput=document.querySelectorAll(".user-input")
var button=document.querySelector("#btn")
var output=document.querySelector("#output")
var count=0;
var randomNumber=[]
for (var i=0;i<3;i++){
    randomNumber.push(Math.floor(Math.random()*9))
}
//output.innerHTML=`Computer number ${randomNumber}`

button.addEventListener("click", checkHandler)

function checkHandler(){
    count=0;
    var userGuess=[userInput[0].value, userInput[1].value, userInput[2].value]
   for (var i=0;i<randomNumber.length;i++){
    output.innerText+=checkNum(userGuess[i],randomNumber[i])   
   } 
   if (count==3){
    output.style.backgroundColor="green"
    output.innerHTML+="<br> Yay this is the correct number <br>"
   }
    else {
        output.innerHTML+="<br>"
    }
   }   


function checkNum(a,b){
    if (a>b){return "L"}
    if (a<b){return "H"}
    if (a==b){
        count++
        return a;
    }
}