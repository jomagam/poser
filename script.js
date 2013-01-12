var found = 0;
var sent_requests = 0;
var got_end = 0;

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.sorry){
	$('#imageinfo').html(request.sorry);
    }
    else if(request.end){
	got_end = 1;
    }
    else {
	search_for_image(request);
    }
});

chrome.tabs.executeScript(null, {"file": "jquery.min.js"});
chrome.tabs.executeScript(null, {"file": "background.js"});

var sentone = 0;

function search_for_image(request)
{
    var current_url = request.src;
    console.log("SEARCH FOR: " + current_url);
    var search_uri = "https://www.google.com/searchbyimage?image_url=" + encodeURIComponent(current_url);
//    console.log("SEARCH URI:" + search_uri);

    if(sentone){
	sleep(1000);
    }

    var req = new XMLHttpRequest();

    req.onload = function(){
	var body = req.responseText;

	if(body.indexOf("Best guess for this image") != -1){
	    chrome.tabs.create({"url": search_uri, "selected": false});
	    found++;
	    console.log("FOUND:" + search_uri);
	}
	else {
//	    $('#imageinfo').html($('#imageinfo').html() + current_url + " OK<br>");
	    console.log("NOT FOUND:" + search_uri);
	}
	sent_requests--;
	see_if_last();
    };
    req.onerror = function(){
	console.log("handleError:");
	console.log(req.error);
	sent_requests--;
	see_if_last();
    };
    req.open('GET', search_uri, true);
    sent_requests++;
    req.send(null);
    sentone++;
}

function see_if_last()
{
    if(got_end && sent_requests	== 0){
	console.log("END found=" + found);
	if(found == 0){
	    $('#imageinfo').html("Google could not find information on any of the images.");
	}
	else {
	    var plural = found > 1 ? "s" : "";
	    $('#imageinfo').html("Showing information on " + found + " image" + plural + " in new tab" + plural + ".");
	}
    }
}

function sleep(ms)
{
    var dt = new Date();
    dt.setTime(dt.getTime() + ms);
    while (new Date().getTime() < dt.getTime());
}
