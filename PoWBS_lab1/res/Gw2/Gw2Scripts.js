function initialTable(){
	var table = document.getElementById("AvailabilityTable");
	for(var n = 2; n<table.rows.length; n++){
		for(var x = 2; n<table.rows[n].cells.length; x++){
			table.rows[n].cells[x].innerHTML = "TODO";
		}
	}
}

function updateAvailabilityTable(){
	var rows = document.getElementById("AvailabilityTable").rows;

	//Alex Availability [3]
	if(!document.getElementById("al").checked){
		for(var n = 2; n<rows[3].cells.length; n++){
			rows[3].cells[n].innerHTML = "TODO";
		}
	}
	else{
		for(var n = 2; n<rows[3].cells.length; n++){
			rows[3].cells[n].innerHTML = "DPS";
		}
		rows[3].cells[2].innerHTML = "Slavebeast";
		rows[3].cells[5].innerHTML = "Slavebeast";
		rows[3].cells[8].innerHTML = "Slavebeast";
		rows[3].cells[11].innerHTML = "Slavebeast";
		rows[3].cells[22].innerHTML = "Slavebeast";
		rows[3].cells[23].innerHTML = "Pylon";
	}
	//Costa Availability [4]
	if(!document.getElementById("al1").checked){
		if(document.getElementById("al").checked){
			for(var n = 2; n<rows[3].cells.length; n++){
				rows[3].cells[n].innerHTML = "Banners";
				rows[4].cells[n].innerHTML = "DPS sub";
			}
		}
		else {
			for(var n = 2; n<rows[4].cells.length; n++){
				rows[4].cells[n].innerHTML = "Banner sub";
			}
		}
	}
	else {
		for(var n = 2; n<rows[4].cells.length; n++){
			rows[4].cells[n].innerHTML = "Banners";
		}
	}
	//Clarence Availability [5]
	if(!document.getElementById("al2").checked){
		for(var n = 2; n<rows[5].cells.length; n++){
			rows[5].cells[n].innerHTML = "TODO";
		}
	}
	else{
		for(var n = 2; n<rows[5].cells.length; n++){
			rows[5].cells[n].innerHTML = "Jail";
		}
		rows[5].cells[5].innerHTML = "DPS";
		rows[5].cells[6].innerHTML = "DPS";
		rows[5].cells[11].innerHTML = "DPS";
		rows[5].cells[22].innerHTML = "DPS";
	}

	//Dice Availability [6]
	if(!document.getElementById("al3").checked){
		for(var n = 2; n<rows[6].cells.length; n++){
			rows[6].cells[n].innerHTML = "TODO";
		}
	}
	else {
		for(var n = 2; n<rows[6].cells.length; n++){
			rows[6].cells[n].innerHTML = "Chrono";
		}
		//rows[6].cells[5].innerHTML = "sloth";
		rows[6].cells[6].innerHTML = "Druid";
		rows[6].cells[11].innerHTML = "Alacgade";
		rows[6].cells[22].innerHTML = "Alacgade";
	}
	//Felix Availability [7]
	if(!document.getElementById("al4").checked){
		for(var n = 2; n<rows[7].cells.length; n++){
			rows[7].cells[n].innerHTML = "TODO";
		}
	}
	else{
		for(var n = 2; n<rows[7].cells.length; n++){
			rows[7].cells[n].innerHTML = "DPS";
		}
		rows[7].cells[2].innerHTML = "Alacgade";
		rows[7].cells[3].innerHTML = "Alacgade";
		rows[7].cells[5].innerHTML = "Alacgade";
		rows[7].cells[8].innerHTML = "Alacgade";
		//.rows[7].cells[9].innerHTML = "Alacgade";
		rows[7].cells[10].innerHTML = "Alacgade";
		rows[7].cells[12].innerHTML = "Alacgade";
		rows[7].cells[13].innerHTML = "Alacgade";
		rows[7].cells[18].innerHTML = "Alacgade";
		rows[7].cells[20].innerHTML = "Kiter";
		rows[7].cells[21].innerHTML = "Alacgade";
		rows[7].cells[23].innerHTML = "Pylon";		
	}
	//Korn Availability [8]
	if(!document.getElementById("al5").checked){
		for(var n = 2; n<rows[8].cells.length; n++){
			rows[8].cells[n].innerHTML = "TODO"
		}
	}
	else {
		for(var n = 2; n<rows[8].cells.length; n++){
			rows[8].cells[n].innerHTML = "DPS";
		}
		rows[8].cells[2].innerHTML = "Quickbrand";
		rows[8].cells[6].innerHTML = "BoonThief";
		rows[8].cells[10].innerHTML = "Quickbrand";
		rows[8].cells[11].innerHTML = "BoonThief";
		rows[8].cells[17].innerHTML = "Quickbrand";
		rows[8].cells[19].innerHTML = "Druid";
		rows[8].cells[21].innerHTML = "Quickbrand";
		rows[8].cells[22].innerHTML = "BoonThief";
		rows[8].cells[23].innerHTML = "Quickbrand";
	}

	//Paula Availability [9]
	if(!document.getElementById("al6").checked){
		for(var n = 2; n<rows[9].cells.length; n++){
			rows[9].cells[n].innerHTML = "TODO";
		}		
	}
	else{
		for(var n = 2; n<rows[9].cells.length; n++){
			rows[9].cells[n].innerHTML = "DPS";
		}
		rows[9].cells[4].innerHTML = "Alacgade";
		rows[9].cells[20].innerHTML = "Alacgade";		
	}

	//Smithwicks Availability [10]
	if(!document.getElementById("al7").checked){
		for(var n = 2; n<rows[10].cells.length; n++){
			rows[10].cells[n].innerHTML = "TODO";
		}		
	}
	else{
		for(var n = 2; n<rows[10].cells.length; n++){
			rows[10].cells[n].innerHTML = "DPS";
		}
		rows[10].cells[13].innerHTML = "Handkite";
		rows[10].cells[23].innerHTML = "Pylon";		
	}

}