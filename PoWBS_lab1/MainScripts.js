function uniteUpper(array){
	var output = "";
	var arrayIn = document.getElementById(array).value.split(/[ ]+/);
	console.log(arrayIn.length);
	for(var n = 0; n<arrayIn.length; n++){
		output+=arrayIn[n];
		console.log(arrayIn[n]);
	}
	console.log(output)
	document.getElementById("Output").innerHTML = output.toUpperCase();
}

function swapElements(className, newHTML){
	var elemements = document.getElementsByClassName(className);
	for(var n = 0; n<elemements.length; n++){
		elemements.item(n).innerHTML = newHTML;
	}
}

function multiplication(in1, in2, res){
	var val1 = document.getElementById(in1).value;
	var val2 = document.getElementById(in2).value; 
	console.log(val1);
	console.log(val2);
	if(isNaN(val1)||isNaN(val2)){
		document.getElementById(res).innerHTML = "Input Error";
	}
	else {
		document.getElementById(res).innerHTML = val1*val2;
	}
}

function changeHeader(tableID, headers){
	var elemements = document.getElementById(tableID).rows[0].cells;
	var nHeaders = document.getElementById(headers).value.split(/[ ]+/);
	for(var n = 0; n<elemements.length; n++){
		elemements[n].innerHTML = nHeaders[n];
	}
}

function namePrompt(targetID){
	document.getElementById(targetID).innerHTML = "Hello "+prompt("please enter your name:", "visitor")+"!";
}