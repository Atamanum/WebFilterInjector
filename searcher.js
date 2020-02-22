//that script is made exclusivelly for https://mangapoisk.ru/
//maybe later will be upgraded to an universal strandart
var atmFilter = function(bean)
{
	return parseFloat(bean[3])>3;
};
var runner = function()
{
	var items = $(".flex-container .flex-item");

	items.each(function(  ) {
		if(!atmFilter(extractData(this)))
		{
			console.log("remove");
			this.remove();
		}
		else{
			console.log("removeno");
		}
	});
};
var extractData = function(item){
	var data = [];
	$(item).find(".card-numbers .card-numbers-item").each(function() {
		var texts = $(this).text().split(":");
		var text = texts[texts.length-1].trim();
		data.push(text);
	});
	return data;
};