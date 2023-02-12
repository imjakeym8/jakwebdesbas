document.querySelector("#button").onclick = function show() {

    const button = document.querySelector(".button");
    const show = document.querySelector("#showhide");
    console.log(button.style);
    button.style.backgroundColor = "#3c6b6a80";
    show.style.display = "block";
}

document.querySelector("#close").onclick = function hide() {

    const revertcolor = document.querySelector(".button");
    const hide = document.querySelector("#showhide");
    revertcolor.style.backgroundColor = "#87ebe980";
    hide.style.display = "none";
}