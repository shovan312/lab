function testtube_action(testtube_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+testtube_idx)[0].style.border="dotted";
	$("#"+testtube_idx).css('border-width', '1px');

//Edits the Help sidebar
	var clicked=$("#"+testtube_idx)[0]
	$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Maximum Volume: "+clicked.getAttribute("data-maxvolume")+"</li><li>Solution Name: "+clicked.getAttribute("data-solution")+"</li><li>Temperature: "+clicked.getAttribute("data-temp")+"</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>Drag the testtube here and there</li><li>Drag other objects into the testtube to see their actions.</li></ul>"
}