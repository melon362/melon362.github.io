var inputEl = document.getElementById("input");
var textEl = document.getElementById("text");
inputEl.addEventListener("onchange",function(){
	textEl.innerText = inputEl.value;
});
