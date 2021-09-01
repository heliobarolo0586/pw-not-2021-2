const frutas = ['banana', 'maça', 'abacate', 'pera','laranja']

const frutas2 = []

for (let f of frutas) {
    frutas2.push(f.toUpperCase())
}

console.log(frutas2)

let frutas3 = frutas.map(elemento => elemento.toUpperCase())
console.log(frutas3)

//Gerar um novo vetor que contenha os números elevados ao quadrado
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let quadrados = nums.map(n => n ** 2)
console.log(quadrados)


let itensFrutas = frutas.map(f => '<li>' + f + '</li>')
console.log(itensFrutas)
