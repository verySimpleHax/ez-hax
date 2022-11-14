G.AddData({
	name:'hackers',
	author:'Owen "Ohead" Parker',
	desc:'Adds a hacker unit, who generates fast ticks.',
	engineVersion:1,
	func:function()
	{   
		G.props['fastTicksOnResearch']=10000;
		
	}
});
