//initialize light box slider
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};


$('#search').on( "keyup", function() {
	// get input value
	var query = search.value.toLowerCase();

	// testing print to console
	console.log(query);

	// hide all thumbs that are not equal to search results
	if (query !== '') {
		
		$('.flex a').hide();
		
		// show .flex a where flex a img title is equal to query else hide
		$('.flex a').attr('alt', function(index, value){
		    return value.toLowerCase();
		});

		$('.flex a').attr('title', function(index, value){
		    return value.toLowerCase();
		});

		var $alt = $('.flex a[alt^="' + query + '"]');
		$alt.show();

		var $title = $('.flex a[title*="' + query + '"]');
		$title.show();

	} else {
		$('.flex a').show();
	}
	
} );

