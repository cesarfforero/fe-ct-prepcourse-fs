// lista de compras
var listaDeCompras = [];

listaDeCompras[3]="Tomates";
listaDeCompras[1]="Lechuga";


console.log(listaDeCompras[1]);

function devuelvoUsuario(){
    return "camilo";
}
function devuelvoSaludo(){
    return "Hola"
} 
function saludar(cb1, cb2){
    return cb1() + " " + cb2();
}

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);

console.log(resultado);

