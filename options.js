
localStorage["DEFAULT_MINIMUM_WIDTH"] = 100;
var DEFAULT_WIDTH = localStorage["DEFAULT_MINIMUM_WIDTH"];

function save_options() {
    var minimum_width = document.getElementById("imagewidth").value || DEFAULT_WIDTH;
    localStorage["minimum_width"] = minimum_width;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
	status.innerHTML = "";
    }, 750);
}

function set_options()
{
    var minimum_width = localStorage["minimum_width"] ? localStorage["minimum_width"] : DEFAULT_WIDTH;
    document.getElementById("imagewidth").value = minimum_width;
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
	evt.preventDefault();
}




document.addEventListener('DOMContentLoaded', set_options);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#save').addEventListener('click', save_options);
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#imagewidth').addEventListener('keypress', isNumberKey);
});
