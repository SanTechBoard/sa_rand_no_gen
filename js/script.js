document.getElementById("jscheck").textContent = ``;
document.addEventListener("DOMContentLoaded", function() {
    let num;
    let max = 10;
    let min = 1;

    document.getElementById("set").addEventListener("click", function() {
        min = Number(document.getElementById("min").value);
        max = Number(document.getElementById("max").value);
    });

    document.getElementById("Generate").addEventListener("click", function() {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("out").textContent = num;
    });
    document.getElementById("warning").textContent = "If you swap between min and max the generator won't work properly";

});