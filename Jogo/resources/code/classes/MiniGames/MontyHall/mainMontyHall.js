(function () {
    window.addEventListener("load", main);
}());


function main() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    new GameMontyHall(ctx);
}
