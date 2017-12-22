function testtube_action(testtube_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+testtube_idx)[0].style.border="dotted";
	$("#"+testtube_idx).css('border-width', '1px');

	//Edits the Help sidebar
	clearInterval(changeProp)
	changeProp=setInterval(changePropFunc, 100);
	function changePropFunc()
	{
		var clicked=$("#"+testtube_idx)[0]
		var components=clicked.getAttribute("data-components")
		components=components.split(",")
		for(i in components)
		{
			components[i]=components[i].split(":")
		}
		var ans=""
		ans+=components[0][0]+"("+components[0][1]+" mL)"
		for(i=1; i<components.length; i++)
		{
			ans+=" and "+components[i][0]+"("+components[0][1]+" mL)"
		}
		$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Maximum Volume: "+clicked.getAttribute("data-maxvolume")+"</li><li>Solution Name: "+ans+"</li><li>Temperature: "+clicked.getAttribute("data-temp")+"</li></ul>"
		$("#methods")[0].innerHTML="<ul><li>Drag the testtube here and there</li><li>Drag other objects into the testtube to see their actions.</li></ul>"
	}
}