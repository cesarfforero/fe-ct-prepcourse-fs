function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
  return x===y;
}
console.log(sonIguales(5,5));
console.log(sonIguales("5",5));
console.log(sonIguales("hola mundo","hola mundo"));

function sonIguales2 (x,y){
  if (x===y) return true;
  else return false
}

console.log(sonIguales2(5,5))

module.exports = sonIguales;