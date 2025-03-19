var deportes = {}
    deportes.conBalon = ["futbol", "baloncesto", "balonmano"],
    deportes.sinBalon = ["natacion", "atletismo", "ciclismo"];


var persona = {}
    persona.nombre ="cesar",
    persona.edad = 25,
    persona.estudios = "desarrollador de software"

// var saludar = {}
// saludar.español = [function(){
//     return "hola"
// }]
// saludar.ingles = [function(){
//     return "hello"
// }]

var mascotas = { 
    animal: "perro", 
    raza: "labrador", 
    amistosos: true, 
    dueño: "cesar", 
    info: function(){console.log("mi perro es una " + this.raza)} };


console.log(deportes);
console.log(persona);
// console.log(saludar.ingles);
mascotas.info();
