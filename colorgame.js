var size = 6;
var colors = randomcolorarray(size);
var squares = document.querySelectorAll(".square");
var tobefound = colors[Math.floor(Math.random()*colors.length)];
var tobefoundtext = document.querySelector("#colordata");
tobefoundtext.textContent = tobefound;
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var reset = document.querySelector("#reset");
reset.addEventListener("click",resetfunction);
function resetfunction(){
	colors = randomcolorarray(size);
	tobefound = colors[Math.floor(Math.random()*colors.length)];
	tobefoundtext.textContent = tobefound;
	document.querySelector("h1").style.backgroundColor = "steelblue";
	reset.textContent = "new colors";
	document.querySelector("#message").textContent = "";
	for(var i = 0 ; i  < size ; i++){
		squares[i].style.backgroundColor = colors[i];
	}
}
easy.addEventListener("click",function(){
	easy.classList.add("difficulty");
	hard.classList.remove("difficulty");
	size= 3;
	for(var i = 3 ; i < squares.length; i++){
		squares[i].style.display = "none";
	}
	resetfunction(size);
});
hard.addEventListener("click",function(){
	hard.classList.add("difficulty");
	easy.classList.remove("difficulty");
	size= 6;
	for(var i = 3 ; i < squares.length; i++){
		squares[i].style.display = "block";
	}
	resetfunction(size);

});
for(var i = 0 ; i< squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var thiscolor = this.style.backgroundColor;
		if(thiscolor === tobefound){
			document.querySelector("h1").style.backgroundColor = thiscolor;
			document.querySelector("#message").textContent = "Correct!";
			changecolors(thiscolor);
			reset.textContent = "play again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			document.querySelector("#message").textContent = "Try Again";
		}
	});
}
function randomcolorarray(color){
	var arr = [];
	for(var i = 0 ; i < color; i++){
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
		var r = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		return "rgb("+r+", "+g+", "+b + ")";
}
function changecolors(color){
	for(var i = 0; i <squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}