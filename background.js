var found_image = 0;
var dupes = {};
var MIN_WIDTH = localStorage["minumum_width"] || localStorage["DEFAULT_MINIMUM_WIDTH"] || 100;

$('img').each(function(){
    if(this.width > MIN_WIDTH && ! dupes[this.src]){
	chrome.extension.sendMessage({"src": this.src, "width": this.width});
	dupes[this.src] = 1;
	console.log("dupes[" + this.src + "] = 1");
	found_image++;
    }
});

if(found_image == 0){
    chrome.extension.sendMessage({"sorry": "No images wider than " + MIN_WIDTH + "px found."});
}
else {
    chrome.extension.sendMessage({"end": 1});
}

