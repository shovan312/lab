const js=require('jssoup');
const fs=require('fs');

const editLab=(answers)=>{
	addImage(answers);
	appendName(answers);
	appendScriptTag(answers);
	createActionFile(answers);
	appendHTML(answers);
	if(answers.type!="storage")
		appendEnterRegular(answers);
	else
		appendEnterStorage(answers);
};

const addImage=(answers)=>{
	var imgPath=answers.image;
	fs.createReadStream(imgPath).pipe(fs.createWriteStream('../lab/assets/'+answers.name.toLowerCase()+'.png'));
}

const appendName=(answers)=>{
	var dic={
		"storage": 1,
		"measurement": 2,
		"tools": 3,
		"others": 4
	};
	var category=dic[answers.type];

	var data=fs.readFileSync('../lab/lab.html');
	data=data.toString().split("\n");
	var end=0;
	var opt=1;
	for(i in data)
	{
		if(data[i].indexOf('<p id="cat'+category)!==-1)
		{
			end=i;
			opt++;
		}
	}
	end=parseInt(end);
	string='\n<p id="cat'+category+'opt'+opt+'">'+answers.name+'</p>'
	data.splice(end+1, 0, string);
	data=data.join("\n")
	fs.writeFileSync('../lab/lab_test.html', data, 'utf8');
}

const appendScriptTag=(answers)=>{
	var data=fs.readFileSync('../lab/lab.html');
	data=data.toString().split("\n");
	var end=0;
	for(i in data)
	{
		if(data[i].indexOf('src="actions/')!==-1)
		{
			end=i;
		}
	}
	end=parseInt(end);
	string='\n<script type="text/javascript" src="actions/'+answers.name.toLowerCase()+'_action.js"></script>'
	data.splice(end+1, 0, string);
	data=data.join("\n")
	fs.writeFileSync('../lab/lab_test.html', data, 'utf8');
}

const createActionFile=(answers)=>{
	var data=fs.readFileSync('boilerplate.txt');
	data=data.toString();
	data=data.replace(/newobject/g, answers.name.toLowerCase());
	data=data.replace(/newObject/g, answers.name.toLowerCase());
	data=data.replace(/NewObject/g, answers.name);
	fs.writeFileSync("../lab/actions/"+answers.name.toLowerCase()+"_action.js", data, 'utf8');
}

const appendHTML=(answers)=>{
	var data=fs.readFileSync('html_boiler.txt');
	data=data.toString();

	var dic={
		"storage": 1,
		"measurement": 2,
		"tools": 3,
		"others": 4
	};
	var category=dic[answers.type];

	var data2=fs.readFileSync('../lab/lab.html');
	data2=data2.toString().split("\n");
	var opt=1;
	for(i in data2)
		if(data2[i].indexOf('<p id="cat'+category)!==-1)
			opt++;
	
	data=data.split("\n");
	data[0]="$('#cat"+category+"opt"+opt+"').click(function(){ //"+answers.name;
	data=data.join("\n");

	data=data.replace(/newobjectname/g, answers.name.toLowerCase());
	data=data.replace(/newobject/g, answers.name.toLowerCase());
	data=data.replace("New Object", answers.name);
	var start=data.indexOf("data-variable1"); //remove from data[start] to data[start+60], both included
	var res=data.slice(start, start+61);
	var dataVar=JSON.parse(answers.other);
	string=""
	for(i in dataVar)
	{
		var key=Object.keys(dataVar[i])[0];
		var value=dataVar[i][Object.keys(dataVar[i])[0]];
		string+=' data-'+key+'="'+value+'"';	
	}
	data=data.replace(res, string);
	fs.appendFileSync('../lab/add_object.js', data, 'utf8');
}

const appendEnterRegular=(answers)=>{
	var data=fs.readFileSync('../lab/enter.js');
	data=data.toString().split("\n");
	for(i in data){
		if(data[i].indexOf("accept")!=-1)
		{
			var res=data[i].slice(-2);
			data[i]=data[i].replace(res, ", ."+answers.name.toLowerCase()+"',")
		}
	}
	data=data.join("\n")
	fs.writeFileSync("../lab/enter.js", data, 'utf8');
}

const appendEnterStorage=(answers)=>{
	var data=fs.readFileSync('../lab/enter.js');
	data=data.toString().split("\n");
	var count=0;
	for(i in data){
		if(data[i].indexOf("accept")!=-1)
		{
			count++;		
			if(count==1)
				continue;
			else
			{
				var res=data[i].slice(-2);
				data[i]=data[i].replace(res, ", ."+answers.name.toLowerCase()+"',")
			}
		}
	}
	data=data.join("\n");
	fs.writeFileSync("../lab/enter.js", data, 'utf8');
}

module.exports={
	editLab
};