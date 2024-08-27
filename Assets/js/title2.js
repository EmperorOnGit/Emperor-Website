function loaded() {
    setInterval(loop, 400)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", (function() {
    loaded()
})) : document.attachEvent && document.attachEvent("onreadystatechange", (function() {
    loaded()
}));
var x = 0,
    titleText = ["fuck skids", "im hot", "fuck faggots", "doxbin.com", "kkk member A-ZA-Z0-9","#wehateniggers","don't skid :)"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}