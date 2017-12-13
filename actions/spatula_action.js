//'where' refers to the beaker upon which it acts
function add_spatula(spatula_idx){
	console.log(1)
	where=$("#"+spatula_idx)[0].getAttribute("data-where")
	where=$("#"+where)

	//Add "FeCl3" if not already present
	$('#add'+spatula_idx).mouseup(function(){
		if(where[0].getAttribute("data-solution")=="Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
		{
			alert("FeCl\u2083 already present")
			return
		}
		where[0].setAttribute("data-solution", "Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
		alert("FeCl\u2083 added")
	})
}

function close_spatula(spatula_idx){
	$('#close_spatula'+spatula_idx).mouseup(function(){
		$('#spatula_action'+spatula_idx)[0].style.display="none";
	})
}

function spatula_action(spatula_idx){
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+spatula_idx)[0].style.border="dotted";
	$("#"+spatula_idx).css('border-width', '1px');

	add_spatula(spatula_idx);
	//Closes menu
	close_spatula(spatula_idx);

	//Edits the help bar
	$("#properties")[0].innerHTML="<ul><li>This contains: "+$('#'+spatula_idx)[0].getAttribute('data-contains')+"</li></ul>"
	$("#methods")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the spatula here and there</li><li>Drag it into a container to see its actions</li><li>'Add' adds some "+$('#'+spatula_idx)[0].getAttribute('data-contains')+" into the solution in the container</li></ul>"
}
