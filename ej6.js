/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

const swap = (array, position1, position2) => {
    let primerElemento = array.slice(position1, position1+1);
    array.splice(array.indexOf(array[position1]), 1, array[position2]);
    array[position2] = primerElemento[0];
    return array;
}

console.log(swap(fantasticFour, 0, 3));