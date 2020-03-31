function pic1()
         {
             document.getElementById("img").src = "images/canada-data13.png";
         }
         function pic2()
         {
             document.getElementById("img").src ="images/usa-data13.png";
         } 

var countries = ["Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"]
var emission = [20.94, 6.9, 11.0, 7.05, 10.55, 8.45, 19.9]

document.getElementById("clickMe").onclick = clicked;

function clicked() {
  var value = document.getElementById("fname").value
  
  for (i = 0; i < countries.length; i = i + 1) {
    
    if(value === countries[i]) {
      console.log(value+" has a greenhouse gas emission value of "+emission[i]+"tons per capita.");
    document.getElementById("results").innerHTML = value+" has a greenhouse gas emission value of "+emission[i]
+" tons per capita! ";
    }

    
  }
}
