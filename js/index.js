// Optional: This just makes all the links open in a new tab
var links = document.links;
for (var i = 0; i < links.length; i++) {
     links[i].target = "_blank";
}