const inquire = require("inquirer");

inquire
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    let media = (parseInt(answers.p1)+parseInt(answers.p2)) / 2
    if(media >=8){
        console.log("Passou!")
    }else console.log("Reprovou!")

  })
  .catch((err) => console.log(err));
