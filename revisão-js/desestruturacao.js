let carros = ['celta', 'Gol Quadrado', "Chevette"]

//Desestruturação total do vetor 
let [a, b, c] = carros

console.log(a)
console.log(b)
console.log(c)

// Desestrturação parcial 
let [m, n] = carros

console.log('----------------------------------')
console.log(m, n)

let [x, , z] = carros

console.log('-----------------------------------')

console.log(x)
console.log(z)
console.log(carros)

let [, i, j] = carros

console.log('-----------------------------------')

console.log(i)
console.log(j)

//Objeto
let veiculo = {
    marca: "Volkswagen",
    modelo: 'Fusca',
    cor: 'preto',
    ano: 1969
}

//Desestruturação total de um objeto
//1° regra: as variáveis devem ter o mesmo nome das propriedades
//2° regra: a ordem não importa

let { cor, modelo, ano, marca } = veiculo

console.log("---------------------------------------")
console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

//Para fazer a desestruturação parcial, basta criar.
//Variáveis correspondentes apenas às propriedades de interesse.

