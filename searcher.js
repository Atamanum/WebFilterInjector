//that script is made exclusivelly for https://mangapoisk.ru/
//maybe later will be upgraded to an universal strandart
var atmFilter = function(bean)
{
	return true;
};
var runner = function()
{
	var items = $(".flex-container .flex-item");

	items.each(function(  ) {
		if(!atmFilter(extractData(this)))
		{
			this.remove();
		}
	});
};
var extractData = function(item){
	var data = [];
	$(item).find(".card-numbers .card-numbers-item").each(function() {
		var texts = $(this).text().split(":");
		var text = texts[texts.length()-1].trim();
		data.push(text);
	});
	return data;
};