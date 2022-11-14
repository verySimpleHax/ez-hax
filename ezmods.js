G.AddData({
	name:'Hackers',
	author:'hello world',
	desc:'Adds a hacker unit, who generates fast ticks.',
	engineVersion:1,
	func:function()
	{   
        new G.Unit({
            name:'hacker',
            desc:'@generates fast ticks every now and then<>A [hacker] is one with the land and the natural energy of the universe.',
            icon:[7,5],
            cost:{},
            use:{'worker':1},
            upkeep:{'coin':0.2},
            effects:[
		{type:'gather',what:{'insight':0.5}}
            ],
            req:{'ritualism':true},
            category:'spiritual',
        });
	}
});
