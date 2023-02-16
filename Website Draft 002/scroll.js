// show navbar upon scrolling up; hide it upon leaving the viewable window as a result of scrolling down.

let lastScrollPosition = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;
    let triggerPosition = 142;
    if (currentScrollPosition > triggerPosition) {
        document.querySelector('#stickynav').style.top = "72px";
    } else {
        document.querySelector('#stickynav').style.top = "0";
    }
    lastScrollPosition = currentScrollPosition;
}

