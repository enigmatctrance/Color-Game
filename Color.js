var number = 6;
var colors = randomColors(number);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var textMessage  = document.getElementById("textMessage");
var h1 = document.querySelector("h1");
var resetbutton = document.getElementById("Reset");
var modebutton = document.querySelectorAll(".mode");
var num = colors.length-2;
var r = 0;

for(var i=0;i<modebutton.length; i++){
	modebutton[i].addEventListener("click",function(){
	modebutton[0].classList.remove("selected");
	modebutton[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent === "Easy" ? number = 3 : number = 6;
	reset(); 
});
}

function reset(){
	resetbutton.textContent = "New Colors";
	textMessage.textContent = "";
	colors = randomColors(number);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	for( var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	r=0;
	num = colors.length-2;
}


resetbutton.addEventListener("click",  function(){
	reset();
	});


for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
	
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.background;
		if (clickedcolor === pickedColor){
			resetbutton.textContent = "Play Again?";
			if(r<=colors.length-2){
			textMessage.textContent = "CORRECT!";
		}
			changecolor(pickedColor);
			h1.style.background = pickedColor;
		}
			
		else{
			if(num === r){
				changecolor(pickedColor);
				h1.style.background = pickedColor;
				r = r+1;
			}
			else{
			this.style.background = "#232323";
			textMessage.textContent = "TRY AGAIN";
			r = r+1;
		}}

	});
}
function changecolor(colo){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colo;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColors(num1){
	var arr =[];
	for(var i=0; i<num1; i++){
		arr.push(rand());
	}
	return arr;
}
function rand(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var col = "rgb(" + r + ", " + g + ", " + b + ")";
	return col;
}