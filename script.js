var btn = document.getElementById("addBtn");
var input = document.getElementById("listInput");
var list = document.getElementById("list");
var idCount = 0;

function createListItem()
{
	var li = document.createElement("div");
	var del = document.createElement("img");
	var span = document.createElement("span");
	del.setAttribute("src", "./images/x.png");
	del.addEventListener("click", delElement);
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(del);
	li.appendChild(span);
	li.classList.add("item");
	list.appendChild(li);
	input.value = "";
}

function addBtnClick()
{
	if(input.value.length > 0) createListItem();
}

function enterKeyPress(event)
{
	if(input.value.length > 0 && event.keyCode === 13) createListItem();
}

function delElement(event)
{
	event.target.parentElement.remove();

}

btn.addEventListener("click", addBtnClick);
input.addEventListener("keypress", enterKeyPress);