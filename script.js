// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// source: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

function setBGImg() {
    var fileName = location.href.split("/").slice(-1)[0];
    let layer0 = document.getElementById("layer0");
    console.log(fileName);

    switch (fileName) {
        case "index.html":
            layer0.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/bg-img.jpg') no-repeat center center fixed";
            layer0.style.backgroundSize = "cover";
            console.log("switch on index called");
            break;
        case "services.html":
            layer0.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/services.jpg") no-repeat center center fixed';
            layer0.style.backgroundSize = "cover";
            console.log("switch on index called");
            break;
        case "book.html":
            layer0.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/agenda.jpg") no-repeat center center fixed';
            layer0.style.backgroundSize = "cover";
            console.log("switch on index called");
            break;
        case "location.html":
            layer0.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/map.jpg") no-repeat center center fixed';
            layer0.style.backgroundSize = "cover";
            console.log("switch on index called");
            break;
        case "about.html":
            layer0.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("images/about.jpg") no-repeat center center fixed';
            layer0.style.backgroundSize = "cover";
            console.log("switch on index called");
            break;

        default:
            layer0.style.background = '#000';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setBGImg();
});