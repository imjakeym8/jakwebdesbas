//.querySelector(); selects an individual id or class to be changed
//.quertSelectorAll(); selects all elements or classes assigned by all elements to be changed.
//.createElement(); creates a new HTML element.
//.append(); adds an element to an existing HTML element.
//.innerText method changes

document.querySelector("#myButton").onclick = function change() {
    
    const p = document.querySelectorAll(".hello");

    //JS    vs.     Python
    //forEach()     for        -- performs the loop
    //element       i          -- this is the object from the for loop given by the user.
    //p             in x       -- indicates where will the for loop based on.
    //=>            ;          -- any command/change can occur past this
    p.forEach(element => element.innerText = "Bye world!");
}