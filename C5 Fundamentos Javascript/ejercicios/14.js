function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  return num > 50;
}

console.log(mayorQueCincuenta(51));
console.log(mayorQueCincuenta(49));
console.log(mayorQueCincuenta(20));
console.log(mayorQueCincuenta(52));

module.exports = mayorQueCincuenta;
