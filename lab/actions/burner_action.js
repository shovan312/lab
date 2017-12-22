var mass=0 //grams
var SPEC_HEAT=4.2 //J/sec
var supply=0 //kJ/sec
var SURR_TEMP=30 //Celsius
var bool1=0
// var id2=0

function setBurn(burner_idx){
	//Don't initialise with 'var'
	id_burn=setInterval(burner_burn, 500, burner_idx)
}

function clearBurn(burner_idx){
	clearInterval(id_burn)
}

function close_burner(burner_idx){
	$('#close_burner'+burner_idx).mouseup(function(){
		$('#burner_action'+burner_idx)[0].style.display='none';
	})
}

function burner_burn(burner_idx){
	var which=$("#"+burner_idx)[0]
	var where=$("#"+burner_idx)[0].getAttribute("data-where")
	where=$("#"+where)
	var volume=parseFloat(where[0].getAttribute("data-volume"))
	var density=parseFloat(where[0].getAttribute("data-density"))
	var mass=volume*density
	var temp=parseFloat(where[0].getAttribute("data-temp"))
	supply=500
	temp+=supply/(mass*SPEC_HEAT)
	temp=temp.toFixed(3)
	console.log(temp)
	where[0].setAttribute("data-temp", temp)
	// if(temp>=150)
	// {
	// 	temp=150
	// 	alert("STOOOPPPPP!!!")
	// 	clearInterval(id_burn)
	// }
	// else if(temp>=130)
	// {
	// 	alert("Try adding the FeCl3 solution into this")
	// 	clearInterval(id_burn)
	// 	clearInterval(id2)
	// }
}


function burner_action(burner_idx){
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+burner_idx)[0].style.border="dotted";
	$("#"+burner_idx).css('border-width', '1px');

	close_burner(burner_idx);

	//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>This has no properties</ul></li>"
	$("#methods")[0].innerHTML="<ul><li>Drag this into a container to increase the contained solution's temperature</li></ul>"
}