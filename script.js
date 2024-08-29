let numero1 = prompt('Escribe un numero');

let num1 = parseInt(numero1);
if(num1 >= 0){
    alert('Tu numero es entero positivo')
}
else if(num1 < 0){
    alert('Tu numero es un entero negativo');
}
else{
    alert('Por favor escribe un numero valido')
}