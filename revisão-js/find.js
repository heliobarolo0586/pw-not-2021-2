const nums = [15, 79, 78, 35, 5, 784, 5, 0, -1, 12]

//Encontrar o primeiro número negativo presente no vetor
const primeiroNeg = nums.find(x => x < 0)
console.log({primeiroNeg})

/*
find() retorna o primeiro elemento que for true.
*/

