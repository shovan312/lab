//interact.js file. Has appropriate actions attached to 'dragenter' and 'dragleave' events.
//Different actions for different interactions.

interact('.beaker, .flask, .cylinder, .testtube, .cuvette').dropzone({
	accept: '.thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer',
	overlap: 0.2,
	ondragenter: function(e){
		beaker=e.target
		what=e.relatedTarget
		beaker.style.border="dotted"
		beaker.style.borderWidth="1px"
		what.setAttribute('data-where', beaker.id);
		if(what.className=='draggable drag-drop pipette')
		{
			menu=document.getElementById("pipette_action"+what.id);
			menu.style.display="block";
		}
		else if(what.className=='draggable drag-drop spatula')
		{
			menu=document.getElementById("spatula_action"+what.id);
			menu.style.display="block";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			menu=document.getElementById("burner_action"+what.id);
			menu.style.display="block";
		}
		else if(what.className=='draggable drag-drop magnetic-stirrer')
		{
			menu=document.getElementById("magneticburner_action"+what.id);
			menu.style.display="block";
		}
	 },
	ondragleave: function (e) {
		what.removeAttribute('data-where');
		if(what.className=='draggable drag-drop pipette')
		{
			menu=document.getElementById("pipette_action"+what.id);
			menu.style.display="none";
		}
		else if(what.className=='draggable drag-drop spatula')
		{
			menu=document.getElementById("spatula_action"+what.id);
			menu.style.display="none";			
		}
		else if(what.className=='draggable drag-drop burner')
		{
			menu=document.getElementById("burner_action"+what.id);
			menu.style.display="none";	
		}
	}
});



interact('.remove').dropzone({
	accept: '.beaker, .flask, .cylinder, .testtube, .thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer, .cuvette, .spectrophotmeter',
	overlap: 0.4,
	ondragenter: function(e){
		where=e.target
		what=e.relatedTarget
		where.style.backgroundColor="blue"
		$(".removecross")[0].style.display="block"
	},
	ondragleave: function (e) {
		where=e.target
		what=e.relatedTarget
		where.style.backgroundColor="white"
		$(".removecross")[0].style.display="none"
	}
});

interact('.removecross').dropzone({
	accept: '.beaker, .flask, .cylinder, .testtube, .thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer, .cuvette, .spectrophotmeter',
	overlap: 0.2,
	ondragenter: function(e){
		where=e.target
		what=e.relatedTarget
		$("#"+what.id)[0].style.height=0
		$("#"+what.id).empty()
		$("#"+what.id).removeClass("draggable")
		$(".remove")[0].style.backgroundColor="white"
		where.style.display="none"
		clearInterval(cool_id[what.id])
	}
})