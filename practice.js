list = [4, 7, 9, 10, 11];

//write a loop to calculate the sum of the list

sum = 0

for(i=0; i<list.length; i++){
	sum = sum + list[i]
}
	console.log(sum)

list = [4, 7, 9, 10, 11];

sumeven = 0

for(i=0; i<list.length; i++){
	if(list[i]%2 == 0){
		sumeven = sumeven + list[i]
	}
}

console.log(sumeven)

list = [4, 7, 9, 10, 11];

sumgreater = 0

for(i=0; i<list.length; i++){
	if(list[i]>5){
		sumgreater = sumgreater + list[i]
	}
}

console.log(sumgreater)

list = ["cat", "dog", "fish", "monkey", "cattle"];

value = "cat"

//a flag is a variable that can remmber a state and make a decision later.
flag = false; //boolean variable

for (i=0; i<list.length; i++) {

	if(list[i]===value) {
		flag = true;
		break; //The break statement will exit the most immediate loop
	}

}

if (flag === true){
	console.log("YES")
}
else {
	console.log("NO")
}
