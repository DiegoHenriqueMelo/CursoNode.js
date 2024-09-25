import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(logSymbols.success, chalk.green("teste SUCESSO"));
console.log(logSymbols.error, chalk.red("teste ERRO"));
console.log(logSymbols.info, chalk.blue("teste INFO"));
console.log(logSymbols.warning, chalk.yellow("teste WARNING"));
