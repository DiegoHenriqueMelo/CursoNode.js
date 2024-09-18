const config = require("./services/config");
const somaNum = require("./services/teste")

async function main() {
  console.log("Olá, meu nome é sistema");
  //   for( let i = 0; i<10;i++){
  //     products.getFullName(Math.floor(Math.random()*500), `Item=${i+1}`)
  //     products.getProductLabel(`Item=${i+1}`)
  //   }

console.log(config.production)
console.log(somaNum(5,5))
}

main();
