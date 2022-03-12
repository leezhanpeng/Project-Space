function appear() {
    var popout = document.querySelectorAll(".scroll-appear");

    for (var i = 0; i < popout.length; i++) {
        var screenHeight = window.innerHeight;
        var itemTopGap = popout[i].getBoundingClientRect().top;
        var itemAppear = 150;

        if (itemTopGap < screenHeight - itemAppear) {
            popout[i].classList.add("show")
        }

        else {
            popout[i].classList.remove("show")
        }
    }
}

function disappear() {
    var arrows = document.querySelector(".arrows");
    var popout = document.querySelector(".intro-content");

    if (popout.classList.contains("show")) {
        arrows.classList.add("disappear")
    }

    else {
        arrows.classList.remove("disappear")
    }
}



function parallax() {
    var s = document.querySelector(".slow-scroll");
    console.log(s);
    var yPos = 0 - window.pageYOffset/18;
    console.log(yPos)
    s.style.top = 30 - yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});


window.addEventListener("scroll", appear);
window.addEventListener("scroll", disappear);