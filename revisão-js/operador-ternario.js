let nota = 7.3
let situacao = ''

/*
if (nota >= 6 ){
    situacao = "Aprovado"
} else {
    situacao = "Reprovado"
}
*/

//console.log(`Nota ${nota}, situacao: ${situacao}`)

//Usando o operador ternario
//condicao ? result 
situacao = nota >= 6 ? 'Aprovado' : 'Reprovado'

console.log(`Nota ${nota}, situacao: ${situacao}`)

let user = 'quest'

let msg = user === 'admin' ? "Pode logar" : 'Não Pode Logar'

console.log(msg)