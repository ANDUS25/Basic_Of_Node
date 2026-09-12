import chalk from "chalk";
import https from "https";

const generateJoke = () => {
  https.get("https://official-joke-api.appspot.com/random_joke", (response) => {
    response.on("data", (data) => {
      const { type, setup, punchline } = JSON.parse(data);
      console.log(chalk.bold.yellow(`Type of Joke: ${type}`));
      console.log(chalk.green(`The setup: ${setup}`));
      console.log(chalk.red(`The punchline: ${punchline}`));
    });
  });
};

generateJoke();
