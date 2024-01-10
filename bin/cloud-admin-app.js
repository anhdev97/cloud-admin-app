import inquirer from "inquirer";
import { initReactAdminApp } from "./common.js";
import { program } from "commander";

//add command init
program
  .command("init")
  .description("Create admin app")
  .action(() => {
    inquirer.prompt(initReactAdminApp).then((answers) => {
      console.log(answers);
    });
  });

program.parse(process.argv);
