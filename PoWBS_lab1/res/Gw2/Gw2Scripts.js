function updateAvailabilityTable(){
	//Alex Availability [3]
	if(!document.getElementById("al").checked){
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[3].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[3].cells[n].innerHTML = "TODO";
		}
	}
	else{
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[3].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[3].cells[n].innerHTML = "DPS";
		}
		document.getElementById("AvailabilityTable").rows[3].cells[2].innerHTML = "Slavebeast";
		document.getElementById("AvailabilityTable").rows[3].cells[5].innerHTML = "Slavebeast";
		document.getElementById("AvailabilityTable").rows[3].cells[8].innerHTML = "Slavebeast";
		document.getElementById("AvailabilityTable").rows[3].cells[11].innerHTML = "Slavebeast";
		document.getElementById("AvailabilityTable").rows[3].cells[22].innerHTML = "Slavebeast";
		document.getElementById("AvailabilityTable").rows[3].cells[23].innerHTML = "Pylon";
	}
	//Costa Availability [4]
	if(!document.getElementById("al1").checked){
		if(document.getElementById("al").checked){
			for(var n = 2; n<document.getElementById("AvailabilityTable").rows[3].cells.length; n++){
				document.getElementById("AvailabilityTable").rows[3].cells[n].innerHTML = "Banners";
				document.getElementById("AvailabilityTable").rows[4].cells[n].innerHTML = "DPS sub";
			}
		}
		else {
			for(var n = 2; n<document.getElementById("AvailabilityTable").rows[4].cells.length; n++){
				document.getElementById("AvailabilityTable").rows[4].cells[n].innerHTML = "Banner sub";
			}
		}
	}
	else {
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[4].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[4].cells[n].innerHTML = "Banners";
		}
	}
	//Clarence Availability [5]
	if(!document.getElementById("al2").checked){
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[5].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[5].cells[n].innerHTML = "TODO";
		}
	}
	else{
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[5].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[5].cells[n].innerHTML = "Jail";
		}
		document.getElementById("AvailabilityTable").rows[5].cells[5].innerHTML = "DPS";
		document.getElementById("AvailabilityTable").rows[5].cells[6].innerHTML = "DPS";
		document.getElementById("AvailabilityTable").rows[5].cells[11].innerHTML = "DPS";
		document.getElementById("AvailabilityTable").rows[5].cells[22].innerHTML = "DPS";
	}

	//Dice Availability [6]
	if(!document.getElementById("al3").checked){
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[6].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[6].cells[n].innerHTML = "Chrono sub";
		}
	}
	else {
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[6].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[6].cells[n].innerHTML = "Chrono";
		}
		//document.getElementById("AvailabilityTable").rows[6].cells[5].innerHTML = "sloth";
		document.getElementById("AvailabilityTable").rows[6].cells[6].innerHTML = "Druid";
		document.getElementById("AvailabilityTable").rows[6].cells[11].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[6].cells[22].innerHTML = "Alacgade";
	}
	//Felix Availability [7]
	if(!document.getElementById("al4").checked){
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[7].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[7].cells[n].innerHTML = "TODO";
		}
	}
	else{
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[7].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[7].cells[n].innerHTML = "DPS";
		}
		document.getElementById("AvailabilityTable").rows[7].cells[2].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[3].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[5].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[8].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[9].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[10].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[12].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[13].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[18].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[20].innerHTML = "Kiter";
		document.getElementById("AvailabilityTable").rows[7].cells[21].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[7].cells[23].innerHTML = "Pylon";		
	}
	//Korn Availability [8]
	if(!document.getElementById("al5").checked){

	}
	else {
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[8].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[8].cells[n].innerHTML = "DPS";
		}
		document.getElementById("AvailabilityTable").rows[8].cells[2].innerHTML = "Quickbrand";
		document.getElementById("AvailabilityTable").rows[8].cells[6].innerHTML = "BoonThief";
		document.getElementById("AvailabilityTable").rows[8].cells[10].innerHTML = "Quickbrand";
		document.getElementById("AvailabilityTable").rows[8].cells[11].innerHTML = "BoonThief";
		document.getElementById("AvailabilityTable").rows[8].cells[17].innerHTML = "Quickbrand";
		document.getElementById("AvailabilityTable").rows[8].cells[19].innerHTML = "Druid";
		document.getElementById("AvailabilityTable").rows[8].cells[21].innerHTML = "Quickbrand";
		document.getElementById("AvailabilityTable").rows[8].cells[22].innerHTML = "BoonThief";
		document.getElementById("AvailabilityTable").rows[8].cells[23].innerHTML = "Quickbrand";
	}

	//Paula Availability [9]
	if(!document.getElementById("al6").checked){
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[9].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[9].cells[n].innerHTML = "TODO";
		}		
	}
	else{
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[9].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[9].cells[n].innerHTML = "DPS";
		}
		document.getElementById("AvailabilityTable").rows[9].cells[4].innerHTML = "Alacgade";
		document.getElementById("AvailabilityTable").rows[9].cells[20].innerHTML = "Alacgade";		
	}

	//Smithwicks Availability [10]
	if(!document.getElementById("al7").checked){
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[10].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[10].cells[n].innerHTML = "TODO";
		}		
	}
	else{
		for(var n = 2; n<document.getElementById("AvailabilityTable").rows[10].cells.length; n++){
			document.getElementById("AvailabilityTable").rows[10].cells[n].innerHTML = "DPS";
		}
		document.getElementById("AvailabilityTable").rows[10].cells[13].innerHTML = "Handkite";
		document.getElementById("AvailabilityTable").rows[10].cells[23].innerHTML = "Pylon";		
	}

}