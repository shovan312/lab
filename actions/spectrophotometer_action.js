var isOpen="False"

function spectrophotometer_action(spectrophotometer_idx)
{
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+spectrophotometer_idx)[0].style.border="dotted";
	$("#"+spectrophotometer_idx).css('border-width', '1px');

	var clicked=$("#"+spectrophotometer_idx)[0]
	//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>This object has no properties</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>Click on the Spectrophotometer to open up a menu.</li><li>'Open Lid' and 'Close Lid' open and close the lid respectively so that you can put the required solution in</li><li>'Insert' opens up a menu which shows you all possible solutions on table. Just choose one</li></ul>"

	$('#spectrophotometer_action'+spectrophotometer_idx)[0].style.display='block';

}

function closeSpectrophotometer(spectrophotometer_idx){
	$('#spectrophotometer_action'+spectrophotometer_idx)[0].style.display='none';
}

function openLid(spectrophotometer_idx){
	var isOpen=$("#"+spectrophotometer_idx)[0].getAttribute("data-is-open")
	if(isOpen==="False")
	{
		alert("Lid opened")
		$("#"+spectrophotometer_idx)[0].setAttribute("data-is-open", "True")
	}
	else
	{
		alert("Lid already open")
	}
	closeSpectrophotometer(spectrophotometer_idx)
}

function closeLid(spectrophotometer_idx){
	var isOpen=$("#"+spectrophotometer_idx)[0].getAttribute("data-is-open")
	if(isOpen==="True")
	{
		alert("Lid closed")
		$("#"+spectrophotometer_idx)[0].setAttribute("data-is-open", "False")
	}
	else
	{
		alert("Lid already close")
	}
	closeSpectrophotometer(spectrophotometer_idx)
}

function insertCuvette(spectrophotometer_idx){
	if(isOpen=="True")
	{
		var containers=$(".container1")
		var numberOfContainers=containers.length
		var options=[]
		for(i=0; i<numberOfContainers; i++)
		{
			var beakerComp=containers[i].getAttribute("data-components") //"A:10,B:20"
			beakerComp=beakerComp.split(",") //["A:10", "B:20"]
			for(j in beakerComp)
			{
				beakerComp[j]=beakerComp[j].split(":") //[["A", "10"], ["B", "20"]]
			}
			var ans=[]
			for(j in beakerComp)
			{
				ans[beakerComp[j][0]]=parseFloat(beakerComp[j][1])
			}
			beakerComp=ans //["A":"10", "B": "20"]

			if(Object.keys(beakerComp)!="None")
			{
				options[i]=[]
				options[i][0]=containers[i].id
				options[i][1]=Object.keys(beakerComp)
			}
		}
		optionsBar=$("#optionsBar")
		optionsBar[0].innerHTML=""
		for(i in options)
		{
			var idNo=options[i][0]
			var containerType=$("#"+options[i][0])[0].classList[3]
			optionsBar[0].innerHTML+="<li onclick='addInSpectrophotometer("+options[i][1]+")'>"+options[i][1]+" from "+containerType+" number "+idNo+"</li>"
		}
	}
	else
	{
		alert("Please open the lid first")
	}
	closeSpectrophotometer(spectrophotometer_idx)
}

function addInSpectrophotometer(a){
	console.log(a)
}
