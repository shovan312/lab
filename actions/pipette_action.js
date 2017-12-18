//'which' refers to which pipette we are using and 'where' refers to where it is acting, i.e which container it is acting upon
var id_pour
var id_withdraw
var pipetteComp=""
var beakerComp=""

function setPour(pipette_idx)
{
	id_pour=setInterval(pour, 50, pipette_idx)
}

function clearPour(pipette_idx)
{
	clearInterval(id_pour)
}

function setWithdraw(pipette_idx)
{
	id_withdraw=setInterval(withdraw, 50, pipette_idx)
}

function clearWithdraw(pipette_idx)
{
	clearInterval(id_withdraw)
}

//pour from pipette
function getSolution(pipette_idx){
	var which=$('#'+pipette_idx)
	var where=which[0].getAttribute('data-where')
	beakerComp=$("#"+where)[0].getAttribute('data-components')
	pipetteComp=which[0].getAttribute('data-components')
	
	beakerComp=beakerComp.split(",")
	for(i in beakerComp)
	{
		beakerComp[i]=beakerComp[i].split(":")
	}
	ans=[]
	for(i in beakerComp)
	{
		ans[beakerComp[i][0]]=beakerComp[i][1]
	}
	beakerComp=ans

	ans=[]
	pipetteComp=pipetteComp.split(",")
	for(i in pipetteComp)
	{
		pipetteComp[i]=pipetteComp[i].split(":")
	}
	for(i in pipetteComp)
	{
		ans[pipetteComp[i][0]]=pipetteComp[i][1]
	}
	pipetteComp=ans
}

function pour(pipette_idx){
	var which=$('#'+pipette_idx)
	var where=which[0].getAttribute('data-where')
	var pipetteVolume=parseFloat(which[0].getAttribute('data-volume')) //in mL
	var volume=parseFloat($('#'+where)[0].getAttribute('data-volume')) //in mL
	var maxvolume=parseFloat($('#'+where)[0].getAttribute('data-maxvolume')) //in mL
	var height=130*(volume/maxvolume)
	height=parseFloat(height)
	if(pipetteVolume>0)
	{
		if(height<130)
		{
			//Increases height and sets data-attributes
			height+=(130/maxvolume)
			pipetteVolume-=1;
			volume+=1;
			$("#"+where)[0].setAttribute("data-volume", volume)
			which[0].setAttribute("data-volume", pipetteVolume)
			$('#solution'+where).height(height)

			//Changes the "solution name" of beaker
			getSolution(pipette_idx)
			for(i in pipetteComp)
			{
				beakerComp[i]+=parseFloat(parseFloat(pipetteComp[i])/pipetteVolume)
				pipetteComp[i]-=parseFloat(parseFloat(pipetteComp[i])/pipetteVolume)
			}
			console.log(pipetteComp, beakerComp)
		}
		else
		{
			alert("Container Full!")
			clearInterval(id_pour)
			$('#solution'+where).height(130)
		}
	}
	else
	{
		alert("Pipette empty!")
		clearInterval(id_pour)
		which[0].setAttribute("data-solution", "None")
	}

	temp=parseInt($("#"+where)[0].getAttribute("data-temp"))
	if(temp>=100 && $("#"+where)[0].getAttribute("data-solution")=="Water (H<sub>2</sub>O) and Ferric Chloride (FeCl<sub>3</sub>)")
	{
		$("#"+where)[0].setAttribute("data-solution", "Fe(OH)<sub>3</sub> Sol")
		alert("Sol created!")
	}

}

function withdraw(pipette_idx){
	var which=$('#'+pipette_idx)
	var where=which[0].getAttribute('data-where')
	var pipetteVolume=parseFloat(which[0].getAttribute('data-volume')) //in mL
	var pipetteMaxVolume=parseFloat(which[0].getAttribute('data-maxvolume')) //in mL
	var volume=parseFloat($('#'+where)[0].getAttribute('data-volume')) //in mL
	var maxvolume=parseFloat($('#'+where)[0].getAttribute('data-maxvolume')) //in mL
	var height=130*(volume/maxvolume)
	height=parseFloat(height)
	if(pipetteVolume<pipetteMaxVolume)
	{
		if(height>0)
		{
			//Decreases height and sets data-attributes
			height-=(130/maxvolume)
			pipetteVolume+=1;
			volume-=1;
			$("#"+where)[0].setAttribute("data-volume", volume)
			which[0].setAttribute("data-volume", pipetteVolume)
			$('#solution'+where).height(height)

			//Changes the "solution name" of pipette
			getSolution(pipette_idx)
			for(i in beakerComp)
			{
				pipetteComp[i]+=parseFloat(parseFloat(beakerComp[i])/volume)
				beakerComp[i]-=parseFloat(parseFloat(beakerComp[i])/volume)
			}
			var string=""
			for(i in pipetteComp)
			{
				string+=i+":"+pipetteComp[i]+", "
			}
			var string=""
			for(i in beakerComp)
			{
				string+=i+":"+beakerComp[i]+", "
			}
			$("#"+where)[0].setAttribute('data-components', string)
			console.log("P", pipetteComp, string, "B", beakerComp)
		}
		else
		{
			alert("Container Empty!")
			clearInterval(id_withdraw)
			$('#solution'+where).height(0)
			$("#"+where)[0].setAttribute("data-solution", "None")
		}
	}
	else
	{
		alert("Pipette full!")
		clearInterval(id_withdraw)
	}
}

function closePipette(pipette_idx){
	$('#pipette_action'+pipette_idx)[0].style.display='none';
}

function pipette_action(pipette_idx)
{
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+pipette_idx)[0].style.border="dotted";
	$("#"+pipette_idx).css('border-width', '1px');

	//Edits the Help sidebar
	clearInterval(changeProp)
	changeProp=setInterval(changePropFunc, 100);
	function changePropFunc()
	{
		var clicked=$("#"+pipette_idx)[0]
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
		$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Maximum Volume: "+clicked.getAttribute("data-maxvolume")+"</li><li>Solution Name: "+ans+"</li></ul>"
		$("#methods")[0].innerHTML="<ul><li>Drag the pipette here and there</li><li>Drag it into a beaker to see its actions</li><li>The amount of water added/removed depends on how long you hold the 'Pour' or 'Withdraw' button</li></ul"
	}
}
