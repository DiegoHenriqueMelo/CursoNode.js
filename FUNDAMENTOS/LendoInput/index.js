const readline = require("readline").createInterface({
    input: process.stdin,
    output:  process.stdout
})

readline.question("Qual o seu time de futebol? ", (time) =>{
    if(time === "São Paulo"){
        console.log("Parabéns, sábia escolha")
    }else(
        console.log("Agora você é São Paulino!")
    )
    setTimeout(console.clear, 2000)
    readline.close()
})