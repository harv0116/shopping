// JavaScript Document
var groceryList = [];


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

function showList(){
  var output = document.querySelector(".output");
  output.innerHTML = "";
  for(var i=0;i<groceryList.length;i++){
    var p = document.createElement("p");
    p.innerHTML = groceryList[i];
    
    output.appendChild(p);
    p.addEventListener("click", removeItem);
  }
}