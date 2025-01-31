// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  return (num**2)
}

console.log(elevarAlCuadrado(2))

function elevarAlCuadrado2(num){
  return Math.pow(num,2)
}

console.log(elevarAlCuadrado2(5))
module.exports = elevarAlCuadrado;
