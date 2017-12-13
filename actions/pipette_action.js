//'which' refers to which pipette we are using and 'where' refers to where it is acting, i.e which container it is acting upon
var id_pour
var id_withdraw
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
			$('#water'+where).height(height)

			//Changes the "solution name" of beaker
			var newBeakerSolution=which[0].getAttribute('data-solution')
			$('#'+where)[0].setAttribute('data-solution', newBeakerSolution)
		}
		else
		{
			$('#water'+where).height(130)
		}
	}
	else
	{
		alert("Pipette empty!")
		clearInterval(id_pour)
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
			$('#water'+where).height(height)

			//Changes the "solution name" of pipette
			var newPipetteSolution=$('#'+where)[0].getAttribute('data-solution')
			which[0].setAttribute('data-solution', newPipetteSolution)
		}
		else
		{
			$('#water'+where).height(0)
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

	var clicked=$("#"+pipette_idx)[0]
	//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>Volume: "+clicked.getAttribute("data-volume")+"</li><li>Maximum Volume: "+clicked.getAttribute("data-maxvolume")+"</li><li>Solution Name: "+clicked.getAttribute("data-solution")+"</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>Drag the pipette here and there</li><li>Drag it into a beaker to see its actions</li><li>The amount of water added/removed depends on how long you hold the 'Pour' or 'Withdraw' button</li></ul"
}