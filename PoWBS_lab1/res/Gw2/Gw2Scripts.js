function test() {
	alert("test test test test test");
	console.log("console test");
}

function uniteUpper(array){
	var output = "";
	for(var n = 0; n<array.length; n++){
		output.concat(array[n]);
	}
	return output.toUpperCase();
}

function swapElements(className, newHTML){
	var elemements = document.getElementsByClassName(className);
	for(var n = 0; n<elemements.length; n++){
		elemements.item(n).innerHTML = newHTML;
	}
}

function multiplication(in1, in2){
	return in1*in2;
}