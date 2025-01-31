
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:


function esVocal2 (letra){
  if (letra.length !== 1) return "dato incorrecto";
  else return "es vocal";

}

console.log(esVocal2(2))

  module.exports = esVocal2;
