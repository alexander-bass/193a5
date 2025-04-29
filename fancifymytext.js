function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";  
}

function setTextStyle() {
    let textArea = document.getElementById("textInput");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked){
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function setUppercase() {
    let textArea = document.getElementById("textInput");
    var str = textArea.value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    textArea.value = str;
    textArea.value = textArea.value.toUpperCase();
}

window.onload = function() {
    document.getElementById("bigger").onclick = makeBigger;
    document.getElementById("fancy").onchange = setTextStyle;
    document.getElementById("boring").onchange = setTextStyle;
    document.getElementById("moo").onclick = setUppercase;
}