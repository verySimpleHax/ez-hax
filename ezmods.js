G.AddData({
    Name:'Magadoo Mod',
    Author:'SomeToon',
    desc:'This allows you to have a magadee from the magadadee clan in boggles creek in your tribe!',
    engineVersion:1,
    manifest:'https://rawgit.com/Generatoror/hello-world/master/catManifest.js',
    requires:['Default dataset*'],
    sheets:{'magadadeeSheet':'/file:///C:/Users/s/Desktop/Screen%20Shot%202018-03-17%20at%203.36.22%20PM.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
    func:function()
    {
		new G.Unit({
		name:'Magadadee',
		desc:'@generates [insight] more frequently than a [dreamer]<>A [Magadadee] spends their time observing, thinking, and wondering why things are the way they are.',
		icon:[0,0,'magadadeeSheet'],
		cost:{'food':50},
		use:{'worker':1},
		effects:[
			{type:'gather',what:{'insight':0.3}},
			{type:'gather',what:{'insight':0.15},req:{'symbolism':true}},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		category:'discovery',
		req:{'construction':true},
		limitPer:{'house':1},
		});
    }
});

