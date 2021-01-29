
function sumar(){
    let valor1,valor2;
valor1 = document.getElementById("valor1").value;
valor2 = document.getElementById("valor2").value;

let resultado = parseInt(valor1)+valor2*1;
console.log(resultado)
document.getElementById("resultado").innerHTML="Tu resultado es " +resultado
}

function restar(){
    let valor1,valor2;
valor1 = document.getElementById("valor1").value;
valor2 = document.getElementById("valor2").value;

let resultado = parseInt(valor1)-valor2;
console.log(resultado)
document.getElementById("resultado").innerHTML="Tu resultado es " +resultado

}

function multiplicar(){
    let valor1,valor2;
valor1 = document.getElementById("valor1").value;
valor2 = document.getElementById("valor2").value;

let resultado = parseInt(valor1)*valor2;
console.log(resultado)
document.getElementById("resultado").innerHTML="Tu resultado es " +resultado
}

function dividir(){
    let valor1,valor2;
valor1 = document.getElementById("valor1").value;
valor2 = document.getElementById("valor2").value;

let resultado = parseInt(valor1)/valor2;
console.log(resultado)
document.getElementById("resultado").innerHTML="Tu resultado es " +resultado
}
