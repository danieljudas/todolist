var formularz = document.getElementById("formularz");
var pole = document.getElementById("pole");
var lista = document.getElementById("lista");

function stworzElementListy (zadanie) {
    var element = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    element.innerText = zadanie;
    element.prepend(checkbox);

    return element;
}

formularz.onsubmit = function (event) {
    event.preventDefault();
    var zadanie = pole.value;
    pole.value = "";
    var element = stworzElementListy (zadanie);
    lista.prepend(element);

}