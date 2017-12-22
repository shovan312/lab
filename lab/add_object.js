//Adds HTML elements to the Workspace according the option clicked
//Each new element is a new object and has its own properties, id, type, etc.

var idx=1;

//Storage
$("#cat1opt1").click(function(){ //Beaker
	addContainer("Water (H<sub>2</sub>O)","beaker", "rgba(50, 140, 230, 0.3)", "1")
})

$("#cat1opt2").click(function(){ //Conical Flask
	addContainer("Water (H<sub>2</sub>O)","flask", "rgba(50, 140, 230, 0.3)", "1")
})

$("#cat1opt3").click(function(){ //Graduated Cylinder
	addContainer("Water (H<sub>2</sub>O)","cylinder", "rgba(50, 140, 230, 0.3)", "1")
})

$("#cat1opt4").click(function(){ //Test Tube
	addContainer("Water (H<sub>2</sub>O)","testtube", "rgba(50, 140, 230, 0.3)", "1")
})

$("#cat1opt5").click(function(){ //Test Tube
	addContainer("Water (H<sub>2</sub>O)","cuvette", "rgba(50, 140, 230, 0.3)", "1")
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

$("#cat2opt3").click(function(){ //Spectrophotometer
	$("#workspace")[0].innerHTML+="<div onclick='spectrophotometer_action("+idx+")' class='draggable drag-drop spectrophotometer' id="+idx+" style='height: 150px; width: 150px; display: inline-block;' data-is-open='False' data-contains='None'><img src='assets/spectrophotometer.png' height='150px'><div class='menu' id='spectrophotometer_action"+idx+"' style='z-index: 100; display: none; position: absolute; left: 50px; top: 10px'><div class='menu-header'><h6>Spectrophotometer</h6></div><div class='menu-content'><ul><li id='open_lid"+idx+"' onclick='openLid("+idx+")'>Open Lid</li><li id='close_lid"+idx+"' onclick='closeLid("+idx+")'>Close Lid</li><li id='insert_cuvette"+idx+"' onclick='insertCuvette("+idx+")'>Insert Cuvette</li><li id='close_spectrophotometer' style='color: #F44336' onclick='closeSpectrophotometer("+idx+")'>Close</li></ul></div><div><ul id='optionsBar'></ul></div></div></div>"
	idx++;
	idx_max++;
})

//Others

$("#cat3opt1").click(function(){ //Pipette
	$("#workspace")[0].innerHTML+="<div onclick='pipette_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop pipette' id="+idx+" style='height: 150px; width: 40px; display: inline-block;' data-volume='0'  data-maxvolume='10'  data-components='None:0'><img src='assets/pipette.svg' height='150px'><div class='menu' id='pipette_action"+idx+"' style='z-index: 100; display: none; position: absolute; left: 50px; top: 10px'><div class='menu-header'><h6>Pipette</h6></div><div class='menu-content'><ul><li id='withdraw"+idx+"' onmousedown='setWithdraw("+idx+")' onmouseup='clearWithdraw("+idx+")'>Withdraw</li><li id='pour"+idx+"' onmousedown='setPour("+idx+")' onmouseup='clearPour("+idx+")'>Pour</li><li id='close_pipette' style='color: #F44336' onclick='closePipette("+idx+")'>Close</li></ul></div></div></div>"
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
	$("#workspace")[0].innerHTML+='<div onclick="burner_action('+idx+')" class="draggable drag-drop burner" id='+idx+' style="height: 150px; position: relative; display: inline-block;"><img src="assets/burner.png" height="150px"><div class="menu" id="burner_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Burner</h6></div><div class="menu-content"><ul><li id="burn'+idx+'" onmousedown="setBurn('+idx+')" onmouseup="clearBurn('+idx+')">Burn</li><li id="close_burner'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
	idx++;
	idx_max++;
})

$("#cat3opt4").click(function(){ //Magnetic
	$("#workspace")[0].innerHTML+='<div onclick="magneticburner_action('+idx+')" class="draggable drag-drop magnetic-stirrer" id='+idx+' style="height: 150px; position: relative; display: inline-block;" data-is_bead="false"><img src="assets/magnetic-stirrer.png" height="150px"><div class="menu" id="magneticburner_action'+idx+'" style="z-index: 100; display: none; position: absolute; left: 100px; top: 10px"><div class="menu-header"><h6>Magnetic Stirrer/Burner</h6></div><div class="menu-content"><ul><li id="add_bead'+idx+'" onclick="add_bead('+idx+')">Add Bead</li><li id="magneticburn'+idx+'" onmousedown="setMagBurn('+idx+')" onmouseup="clearMagBurn('+idx+')">Burn</li><li id="close_magneticburner'+idx+'" style="color: #F44336">Close</li></ul></div></div></div>'
	idx++;
	idx_max++;
})

$("#cat4opt1").click(function(){ //K2Cr2O7
	addContainer("Potassium Dichromate (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>)","testtube", "orange", "2.68")
})

$("#cat4opt2").click(function(){ //Caffeine
	addContainer("Caffeine","testtube", "brown", "1.23")
})

$("#cat4opt3").click(function(){ //Coumarin-6
	addContainer("Coumarin-6","testtube", "black", "0.935")
})

$("#cat4opt4").click(function(){ //Couumarin-138
	addContainer("Coumarin-138","testtube", "black", "0.935")
})

$("#cat4opt5").click(function(){ //Coumarin-343
	addContainer("Coumarin-343","testtube", "black", "0.935")
})

$("#cat4opt6").click(function(){ //Cyclohexane
	addContainer("Cyclohexane (C<sub>6</sub>H<sub>12</sub>)","testtube", "yellow", "0.779")
})

$("#cat4opt7").click(function(){ //Dioxane
	addContainer("Dioxane (C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>)","testtube", "red", "1.03")
})

$("#cat4opt8").click(function(){ //Acetonitrile
	addContainer("Acetonitrile (C<sub>2</sub>H<sub>3</sub>N)","testtube", "yellow", "0.786")
})

$("#cat4opt9").click(function(){ //Ethyl Alcohol
	addContainer("Ethyl Alcohol (C<sub>2</sub>H<sub>6</sub>O)","testtube", "yellow", "0.789")
})

$("#cat4opt10").click(function(){ //Ethylene Glycol
	addContainer("Ethylene Glycol (C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>","testtube", "yellow", "0.935")
})

$("#cat4opt11").click(function(){ //2-Nitroaniline
	addContainer("2-Nitroaniline (C<sub>6</sub>H<sub>6</sub>N<sub>2</sub>O<sub>2</sub>)","testtube", "yellow", "1.442")
})

$("#cat4opt12").click(function(){ //TX-100
	addContainer("TX-100","testtube", "black", "1.07") 	
})

$("#cat4opt13").click(function(){ //Au(III)
	addContainer("Au(III) [HAuCl<sub>4</sub>","testtube", "yellow", "3.9")
})

$("#cat4opt14").click(function(){ //Ascorbic Acid
	addContainer("Ascorbic Acid (C<sub>6</sub>H<sub>8</sub>O<sub>6</sub>)","testtube", "orange", "1.65")
})

$("#cat4opt12").click(function(){ //Eosin Solution
	addContainer("Eosin Solution","testtube", "red", "1") 	
})

$("#cat4opt16").click(function(){ //Sodium Borohydride
	addContainer("Sodium Borohydride (NaBH<sub>4</sub>)","testtube", "grey", "1.07") 	
})



function addContainer(solution, type, colour, density, data){
	vol=[]
	vol["beaker"]=100
	vol["flask"]=200
	vol["cylinder"]=20
	vol["testtube"]=4
	vol["cuvette"]=0.8

	maxvol=[]
	maxvol["beaker"]=500
	maxvol["flask"]=1000
	maxvol["cylinder"]=100
	maxvol["testtube"]=20
	maxvol["cuvette"]=4

	width=[]
	width["beaker"]=115
	width["flask"]=101.63
	width["cylinder"]=43.8
	width["testtube"]=37.94
	width["cuvette"]=42

	var string=""
	for(i in data)
		string+="data-"+data[i][0]+"="+"'"+data[i][1]+"' "

	$("#workspace")[0].innerHTML+="<div onclick='"+type+"_action("+idx+")' oncontextmenu='show_menu("+idx+")' class='draggable drag-drop container1 "+type+"' id="+idx+" style='height: 150px; width: "+width[type]+"; position: relative; display: inline-block;' data-volume='"+vol[type]+"' data-maxvolume='"+maxvol[type]+"' data-temp='30' data-components='"+solution+":"+vol[type]+"' data-density='"+density+"' "+string+"><div id='solution"+idx+"' style='background-color: "+colour+"; bottom: 0px; position: absolute; height: 36px; width:"+width[type]+"px ;z-index: -1000'></div><img src='assets/"+type+".png' height='150px' style='display: block'></div>";
	cool(idx)
	idx++;
	idx_max++;
}