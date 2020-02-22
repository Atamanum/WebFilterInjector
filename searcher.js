//that script is made exclusivelly for https://mangapoisk.ru/
//maybe later will be upgraded to an universal strandart
var atmFilter = function(bean)
{
	return parseFloat(bean[2])>3;
};
var runner = function()
{
	var fc = $(".flex-container");
	fc.html("");
	var pag = getPag();
	for(var i = 1 ; i<pag.max+1;i++)
	{
		var frame = getFrame(pag.url+i);
		var items = frame.find(".flex-container .flex-item");
		console.log(items);
	}

	/*var items = $(".flex-container .flex-item");

	items.each(function(  ) {
		if(!atmFilter(extractData(this)))
		{
			console.log("remove");
			this.remove();
		}
		else{
			console.log("removeno");
		}
	});*/
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
var getFrame = function(url){
	var iframe = {};
	if(!!$("#miframe").length)
		iframe = $("#miframe");
	else
	{
		var iframe = $('<iframe />', {
                        name: 'frame1',
                        id: 'miframe',
                    }).appendTo('body');
	}
	if (iframe.length ) {
        iframe.attr('src',"https://www.google.com");   
    }
    return iframe;
	
};
var getPag = function(){
	var resp = {};
	var pages = $(".pagination .page-item a");
	resp.url = pages[0].href;
	resp.url = resp.url.substring(0, resp.url.length - 1);
	var m = pages[pages.length-2].href;
	resp.max = parseInt(m.substring(m.lastIndexOf("=")+1));
	return resp;
};
