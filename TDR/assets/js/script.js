window.onload = function(){ 

  var input = document.getElementById("search-text");
  
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-button").click();
    }
  });
  document.getElementById("search-button").onclick = function() {
      var searchingWord = document.getElementById("search-text").value;
      if (searchingWord == "Fortnite" || searchingWord == "fortnite") {
        window.open("#", "_self")
      }
      else {
        alert("Oops , didn't find the word you're looking for :(");
    
      }
    }
  };