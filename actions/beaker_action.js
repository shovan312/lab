function beaker_action(beaker_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+beaker_idx)[0].style.border="dotted";
	$("#"+beaker_idx).css('border-width', '1px');

	var clicked=$("#"+beaker_idx)[0]
	//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Maximum Volume: "+clicked.getAttribute("data-maxvolume")+"</li><li>Solution Name: "+clicked.getAttribute("data-solution")+"</li><li>Temperature: "+clicked.getAttribute("data-temp")+"</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>Drag the beaker here and there</li><li>Drag other objects into the beaker to see their actions.</li></ul>"
}