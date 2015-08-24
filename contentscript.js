
/*Listen for events* and relay to background.js */
addEventListener("dragend", function(event){
	var selectedText = getSelection().toString();
	if(selectedText.length > 1){
		chrome.runtime.sendMessage({searchQuery:selectedText});
	}
});

addEventListener("dragend", function(event){
	var link = event.target;
	if(link.tagName === 'A'){
		chrome.runtime.sendMessage({openLink: link.href});
	}
});