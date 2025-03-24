$(document).ready(function(){
    new jBox('Tooltip', {
        attach: '.tooltip'
    });
});

function copyText(textToCopy){
    navigator.clipboard.writeText(textToCopy);
    toastr["success"]("Copied to clipboard", "Success");
}

var typeEl = document.querySelector(".typewriter")
var index = 0, isAdding = true
function typeWrite(typeText) {
    setTimeout(function () {
        typeEl.innerText = typeText.slice(0, index)
        if (isAdding) {
        if (index > typeText.length) {
            isAdding = false
            setTimeout(function () {
                typeWrite(typeText)
            }, 2000)
            return
        } else {
            index++
        }
        } else {
        if (index === 0) {
            isAdding = true
        } else {
            index--
        }
        }
        typeWrite(typeText)
    }, 120)
}