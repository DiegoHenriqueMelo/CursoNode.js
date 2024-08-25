import chalk from "chalk"

const nota = Math.floor(Math.random()*10)

if(nota >=8){
    console.log(chalk.blue(`Sua nota foi: ${nota}`))
    console.log(chalk.green.bold("Parabéns! Você passou de ano"))
    setTimeout(
        console.clear,
        2000
    )
}else{
    console.log(chalk.blue(`Sua nota foi: ${nota}`))
    console.log(chalk.red("Infelizmente você foi reprovado!"))
    setTimeout(
        console.clear,
        2000
    )
}