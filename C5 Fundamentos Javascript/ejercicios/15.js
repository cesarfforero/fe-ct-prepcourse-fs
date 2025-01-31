function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  return num % 2 === 0;
}

console.log (esPar(14));
console.log (esPar(23));

function esPar2 (num){
  if (num % 2 === 0) return true
  else return false;
}

console.log(esPar2(12))


module.exports = esPar;
