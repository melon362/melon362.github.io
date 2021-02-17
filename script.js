var inputEl = document.getElementById("input");
var textEl = document.getElementById("text");
inputEl.addEventListener("change",function(){
	textEl.innerText = inputEl.value;
});
