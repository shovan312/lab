function thermometer_action(thermometer_idx)
{
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+thermometer_idx)[0].style.border="dotted";
	$("#"+thermometer_idx).css('border-width', '1px');

	var which=$('#'+thermometer_idx)
	var where=which[0].getAttribute('data-where')
	
	//Edits the Help sidebar
	$("#properties")[0].innerHTML="This has no properties"
	$("#methods")[0].innerHTML="Drag this into an object to see the object's temperature"
	
	if(where===null || where===undefined)
	{
		return
	}
	else
	{
		console.log($("#"+where)[0].getAttribute("data-temp"))
	}

}