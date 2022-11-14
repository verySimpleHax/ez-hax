G.AddData({
	name:'Monk',
	author:'Shawn the mod maker',
	desc:'Adds a monk unit, who generates fast ticks.',
	engineVersion:1,
	func:function()
	{   
       	new G.Unit({
		name:'monk',
		desc:'@generates [insight] more often than a dreamer, which you can use to research early technologies<>A [monk] spends their time thinking, and wondering why things are the way they are.',
		icon:[1,2],
		cost:{},
		use:{'worker':1},
		//upkeep:{'coin':0.2},
		effects:[
			{type:'gather',what:{'insight':0.3}},
			{type:'gather',what:{'insight':0.15},req:{'symbolism':true}},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		req:{'speech':true},
		category:'discovery',
		priority:5,
       });
       }
});
