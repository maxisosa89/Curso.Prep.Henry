// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arr = [];
  let i = 0;
  for (let clave in objeto){
    arr[i] = [clave, objeto[clave]]
    i++;
  };
  return arr;
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var ltr = string.charAt(0);
  var obj = {};
  for (let i = 0; i < string.length; i++){
    ltr = string.charAt(i);
    obj[ltr] = 0;
  };
  for (let i = 0; i < string.length; i++){
    ltr = string.charAt(i);
    obj[ltr] = obj[ltr] + 1;
  };
  return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var res = "";
  var cont = 0;
  for (let i = 0; i < s.length; i++){
    if (s.charAt(i) === s.charAt(i).toUpperCase()){
      res = res + s.charAt(i);
      cont++;
    }
  }
  for (let i = 0; i < s.length; i++){
    if (s.charAt(i) === s.charAt(i).toLowerCase()){
      res = res + s.charAt(i);
      cont++;
    }
  }  
  return res;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arr = str.split(" ");
  for (let i = 0; i < arr.length; i++){
    aux = "";
    for (let x = arr[i].length - 1; x >= 0; x--){
      aux += arr[i].charAt(x);
    }
    arr[i] = aux;
  }
  var res = "";
  for (let y = 0; y < arr.length; y++){
    res = res + arr[y];
    if (y !== arr.length - 1){
      res = res + " ";
    }

  }
  return res;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var a = numero.toString();
  var aux = "";
  for (let i = a.length - 1; i >= 0; i--){
    aux = aux + a.charAt(i);
  }
  if (aux === a){
    return("Es capicua");
  }
  else{
    return("No es capicua");
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var res = "";
  for (let i = 0; i < cadena.length; i++){
    if (cadena.charAt(i) === "a" || cadena.charAt(i) === "b" || cadena.charAt(i) === "c"){
      continue;
    }
    else{
      res = res + cadena.charAt(i);
    }
  }
  return res;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var newArr = arr.sort(function(a, b) {
    return a.length - b.length;
  });
  return newArr;

  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const res = arreglo1.filter(value => arreglo2.includes(value));
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

