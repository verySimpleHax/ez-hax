new G.Unit({
	name:'hacker',
	desc:'@generates [insight] once a second<>A [dreamer]gives you hacks.',
	icon:[1,2],
	cost:{},
	use:{'worker':1},
	upkeep:{'coin':0.1},
	effects:[
		{type:'gather',what:{'insight':1}},
		{type:'gather',what:{'insight':1},req:{'stone-knapping':true}},
	],
	req:{'speech':true},
	category:'discovery',
	priority:100,
});
