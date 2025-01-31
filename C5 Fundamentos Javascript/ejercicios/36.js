// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
  // La función numeroRandom debe generar un número al azar entre 0 y 1 y retornarlo.
  // Tu código:

  return Math.random()
}

console.log(numeroRandom())


function numeroRandom2 (min, max){

return Math.random() * (max - min) + min

}

console.log(numeroRandom2(3,2))
module.exports = numeroRandom;

