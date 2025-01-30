function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (letra,length !== 1){
    return "dato incorrecto";
  }
  if ("aeiou".includes(letra.tolovercase())){
    return "es vocal";
  }
}

console.log(esVocal("a"));
module.exports = esVocal;
