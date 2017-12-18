function flask_action(flask_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+flask_idx)[0].style.border="dotted";
	$("#"+flask_idx).css('border-width', '1px');

	//Edits the Help sidebar
	clearInterval(changeProp)
	changeProp=setInterval(changePropFunc, 100);
	function changePropFunc()
	{
		var clicked=$("#"+flask_idx)[0]
		var components=clicked.getAttribute("data-components")
		components=components.split(",")
		for(i in components)
		{
			components[i]=components[i].split(":")
		}
		var ans=""
		ans+=components[0][0]
		for(i=1; i<components.length; i++)
		{
			ans+=" and "+components[i][0]
		}
		$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Maximum Volume: "+clicked.getAttribute("data-maxvolume")+"</li><li>Solution Name: "+ans+"</li><li>Temperature: "+clicked.getAttribute("data-temp")+"</li></ul>"
		$("#methods")[0].innerHTML="<ul><li>Drag the flask here and there</li><li>Drag other objects into the flask to see their actions.</li></ul>"
	}
}