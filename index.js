jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}
//use that thing to import code into your browser
$.loadScript('https://atamanum.github.io/WebFilterInjector/searcher.js', function(){
    console.log("script loaded");
});