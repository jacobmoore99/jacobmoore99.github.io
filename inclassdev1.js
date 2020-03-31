//parallel list structures

/*
countries[0] relates to year [0] which relates to mmratio[0]
*/

var countries = ["Canada","Ethiopia","Kenya","Somolia"]
var year = [2015, 2015, 2015, 2015]
var mmratio = [7,353,510,732]


document.getElementById("goal3button").onclick = clicked;

function clicked() {
	console.log("clicked")

	found = false; //assumes that the element is not in the list

	//Do i have to look at all elements before making a decision?
	
	value = document.getElementById("fname").value;
	console.log(value);

	//check if value is contained in countries

	for (i = 0; i < countries.length; i = i + 1) {
		
		if (countries[i] === value) {
			found = true;
			loc = i;
		}
	}
	if (found === true) {
		ptag = document.getElementById("results");
		ptag.innerHTML = value+":"+year[loc]+":"+mmratio[loc];

		console.log("found it");
	}
	else {
		ptag = document.getElementById("results");
		ptag.innerHTML = "NO DATA";
		console.log("NOT THERE");
	}


}