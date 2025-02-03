// // lista de compras
// var listaDeCompras = [];

// listaDeCompras[3]="Tomates";
// listaDeCompras[1]="Lechuga";


// console.log(listaDeCompras[1]);

// function devuelvoUsuario(){
//     return "camilo";
// }
// function devuelvoSaludo(){
//     return "Hola"
// } 
// function saludar(cb1, cb2){
//     return cb1() + " " + cb2();
// }

// var resultado = saludar(devuelvoSaludo, devuelvoUsuario);

// console.log(resultado);

// // bucle for

// var arr = [1,2,3];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// // bucle while
// var arr = [];
// while(arr.length < 3){
//     arr.push("cesar es el mejor" + 1);
// }

// console.log (arr);

// n = 0;
// x = 0;
// while(n < 3){
//     n++;
//     x += n;
// }

// console.log(x);

// push y unshift
var colores = ["rojo", "verde", "azul"];
colores.push("rojo");
colores.unshift("verde");


// pop y shift
colores.shift();
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);
