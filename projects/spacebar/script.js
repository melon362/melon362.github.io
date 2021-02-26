var space = Number(localStorage.getItem('space'));
var save = document.getElementById("save")
var text = document.getElementById("text")
var reset = document.getElementById("reset")
if (space == null){
	localStorage.setItem('space',0)
	var space = 0
}else{
	text.innerText = "You have hit spacebar " + space + " times";
}
window.addEventListener("keyup", function(e){
	if (e.keyCode === 32){
		space+=1
		text.innerText = "You have hit spacebar " + space + " times";
	}
});
save.addEventListener("click", function(){
	localStorage.setItem('space',space)
});
reset.addEventListener("click", function(){
	space = 0
        localStorage.setItem('space',0)
	text.innerText = "You have hit spacebar 0 times";
});
