//initialize light box slider
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

/*
	@ string attribute
	@ var search term
	return show thumbnails
*/
function searchResults(attr, query) {
	$('.flex a').attr(attr, function(index, value){
	    return value.toLowerCase();
	});

	return $('.flex a['+ attr +'*="' + query + '"]').show();
}


/*
	@ string attribute
	@ var search term
	return show thumbnails
*/
$('#search').on( "keyup", function() {
	
	// get input value and convert to lowercase
	var query = search.value.toLowerCase();

	// hide all thumbs that are not equal to search results
	if (query !== '') {
		$('#search-results').empty();

		$('.flex a').hide();
		
		// check search result against tiltle and captions
		searchResults('alt', query);
		searchResults('title', query);

		// print message if search result is null and break loop
		if (!$(".flex a:visible").length) {
          $('#search-results').append('Sorry no images were found, please try another search.');
          $('#search').val("");
          $('.flex a').show();
          return false;
        }

	} else {
		// if search box is empty show all images
		$('.flex a').show();
	}
	
} );

