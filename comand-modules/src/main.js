const config = require("./services/config");
const somaNum = require("./services/teste");
const dataBase = require("./services/database")

async function main() {
  console.log("Olá, meu nome é sistema");
  //   for( let i = 0; i<10;i++){
  //     products.getFullName(Math.floor(Math.random()*500), `Item=${i+1}`)
  //     products.getProductLabel(`Item=${i+1}`)
  //   }

  console.log(dataBase.connectToDatabase("Jilozinho"))
  console.log(config.production);
  console.log(`A soma é ${somaNum(5, 5)}`);
  console.log(dataBase.desconnectDataBase("Jilozinho"))
  console.log(dataBase.teste(4,10))
}

main();
