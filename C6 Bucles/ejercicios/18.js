function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

let resultado = 1;

for (let i = 1; i<=b; i++){
  resultado *= i
}

return resultado
  
}


console.log(productoEntreNúmeros(1,5))
console.log(productoEntreNúmeros(3,6))


module.exports = productoEntreNúmeros;