function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.querySelector('.heure').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
startTime();


let input = "";

function showValue(btn){
    input = input + btn.value;
    // console.log(input);
    document
        .getElementById("numero")
        .innerText = input;
}
function remove(btn){
    input = input.replace(input.slice(-1), "");
    document
        .getElementById("numero").innerHTML = input
}

function ajout(){
    if(document.getElementById(ajoutNumero) != " "){
        ajoutNumero.innerText = "Ajouter ce numéro"
    }
}
ajout()