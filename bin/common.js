export const initReactAdminApp = [
  {
    type: "input",
    name: "projectName",
    message: "Module name:",
    default: "my-admin-app-example",
    validate: function (input) {
      if (input.match(/^([a-z][a-z0-9_-]+)+$/)) return true;
      else return "Please enter a valid module name";
    },
  },
  {
    type: "rawlist",
    name: "packageManager",
    choices: ["yarn", "npm", "pnpm"],
    message: "Which package manager would you ❤️  to use?",
    default: ["yarn"],
  },
];
