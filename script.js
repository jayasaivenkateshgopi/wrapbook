var x = document.getElementById("open");
var y = document.getElementById("close");

function mobileNav(){
    if (x.style.display === 'block') {
        y.style.display === 'none';
    }
    else{
        x.style.display = 'none';
        y.style.display = 'block';
    }
}