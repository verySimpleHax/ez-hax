G.AddData({
	name:'hackers',
	author:'me',
	desc:'Adds a hacker unit, who generates fast ticks.',
	engineVersion:1,
	{   
new G.Unit({
	name:'hacker',
	desc:'@generates [insight] once a second<>A [dreamer]gives you hacks.',
	icon:[1,2],
	cost:{},
	use:{'worker':1},
	//upkeep:{'coin':0.1},
	effects:[
		{type:'gather',what:{'insight':1}},
	],
	req:{'speech':true},
	category:'discovery',
	Priority:10,
	});
};	
});


