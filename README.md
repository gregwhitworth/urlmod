urlmod
======

This is a lightweight URL parameter updater, nothing more and nothing less.

Basic Usage
-------------
To install, simply include the javascript file after jquery (it's best to place it just before the closing `</body>` tag).
	
	<script src="jquery.urlmod.v1.0.js"></script>

Then all you have to do is pass in your URL and the parameters that you want to have updated.
	
	var url = $.urlmod({
		url: "http://www.domain.com/?param1=value1&param2=value2",
		updates: {
			param1: "value75",
			param2: "value175"
		}
	});

	// Return value: http://www.domain.com/?param1=value75&param2=value175


Options
--------------------
*	**url:** This is the URL that has the parameters you want updated  	
	*Default: null*  	
	*(string)*    
*	**updates:** This is an object that has a key/value pair where the keys match the names of parameters in the initial URL. If you have parameters in your update object that are not referenced in your initial URL they will be added. If you provide an array as a value it will be converted to a string seperated by a comma.   	
	*Default: {}*   	
	*({key: `<string, array>`})*    
*   **removeStaleParams:** If this is set to true any parameters that existed initially that you did not update will not be included in the return URL.  	
	*Default: false*  	
	*(bool)*
