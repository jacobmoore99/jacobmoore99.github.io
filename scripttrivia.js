var sc = 0;
var q = 0;
var c = 0;
var m = 1;
var h = 1;
var s = 1;
var g = 1;
var a = 1;
ci = 1;
mi = 1;
hi = 1;
si = 1;
gi = 1;
ai = 1;

function myFunctionC() {
  var w = document.getElementById("pick")
  var y = '<span><input type="text" id="ansC" style="font-size:30px"></span>\r';
  var z = '<span><button type="button" class="button" id="clickMe" onclick="submitC()" style="background-color: #FFFFFF; color: #000000; height: 42px">SUBMIT</button></span>\r';
  var x = document.getElementById("answer");
  var r = document.getElementById("results");
  if (x.innerHTML === " ") {
    x.innerHTML = "ANSWER HERE:" + y + z;
  } else {
    x.innerHTML = " ";
  }
  var COVID = ["SELECT THE COVID-19 CATEGORY TO BEGIN LEARNING!", "What country has the most cases?", "What city did the virus originate?", "What type of virus is COVID-19?"];
  w.innerHTML = COVID[c];
  r.innerHTML = ""
  c++;
};

function myFunctionM() {
  var w = document.getElementById("pick")
  var y = '<span><input type="text" id="ansM" style="font-size:30px"></span>\r';
  var z = '<span><button type="button" class="button" id="clickMe" onclick="submitM()" style="background-color: #FFFFFF; color: #000000; height: 42px">SUBMIT</button></span>\r';
  var x = document.getElementById("answer");
  var r = document.getElementById("results");
  if (x.innerHTML === " ") {
    x.innerHTML = "ANSWER HERE:" + y + z;
  } else {
    x.innerHTML = " ";
  }
  var math = ["PICK YOUR CATEGORY!", "How many digits of pi are there?", "Continue this pattern: 144, 121, 100, 81, 64", "How many degrees are there in a triangle?"];
  w.innerHTML = math[m];
  r.innerHTML = ""
  m++;
};

function myFunctionH() {
  var w = document.getElementById("pick")
  var y = '<span><input type="text" id="ansH" style="font-size:30px"></span>\r';
  var z = '<span><button type="button" class="button" id="clickMe" onclick="submitH()" style="background-color: #FFFFFF; color: #000000; height: 42px">SUBMIT</button></span>\r';
  var x = document.getElementById("answer");
  var r = document.getElementById("results");
  if (x.innerHTML === " ") {
    x.innerHTML = "ANSWER HERE:" + y + z;
  } else {
    x.innerHTML = " ";
  }
  var history = ["PICK YOUR CATEGORY!", "In what state was Barack Obama born in?", "Who was the first Prime Minister of Canada?", "What year did World War II end?"];
  w.innerHTML = history[h];
  r.innerHTML = ""
  h++;
};

function myFunctionS() {
  var w = document.getElementById("pick")
  var y = '<span><input type="text" id="ansS" style="font-size:30px"></span>\r';
  var z = '<span><button type="button" class="button" id="clickMe" onclick="submitS()" style="background-color: #FFFFFF; color: #000000; height: 42px">SUBMIT</button></span>\r';
  var x = document.getElementById("answer");
  var r = document.getElementById("results");
  if (x.innerHTML === " ") {
    x.innerHTML = "ANSWER HERE:" + y + z;
  } else {
    x.innerHTML = " ";
  }
  var science = ["PICK YOUR CATEGORY!", "What shark is thought to have been the largest in Earth's history?", "What is the largest internal organ of the human body?", "What is the 56th element on the Periodic Table?"];
  w.innerHTML = science[s];
  r.innerHTML = ""
  s++;
};

function myFunctionG() {
  var w = document.getElementById("pick")
  var y = '<span><input type="text" id="ansG" style="font-size:30px"></span>\r';
  var z = '<span><button type="button" class="button" id="clickMe" onclick="submitG()" style="background-color: #FFFFFF; color: #000000; height: 42px">SUBMIT</button></span>\r';
  var x = document.getElementById("answer");
  var r = document.getElementById("results");
  if (x.innerHTML === " ") {
    x.innerHTML = "ANSWER HERE:" + y + z;
  } else {
    x.innerHTML = " ";
  }
  var geography = ["PICK YOUR CATEGORY!", "How many time zones are in Canada?", "What is the largest lake in Africa?", "What is the longest river in the world?"];
  w.innerHTML = geography[g];
  r.innerHTML = ""
  g++;
};

function myFunctionA() {
  var w = document.getElementById("pick")
  var y = '<span><input type="text" id="ansA" style="font-size:30px"></span>\r';
  var z = '<span><button type="button" class="button" id="clickMe" onclick="submitA()" style="background-color: #FFFFFF; color: #000000; height: 42px">SUBMIT</button></span>\r';
  var x = document.getElementById("answer");
  var r = document.getElementById("results");
  if (x.innerHTML === " ") {
    x.innerHTML = "ANSWER HERE:" + y + z;
  } else {
    x.innerHTML = " ";
  }
  var arts = ["PICK YOUR CATEGORY!", "What country was Leonardo da Vinci born in?", "Which major key has 2 sharps?", "What is the first song called in the musical 'Hamilton'?"];
  w.innerHTML = arts[a];
  r.innerHTML = ""
  a++;
};

function submitC() {
	var y = document.getElementById("ansC");
	var COVID = ["PICK YOUR CATEGORY!", "What coutnry has the most cases?", "What city did the virus originate?", "What type of virus is COVID-19?"];
	var cans = ["", "United States", "Wuhan", "Corona"];
	var w = document.getElementById("pick")
	var x = document.getElementById("answer");
	q++;
	qa.innerHTML = "Questions Answered: " + q;
	x.innerHTML = " ";
	w.innerHTML = "PICK YOUR CATEGORY!";
	var value = y.value
    if(value === cans[ci]) {
    sc++;
    document.getElementById("results").innerHTML = value+" is correct!";
    document.getElementById("sc").innerHTML = "Score: " + sc;
    }
    else {
    document.getElementById("results").innerHTML = value+" is incorrect!"
    }
    ci++;

 
  };

function submitM() {
	var y = document.getElementById("ansM");
	var math = ["PICK YOUR CATEGORY!", "How many digits of pi are there?", "Continue this pattern: 144, 121, 100, 81, 64", "How many degrees are there in a triangle?"];
	var mans = ["", "Infinity", "49", "180"];
	var w = document.getElementById("pick")
	var x = document.getElementById("answer");
	q++;
	qa.innerHTML = "Questions Answered: " + q;
	x.innerHTML = " ";
	w.innerHTML = "PICK YOUR CATEGORY!";
	var value = y.value
 	if(value === mans[mi]) {
    sc++;
    document.getElementById("results").innerHTML = value+" is correct!";
    document.getElementById("sc").innerHTML = "Score: " + sc;
    }
    else {
    document.getElementById("results").innerHTML = value+" is incorrect!"
    }
    mi++;
  };

function submitH() {
	var y = document.getElementById("ansH");
	var history = ["PICK YOUR CATEGORY!", "In what state was Barack Obama born in?", "Who was the first Prime Minister of Canada?", "What year did World War II end?"];
	var hans = ["", "Hawaii", "John A. MacDonald", "1945"];
	var w = document.getElementById("pick")
	var x = document.getElementById("answer");
	q++;
	qa.innerHTML = "Questions Answered: " + q;
	x.innerHTML = " ";
	w.innerHTML = "PICK YOUR CATEGORY!";
	var value = y.value
 	if(value === hans[hi]) {
    sc++;
    document.getElementById("results").innerHTML = value+" is correct!";
    document.getElementById("sc").innerHTML = "Score: " + sc;
    }
    else {
    document.getElementById("results").innerHTML = value+" is incorrect!"
    }
    hi++;
  };

function submitS() {
	var y = document.getElementById("ansS");
	var science = ["PICK YOUR CATEGORY!", "What shark is thought to have been the largest in Earth's history?", "What is the largest internal organ of the human body?", "What is the 56th element on the Periodic Table?"];
	var sans = ["", "Megalodon", "Liver", "Barium"];
	var w = document.getElementById("pick")
	var x = document.getElementById("answer");
	q++;
	qa.innerHTML = "Questions Answered: " + q;
	x.innerHTML = " ";
	w.innerHTML = "PICK YOUR CATEGORY!";
	var value = y.value
 	if(value === sans[si]) {
    sc++;
    document.getElementById("results").innerHTML = value+" is correct!";
    document.getElementById("sc").innerHTML = "Score: " + sc;
    }
    else {
    document.getElementById("results").innerHTML = value+" is incorrect!"
    }
    si++;
  };

function submitG() {
	var y = document.getElementById("ansG");
	var geography = ["PICK YOUR CATEGORY!", "How many time zones are in Canada?", "What is the largest lake in Africa?", "What is the longest river in the world?"];
	var gans = ["", "6", "Lake Victoria", "Amazon"];
	var w = document.getElementById("pick")
	var x = document.getElementById("answer");
	q++;
	qa.innerHTML = "Questions Answered: " + q;
	x.innerHTML = " ";
	w.innerHTML = "PICK YOUR CATEGORY!";
	var value = y.value
 	if(value === gans[gi]) {
    sc++;
    document.getElementById("results").innerHTML = value+" is correct!";
    document.getElementById("sc").innerHTML = "Score: " + sc;
    }
    else {
    document.getElementById("results").innerHTML = value+" is incorrect!"
    }
    gi++;
  };

function submitA() {
	var y = document.getElementById("ansA");
	var arts = ["PICK YOUR CATEGORY!", "What country was Leonardo da Vinci born in?", "Which major key has 2 sharps?", "What is the first song called in the musical 'Hamilton'?"];
	var aans = ["", "Italy", "D", "Alexander Hamilton"];
	var w = document.getElementById("pick")
	var x = document.getElementById("answer");
	q++;
	qa.innerHTML = "Questions Answered: " + q;
	x.innerHTML = " ";
	w.innerHTML = "PICK YOUR CATEGORY!";
	var value = y.value
 	if(value === aans[ai]) {
    sc++;
    document.getElementById("results").innerHTML = value+" is correct!";
    document.getElementById("sc").innerHTML = "Score: " + sc;
    }
    else {
    document.getElementById("results").innerHTML = value+" is incorrect!"
    }
    ai++;
  };