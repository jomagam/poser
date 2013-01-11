var found_image = 0;
var dupes = {};
var MIN_WIDTH = 100;
$('img').each(function(){
    if(this.width > MIN_WIDTH && ! dupes[this.src]){
	chrome.extension.sendRequest({"src": this.src, "width": this.width});
	dupes[this.src] = 1;
	found_image++;
    }
});

if(found_image == 0){
    chrome.extension.sendRequest({"sorry": "No images wider than " + MIN_WIDTH + "px found."});
}

