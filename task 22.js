// JavaScript Document
window.onload = function(){
	init();

}
var list = [];
var root = document.getElementById("A");
function init(){
	var btn = document.querySelector("button");
	btn.onclick = function(){
		Traversal(root);
	}
}

function Traversal(node){
	if(!(node==null)){
		list.push(node);
	    console.log(list)
	    Traversal(node.firstElementChild);
	    Traversal(node.lastElementChild);
	}
}