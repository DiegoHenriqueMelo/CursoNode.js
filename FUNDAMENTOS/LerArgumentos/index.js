console.log(process.argv)

const ARGS = process.argv.slice(2)

console.log(ARGS)

const NOME = ARGS[0].split("=")[1]

console.log(NOME)

const IDADE = ARGS[1].split("=")[1]

console.log(IDADE)