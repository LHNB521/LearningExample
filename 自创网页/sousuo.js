/*function f() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ull");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}*/


function openNav() {
    document.getElementById("nav").style.height = "200px";
}
function closeNav() {
    document.getElementById("nav").style.height = "0%";
}