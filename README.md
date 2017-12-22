# VLABS Lab Authoring Tool

This is a lab authoring tool developed for VLABS. As of now, it demonstrates completely, the colloid making experiment of VLABS.
This was built to replace the non-interactive flash animations currently available on the site.
This tool is a more user friendly alternative where the user can virtually do anything with the given apparatus. 
The tool is maintainable and can be altered according to specific experiment requirements.

## Getting Started
1) Clone this repo into any local directory.
2) Open "lab.html"
3) Have fun!

## Built With
* JavaScript
* HTML
* [interact.js](http://interactjs.io)

## Code Structure
This explains where what file is and what each file does.
### Working Directory
* lab.html: Has the whole HTML code. The layout of the lab, and the JS files includes. Nothing else.
* drag.js, enter.js: interactjs files. Handles all the drag, drop and inter object interactions.
* cool.js: General cooling function for all container type objects. Obeys Newton's Law of Cooling.
* add_object.js: Has a list of all possible lab apparatus. Makes a new object and calls appropriate methods each time an apparatus is brought onto table.
### actions
*object_name*_action.js: Has all the methods for the particaular object.
This is where a contributor should write their logic when implementing new objects.
###assets
Contains all the images used for the apparatus.

##Making new objects
*Add a suitable image for this object in ./assets directory. (transparent .png files are recommended)

*Add it's name in *lab.html* under the suitable subsection. This is where the user will click to bring the new object onto the workspace.
```
<div id="collapse3" class="panel-collapse collapse">
	<div class="panel-body">
		<p id="cat3opt1">Pipette</p>
		<p id="cat3opt2">Spatula</p>
		<p id="cat3opt3">Bunsen Burner</p>
		<p id="cat3opt4">Magnetic Stirrer/Heater</p>
		<p id="cat3opt5">Your New Object</p>
	</div>
</div>
```

*Include it's methods' file, *newobjectname_action.js*
```
<script type="text/javascript" src="actions/testtube_action.js"></script>
<script type="text/javascript" src="actions/thermometer_action.js"></script>
<script type="text/javascript" src="actions/newobjectname_action.js"></script>
```

*List it in *add_object.js*
```
$("#cat3opt5").click(function(){ //Object Name
	$("#workspace")[0].innerHTML+='<div onclick="newobjectname_action('+idx+')" class="draggable drag-drop newobjectname" id='+idx+' style="height: 150px; position: relative; display: inline-block;" data-variable1="initial value" data-variable2="initial value"><img src="assets/newobject.png" height="150px"><div class="menu" id="newobject_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>New Object</h6></div><div class="menu-content"><ul><li id="method1'+idx+'">Method1</li><li id="method2'+idx+'">Method2</li><li id="close_newobject'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
	idx++;
	idx_max++;
})
```

*Make changes in *enter.js* to handle interactions and object removal
Include it in remove and removecross:
```
interact('.remove').dropzone({
	accept: '.beaker1, .flask, .cylinder, .testtube, .thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer, .newobjectname'
```
```
interact('.removecross').dropzone({
	accept: '.beaker1, .flask, .cylinder, .testtube, .thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer, .newobjectname'
```
If it is a container object, include it as follows:
```
interact('.beaker1, .flask, .cylinder, .testtube, .newobjectname').dropzone({
	accept: '.thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer'
```
else, like this:
```
interact('.beaker1, .flask, .cylinder, .testtube').dropzone({
	accept: '.thermometer, .balance, .microscope, .pipette, .spatula, .burner, .magnetic-stirrer, .newobjectname'
```
```
ondragenter: function(e){
		beaker=e.target
		what=e.relatedTarget
		beaker.style.border="dotted"
		beaker.style.borderWidth="1px"
		what.setAttribute('data-where', beaker.id);
		if(what.className=='draggable drag-drop newobjectname')
		{
			menu=document.getElementById("newobject_action"+what.id);
			menu.style.display="block";
		}
```
```
ondragleave: function (e) {
		what.removeAttribute('data-where');
		if(what.className=='draggable drag-drop newobjectname')
		{
			menu=document.getElementById("newobject_action"+what.id);
			menu.style.display="none";
		}
```
*Write down it's methods in *newobjectname_action.js*
Boilerplate:
```
function newobject_action(newobject_idx)
{
	//Adds a boundary when clicked
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}
	$("#"+newobject_idx)[0].style.border="dotted";
	$("#"+newobject_idx).css('border-width', '1px');

	var clicked=$("#"+newobject_idx)[0]
	//Edits the Help sidebar
	$("#properties")[0].innerHTML="<ul><li>Property1: "+clicked.getAttribute("data-variable1")+"</li><li>Property2: "+clicked.getAttribute("data-variable2")+"</li></ul>"
	$("#methods")[0].innerHTML="<ul><li>Write down instructions on how to use it</li><li>How it can interact with other objects</li><li>And everything the user can do with it</li></ul>"
}

function closeNewObject(newobject_idx){
	$('#newobject_action'+newobject_idx)[0].style.display='none';
}

function newObjectNewMethod(newobject_idx){
	//Your method here
}
```
