console.clear()
const test1 = [2, 1, 3, 5, 3, 2]
const test2 = [2, 4, 3, 5, 1]

function firstDuplicate (a) {
  const valor = {}
  for (const v of a) {
    if (valor[v]) return v
    valor[v] = v
  }

  return -1
}

console.log('a = [2, 1, 3, 5, 3, 2] é igual a ' + firstDuplicate(test1))
console.log('a = [2, 4, 3, 5, 1] é igual a ' + firstDuplicate(test2))
