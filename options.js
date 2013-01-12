
localStorage["DEFAULT_MINIMUM_WIDTH"] = 105;
var DEFAULT_WIDTH = localStorage["DEFAULT_MINIMUM_WIDTH"];

function save_options() {
    var minimum_width = document.getElementById("imagewidth").value || DEFAULT_WIDTH;
    alert("SAVING " + minimum_width);
    localStorage["minumum_width"] = minimum_width;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
	status.innerHTML = "";
    }, 750);
}

function set_options()
{
    var minimum_width = localStorage["minimum_width"] ? localStorage["minimum_width"].value : DEFAULT_WIDTH;
    alert("GETTING " + minimum_width);
    document.getElementById("imagewidth").value = minimum_width;
}

document.addEventListener('DOMContentLoaded', set_options);
document.querySelector('#save').addEventListener('click', save_options);
