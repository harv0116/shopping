// JavaScript Document
var groceryList = [];
var radiobutton = "img/radio1.png";

//document.addEventListener("deviceready", function(ev){
document.addEventListener("DOMContentLoaded", function(ev){
  //this runs when the page loads
  
  if(localStorage.getItem("grocery-harv0116")){
    groceryList = JSON.parse(localStorage.getItem("grocery-harv0116"));
    //convert from String to Array
  }
  
  showList();
  
  document.querySelector("#btnAdd").addEventListener("click", function(ev){
    ev.preventDefault();
    var newItem = document.querySelector("#item").value;
    groceryList.push( newItem );
    localStorage.setItem("grocery-harv0116", JSON.stringify(groceryList) );
    //convert from Array to String.
    showList();
    return false;
  });
  
  
  //document.myForm.addEventListener("submit", function(ev){});
});

function removeItem(ev){
  //this.firstChild.nodeValue
  //ev.currentTarget.firstChild - the textNode inside the paragraph
  //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
  var txt = ev.currentTarget.firstChild.nodeValue;
  for(var i=0;i<groceryList.length;i++){
  	if(groceryList[i] == txt){
      //found the match
      groceryList.splice(i, 1);
    }
  }
  localStorage.setItem("grocery-harv0116", JSON.stringify(groceryList) );
  showList();
}

function toggleItem(ev){
  // should switch to radio2.png picture for the background image.
  
   if (radiobutton === "img/radio2.png") {
  	radiobutton = "img/radio1.png";
  } else if (radiobutton === "img/radio1.png") {
  	radiobutton = "img/radio2.png";
  }
  
  showList();
}

function showList(){
  var name;
  var output = document.querySelector(".output");
  output.innerHTML = "";

  
  for(var i=0;i<groceryList.length;i++){
    var div = document.createElement("div");
    div.setAttribute("class","listview");
    output.appendChild(div);
	
	var img = document.createElement("img");
	img.setAttribute("src",radiobutton);
	div.appendChild(img);
	
	var p = document.createElement("p");
	p.innerHTML = groceryList[i];
    div.appendChild(p);	
	
	p.addEventListener("click", removeItem);
	img.addEventListener("click", toggleItem);
    
  }
  
}