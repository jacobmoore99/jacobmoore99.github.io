function pic1()
         {
             document.getElementById("img").src = "images/canada-data7.png";
         }
         function pic2()
         {
             document.getElementById("img").src ="images/usa-data7.png";
         } 

var countries = ["Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"]
var consumption = [9589.0, 5112.4, 5149.4, 3434.3, 4753.7, 3964.5, 9207.8]

document.getElementById("clickMe").onclick = clicked;

function clicked() {
  var value = document.getElementById("fname").value
  
  for (i = 0; i < countries.length; i = i + 1) {
    
    if(value === countries[i]) {
      console.log(value+" has an energy consumption of "+consumption[i]+"watts per capita.");
    document.getElementById("results").innerHTML = value+" has an energy consumption of "+consumption[i]
+" watts per capita! ";
    }

    
  }
}
