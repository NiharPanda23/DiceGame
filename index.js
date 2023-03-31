
var randomNumber1 = Math.round(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "Images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0]



image1.setAttribute("src", randomImageSource);

// for second Image
var randomNumber2 = Math.round(Math.random() * 6) ;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "Images/"+ randomDiceImage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource1);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}