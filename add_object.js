//Adds HTML elements to the Workspace according the option clicked
//Each new element is a new object and has its own properties, id, type, etc.

var idx=1;

//Storage
$("#cat1opt1").click(function(){ //Beaker
	$("#workspace")[0].innerHTML+="<div onclick='beaker_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop beaker1' id="+idx+" style='height: 150px; width: 120px; position: relative; display: inline-block;' data-volume='100' data-maxvolume='500' data-temp='30' data-solution='Water(H<sub>2</sub>O)' data-density='1'><div id='water"+idx+"' style='background-color: aqua; bottom: 0px; position: absolute; height: 36px; width:115px;z-index: -1000'></div><img src='assets/beaker1.png' height='150px' style='display: block'></div>";
	cool(idx)
	idx++;
	idx_max++;
})

$("#cat1opt2").click(function(){ //Conical Flask
	$("#workspace")[0].innerHTML+="<div onclick='flask_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop flask' id="+idx+" style='height: 150px; width: 101.63px; position: relative; display: inline-block;' data-volume='200' data-maxvolume='1000' data-temp='30' data-solution='Water(H<sub>2</sub>O)' data-density='1'><div id='water"+idx+"' style='background-color: aqua; bottom: 0px; position: absolute; height: 36px; width:101.63px;z-index: -1000'></div><img src='assets/flask.png' height='150px' style='display: block'></div>";
	cool(idx)
	idx++;
	idx_max++;
})

$("#cat1opt3").click(function(){ //Graduated Cylinder
	$("#workspace")[0].innerHTML+="<div onclick='cylinder_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop cylinder' id="+idx+" style='height: 150px; width: 43.8px; position: relative; display: inline-block;' data-volume='20' data-maxvolume='100' data-temp='30' data-solution='Water(H<sub>2</sub>O)' data-density='1'><div id='water"+idx+"' style='background-color: aqua; bottom: 0px; position: absolute; height: 36px; width:43.8px;z-index: -1000'></div><img src='assets/cylinder.png' height='150px' style='display: block'></div>";
	cool(idx)
	idx++;
	idx_max++;
})

$("#cat1opt4").click(function(){ //Test Tube
	$("#workspace")[0].innerHTML+="<div onclick='testtube_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop testtube' id="+idx+" style='height: 150px; width: 40px; position: relative; display: inline-block;' data-volume='4' data-maxvolume='20' data-temp='30' data-solution='Water(H<sub>2</sub>O)' data-density='1'><div id='water"+idx+"' style='background-color: aqua; bottom: 0px; position: absolute; height: 36px; width:37.94px;z-index: -1000'></div><img src='assets/testtube.png' height='150px' style='display: block'></div>";
	cool(idx)
	idx++;
	idx_max++;
})

//Analytical
$("#cat2opt1").click(function(){ //Thermometer
	$("#workspace")[0].innerHTML+="<div onclick='thermometer_action("+idx+")' class='draggable drag-drop thermometer' id="+idx+" style='height: 150px; width: 30px; display: inline-block;'><img src='assets/thermometer.png' height='150px'></div>"
	idx++;
	idx_max++;
})

$("#cat2opt2").click(function(){ //Balance
	$("#workspace")[0].innerHTML+="<div onclick='balance_action("+idx+")' class='draggable drag-drop balance' id="+idx+" style='height: 150px; width: 200px; display: inline-block;'><img src='assets/weight.png' height='150px'></div>"
	idx++;
	idx_max++;
})

$("#cat2opt3").click(function(){ //Microscope
	$("#workspace")[0].innerHTML+="<div class='draggable drag-drop microscope' id="+idx+" style='height: 150px; width: 150px; display: inline-block;'><img src='assets/qmark.png' height='150px'></div>"
	idx++;
	idx_max++;
})

//Others

$("#cat3opt1").click(function(){ //Pipette
	$("#workspace")[0].innerHTML+="<div onclick='pipette_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop pipette' id="+idx+" style='height: 150px; width: 40px; display: inline-block;' data-volume='0'  data-maxvolume='10'data-solution='None'><img src='assets/pipette.svg' height='150px'><div class='menu' id='pipette_action"+idx+"' style='z-index: 100; display: none; position: absolute; left: 50px; top: 10px'><div class='menu-header'><h6>Pipette</h6></div><div class='menu-content'><ul><li id='withdraw"+idx+"' onmousedown='setWithdraw("+idx+")' onmouseup='clearWithdraw("+idx+")'>Withdraw</li><li id='pour"+idx+"' onmousedown='setPour("+idx+")' onmouseup='clearPour("+idx+")'>Pour</li><li id='close_pipette' style='color: #F44336' onclick='closePipette("+idx+")'>Close</li></ul></div></div></div>"
	idx++;
	idx_max++;
})

$("#cat3opt2").click(function(){ //Spatula
	var what=prompt("What do want to be in the spatula?:", "FeCl\u2083")
	if(what=="FeCl\u2083")
	{
		$("#workspace")[0].innerHTML+='<div onclick="spatula_action('+idx+')" class="draggable drag-drop spatula" id='+idx+' style="height: 150px; width: 150px; display: inline-block;" data-contains="FeCl\u2083 Powder"><img src="assets/spatula.png" height="150px"><div class="menu" id="spatula_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Spoon</h6></div><div class="menu-content"><ul><li id="add'+idx+'">Add</li><li id="close_spatula'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
		idx++;
		idx_max++;
	}
	else
	{
		alert("Sorry, this feature is not yet implemented")
	}
})

$("#cat3opt3").click(function(){ //Bunsen Burner
	$("#workspace")[0].innerHTML+='<div onclick="burner_action('+idx+')" class="draggable drag-drop burner" id='+idx+' style="height: 150px; position: relative; display: inline-block;"><img src="assets/burner.png" height="150px"><div class="menu" id="burner_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Burner</h6></div><div class="menu-content"><ul><li id="burn'+idx+'">Burn</li><li id="close_burner'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
	idx++;
	idx_max++;
})

$("#cat3opt4").click(function(){ //Magnetic
	$("#workspace")[0].innerHTML+='<div onclick="magneticburner_action('+idx+')" class="draggable drag-drop magnetic-stirrer" id='+idx+' style="height: 150px; position: relative; display: inline-block;" data-is_bead="false"><img src="assets/magnetic-stirrer.png" height="150px"><div class="menu" id="magneticburner_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Magnetic Stirrer/Burner</h6></div><div class="menu-content"><ul><li id="add_bead'+idx+'">Add Bead</li><li id="magneticburn'+idx+'">Burn</li><li id="close_magneticburner'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
	idx++;
	idx_max++;
})