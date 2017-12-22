function balance_action(balance_idx)
{
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+balance_idx)[0].style.border="dotted";
	$("#"+balance_idx).css('border-width', '1px');

	var which=$('#'+balance_idx)
	var where=which[0].getAttribute('data-where')

	//Edits the Help sidebar
	$("#properties")[0].innerHTML="This has no properties"
	$("#methods")[0].innerHTML="Drag this into an object to see the object's weight"

	if(where===null || where===undefined)
	{
		return
	}
	else
	{
		var volume=parseFloat($("#"+where)[0].getAttribute("data-volume"))
		var density=parseFloat($("#"+where)[0].getAttribute("data-density"))
		console.log(volume*density)
	}

}