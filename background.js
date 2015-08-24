
/*Listen to requests from content script */
chrome.runtime.onMessage.addListener(
	function(request,sender){
		if(request.searchQuery){
			var index,searchQuery;
			chrome.tabs.query({currentWindow: true,active: true}, 
				function(tabs){
					index = tabs[0].index + 1;
					searchQuery = request.searchQuery;
					chrome.tabs.create({'url': 
						'http://www.google.com/search?q='+searchQuery,
						active: false, index: index});
				});
		}else if(request.openLink){
			var index;
			chrome.tabs.query({currentWindow: true,active: true},
				function(tabs){
					index = tabs[0].index + 1;
					chrome.tabs.create({'url': request.openLink,
						active: false, index: index});
				});
		}
	}
);