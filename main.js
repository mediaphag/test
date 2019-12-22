var firstElement = 1, secondElement = 2;
nextVar = "Next gen";

function A(first, second) {
	alert(first);
	console.log(123);
	var result = first + second - 1;
	return result;
}

A(firstElement, secondElement);

firstElement = false;
A(nextVar, secondElement);

var result = A(firstElement,secondElement);
console.log(result);
