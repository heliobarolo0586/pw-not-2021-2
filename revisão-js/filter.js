const nums = [31,45,78,94,63,145,4,5]

//Gerar um segundo vetor contendo apenas os números Pares
//do vetor nums

const pares = []

for (let n of nums){
    if (n%2 ===0) pares.push(n)
}

console.log({pares})

const pares2 = nums.filter(i => i % 2 ===0)
console.log({pares2})