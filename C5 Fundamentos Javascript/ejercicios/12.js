function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  return str1.length === str2.length;
}

console.log(tienenMismaLongitud("hola","amiguitos"));
console.log(tienenMismaLongitud("5","5"));
console.log(tienenMismaLongitud("soy el mejor", "soy el mejor"));

function tienenMismaLongitud2 (str1,str2){
  if (str1.length === str2.length) return true;
  else return false;
}

console.log(tienenMismaLongitud2("holaa","holaa"))

module.exports = tienenMismaLongitud;