var mass=0 //grams
var SPEC_HEAT=4.2 //J/sec
var supply=0 //kJ/sec

function magneticburner_add(magneticburner_idx){
	$("#add_bead"+magneticburner_idx).click(function(){
		add_bead(magneticburner_idx)
	})

	$('#magneticburn'+magneticburner_idx).mouseup(function(){
		clearInterval(id_burn);
	}).mousedown(function(){
		id_burn=setInterval(magnetic_burn, 500, magneticburner_idx)
	})
}

function close_magneticburner(magneticburner_idx){
	$('#close_magneticburner'+magneticburner_idx).mouseup(function(){
		$('#magneticburner_action'+magneticburner_idx)[0].style.display='none';
	})
}

function add_bead(magneticburner_idx)
{
	console.log(magneticburner_idx+"WTF")
	alert("Bead added")
	var which=$("#"+magneticburner_idx)[0]
	which.setAttribute("data-is_bead", "true")
}

function magnetic_burn(magneticburner_idx){
	var which=$("#"+magneticburner_idx)[0]
	var where=which.getAttribute('data-where')
	var isBead=which.getAttribute("data-is_bead")
	if(isBead=="false")
	{
		alert("Please add a bead in stirrer first")
		clearInterval(id_burn)
	}
	else if(isBead=="true")
	{
		where=$("#"+magneticburner_idx)[0].getAttribute("data-where")
		where=$("#"+where)
		var volume=parseFloat(where[0].getAttribute("data-volume"))
		var density=parseFloat(where[0].getAttribute("data-density"))
		var mass=(volume*density)
		var temp=parseFloat(where[0].getAttribute("data-temp"))
		var supply=500
		temp+=supply/(mass*SPEC_HEAT)
		temp=temp.toFixed(3)
		console.log(temp)
		where[0].setAttribute("data-temp", temp)
		if(temp>=150)
		{
			temp=150
			alert("STOOOPPPPP!!!")
			clearInterval(id_burn)
		}
		else if(temp>=130)
		{
			alert("Try adding the FeCl3 solution into this")
			clearInterval(id_burn)
			clearInterval(id2)
		}
	}
	else
	{
		while(1)
		{
			alert("WHHHHAAATTT")
		}
	}
}

// function magnetic_cool(magneticburner_idx){
// 	var where=$("#"+magneticburner_idx)[0].getAttribute("data-where")
// 	temp=parseFloat($("#"+where)[0].getAttribute("data-temp"))
// 	id2=setInterval(function(){
// 		temp=temp-((temp-SURR_TEMP)*(0.01))
// 		temp=temp.toFixed(3)
// 		console.log(where,temp,"asdasda")
// 		$("#"+where)[0].setAttribute("data-temp", temp)
// 		if(temp>=150)
// 		{
// 			temp=150
// 			alert("STOOOPPPPP!!!")
// 			clearInterval(id_burn)
// 		}
// 	}, 500)
// }

function magneticburner_action(magneticburner_idx){
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+magneticburner_idx)[0].style.border="dotted";
	$("#"+magneticburner_idx).css('border-width', '1px');

	//Takes care of some weird bug
	if(bool1==0){
		magneticburner_add(magneticburner_idx);
		bool1=1
	}
	close_magneticburner(magneticburner_idx);
	//All beakers should cool, so try to put this function somewhere else
	// magnetic_cool(magneticburner_idx);

		//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>This has no properties</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>'Add Bead' adds the stirring bead into the solution</li><li>'Burn' will burn only if the stirring bead is present"
}