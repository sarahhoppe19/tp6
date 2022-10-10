//JavaScript for TP5

window.onload = function() {
  
  document.querySelector("#recipeBanner h1").classList.add("tp");
  
  document.querySelector("#recipeBanner h1").onclick = function() {
    this.classList.toggle("white");
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#recipeColumns #ingredients ul").innerHTML += "<li>Feel free to add extra ingredients to your liking!</li>";
} //end of window.onload