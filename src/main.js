const inquirer = require('inquirer');
const {
	editLab
}=require('./regularFlow');
const {}=require('./storageFlow');

console.log("Hey! Let's get started");

const q1=[
	{
		type: 'list',
		name: 'type',
		message: 'What type of element is it?',
		choices: [
			{
				key: 's',
				name: 'Storage (Flasks, Beakers, etc.)',
				value: 'storage'	
			},
			{
				key: 'm',
				name: 'Measurement (Thermometer, pH paper, etc.)',
				value: 'measurement'	
			},
			{
				key: 't',
				name: 'Tools (Pipette, Filter Paper, etc.)',
				value: 'tools'	
			},
			{
				key: 'o',
				name: 'Others',
				value: 'others'	
			}
		]
	}
];

inquirer.prompt(q1).then(answers => {
	if(answers.type=='storage')
		storageQuestions(answers);
	else
		regularQuestions(answers);
},
{
	if(err)
	{
		console.error(err);
	}
})

function storageQuestions(type)
{
	const storageQuestions=[
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of the object?',
		},
		{
			type: 'input',
			name: 'image',
			message: 'Please provide the root path for the image you want to use for this object'
		},
		{
			type: 'input',
			name: 'maxvolume',
			message: 'What is the capacity of the container? (in mL)'
		},
		{
			type: 'input',
			name: 'solution',
			message: 'What solution do you want present in the container? (Press Enter for default, "Water")',
			default: 'Water'
		},
		{
			type: 'input',
			name: 'colour',
			message: 'What colour is the solution? (Please provide RGBA values)'
		},
		{
			type: 'input',
			name: 'density',
			message: 'What is the density of the solution at room temperature? (in g/cm3)'
		},
		{
			type: 'input',
			name: 'other',
			message: "Any other data attributes you'd like to add? (Specify as '[{'data-attribute1': default-value1}, {'data-attribute2': default-value2}]') (\033[0;31mPlease use double inverted commas for keys)"
		}
	]

	inquirer.prompt(storageQuestions).then(answers => {
		answers[Object.keys(type)[0]]=type[Object.keys(type)[0]];
		editLab(answers);
	},
	{
		if(err)
		{
			console.error(err);
		}
	})
}

function regularQuestions(type)
{
	const regularQuestions=[
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of the object?',
		},
		{
			type: 'input',
			name: 'image',
			message: 'Please provide the root path for the image you want to use for this object'
		},
		{
			type: 'input',
			name: 'other',
			message: "Any other data attributes you'd like to add? (Specify as '[{'data-attribute1': default-value1}, {'data-attribute2': default-value2}]') (\033[0;31mPlease use double inverted commas for keys)",
			default: '[]'
		}
	]
	inquirer.prompt(regularQuestions).then(answers =>{
		answers[Object.keys(type)[0]]=type[Object.keys(type)[0]];
		editLab(answers);
	},
	{
		if(err)
		{
			console.error(err);
		}
	})
}
