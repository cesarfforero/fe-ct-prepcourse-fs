function esTipoDato(valor) {
  return typeof valor;
  
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
}
console.log(esTipoDato(true));


function esTipoDato2(valor){
  return typeof valor
}

console.log(esTipoDato2(5))

module.exports = esTipoDato;