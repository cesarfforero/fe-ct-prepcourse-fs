function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  return num % 2 !== 0
}

console.log(esImpar(5));

function esImpar2 (num){
  if (num % 2 !==0) return true;
  else return false;
}

console.log(esImpar2(11))

module.exports = esImpar;