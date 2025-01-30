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

module.exports = tienenMismaLongitud;