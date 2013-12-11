(function ( $ ) { 

    $.urlmod = function(options) {
		var settings = $.extend( {}, $.urlmod.defaults, options );

		if(settings.url != (null || "")) {

			var url = settings.url;
			var updates = settings.updates;
			
			var urlStart = url.substring(0, url.indexOf('?') + 1); // This will get everything through the ?
			var paramString = url.substring(url.indexOf('?') + 1); // This will get everything after the ?
			var paramsArr = [];									   // Used to store the params we want to work with
			var initparams = paramString.split('&');			   // The initial param strings
			var finalparams = []								   // An array to store the final params

			// Setup the initial param array from
			// the URL
			$.each(initparams, function(i, param) {
			    var keyVal = param.split('=');
			    var key = keyVal[0];
			    var val = keyVal[1];
			    paramsArr[key] = val;
			});

			// Get the keys of the array for us
			// to reference later
			var keys = Object.keys(paramsArr);

			// Update the values of the array with
			// our updates
			$.each(keys, function(i, key) {
				if(eval('updates.' + key) != undefined) {
					var updateVal = eval('updates.' + key);

					if($.isArray(updateVal)) {
						updateVal = updateVal.join(',');
					}

					paramsArr[key] = updateVal;
				}
				else if(settings.removeStaleParams) {
					delete paramsArr[key];					
				}
			});

			// We need to get the keys of the array
			// again since we may have removed some
			keys = Object.keys(paramsArr);

			// Loop through the keys and create
			// the final strings for use in the url
			$.each(keys, function(i, key) {
				finalparams.push(key + '=' + paramsArr[key]);
			});   

			// Return the final url
			return urlStart + finalparams.join('&');
		}

		return; // Return nothing as the URL wasn't supplied
	}

	// The default options
	$.urlmod.defaults = {
		url: null,  // Provide the URL with parameters to parse out, at minimum: ?param1=value
		updates: {}, // An object with the params you would like to update using the param name as the key
		removeStaleParams: false // If set to true, if the item isn't update the param will not be included upon return
	}

}( jQuery ));




