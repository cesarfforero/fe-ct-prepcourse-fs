function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  return num < 90;
}

console.log(menosQueNoventa(5));
console.log(menosQueNoventa(91));
console.log(menosQueNoventa(100));

function menosQueNoventa2(num){
  if (num < 90) return true;
  else return false
}

console.log(menosQueNoventa2(89.9))

module.exports = menosQueNoventa;