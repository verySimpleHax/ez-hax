G.AddData({
name:'Example mod',
author:'Orteil',
desc:'A simple example mod that adds hot peppers and hot sauce.',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	new G.Res({
		name:'get da food',
		desc:'[get da food]s are loaded with happiness and, depending on who you ask, may produce a pleasant feelings when eaten.',
		icon:[0,0,'spicySheet'],
		turnToByContext:{'eat':{'health':0.9,'happiness':1},'decay':{'spoiled food':0.01}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
	
	G.getDict('grass').res['gather']['get da food']=3;
}
});
