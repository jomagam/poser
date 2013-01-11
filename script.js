var got_images = 0;
chrome.extension.onRequest.addListener(function(request) {
    if(request.sorry){
	$('#imageinfo').html(request.sorry);
    }
    else {
	got_images++;
	$('#imageinfo').html($('#imageinfo').html() + request.src + " " + request.width + "px #" + got_images + "<br>");
    }
});

chrome.tabs.executeScript(null, {"file": "jquery.min.js"});
chrome.tabs.executeScript(null, {"file": "background.js"});

