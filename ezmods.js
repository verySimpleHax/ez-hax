G.AddData({
	name:'Hackers',
	author:'thatonedude',
	desc:'Adds a hacker unit, who generates fast ticks and insight.',
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
		{type:'gather',what:{'insight':0.5}},
		{type:'function',func:(me)=>{
                    let amount = me.amount - me.idle;
                    // Limit of 25% chance per day, logarithmic
                    if (.5 * (-1*((.875) ** amount) + 1) > Math.random()) {
                        G.fastTicks++;
                    };
		}}
            ],
            req:{'ritualism':true},
            category:'spiritual',
        });
	}
});

