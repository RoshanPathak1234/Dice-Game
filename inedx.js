let randomNumber1=(Math.floor(Math.random() * 6)) +1

let randomImage1 = "dice" + randomNumber1 + ".png"

const img1 = document.querySelectorAll("img")[0]

img1.setAttribute("src" , randomImage1)


let randomNumber2 = Math.floor(Math.random()*6)+1

let randomImage2 = "dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src" , randomImage2)

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = " 🚩Palyer 1 Wins!" 
else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML =  " Palyer 2 Wins! 🚩" 
else 
    document.querySelector("h1").innerHTML =  "Draw!" 