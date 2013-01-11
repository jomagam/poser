var found_image = 0;
var MIN_WIDTH = 100;
$('img').each(function(){
    if(this.width > MIN_WIDTH && found_image < 3){
	chrome.extension.sendRequest({"src": this.src, "width": this.width});
	found_image++;
    }
});

if(found_image == 0){
    chrome.extension.sendRequest({"sorry": "No images wider than " + MIN_WIDTH + "px found."});
}

