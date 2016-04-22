/// JavaScript Document
window.onload = function(){
	init();

}
var list = [];
var typelist = [];
var timmer = null;
var root = document.getElementById("A");
function init(){
	var DLRBtn= document.querySelector("#DLR");
	var LDRBtn= document.querySelector("#LDR");
	var LRDBtn= document.querySelector("#LRD");
	DLRBtn.onclick = function(){
		reset();
		DLR(root);
		anination();
	}
	LDRBtn.onclick = function(){
		reset();
		LDR(root);
		anination();
	}
	LRDBtn.onclick = function(){
		reset();
		LRD(root);
		anination();
	}
}

function DLR(node){
	if(!(node==null)){
		list.push(node);
	    console.log(list)
	    DLR(node.firstElementChild);
	    DLR(node.lastElementChild);
	}
}
function LDR(node){
	if(!(node==null)){
	    DLR(node.firstElementChild);
	    list.push(node);
	    DLR(node.lastElementChild);
	}
}
function LRD(node){
	if(!(node==null)){
	    DLR(node.firstElementChild);
	    DLR(node.lastElementChild);
	    list.push(node);
	}
}

function anination(){
	var i = 0;
	list[i].style.backgroundColor = "blue";
	timmer = setInterval(function(){
		if(i<list.length){
			i++;
			list[i-1].style.backgroundColor = "white";
			list[i].style.backgroundColor = "blue";
		}else{
			clearTimeout(timmer);
			list[list.length-1].style.backgroundColor = '#fff';
		}
	},500);

}

function reset(){
	list = [];
	clearTimeout(timmer);
	for(var i = 0; i<list.length;i++){
		list[i].style.backgroundColor = "white";
	}
}
