const API_KEY = "63f17b2499fc3494f491265d";
const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currencyConverter = () => {
  https.get(URL, (response) => {
    let serverData = "";
    response.on("data", (data) => {
      serverData += data;
    });

    response.on("end", () => {
      const { result, base_code, conversion_rates } = JSON.parse(serverData);

      rl.question("Please enter amount in USD: ", (amount) => {
        rl.question(
          "Please enter the amount you want to convert:",
          (currency) => {
            let currencyToUppercase = currency.toUpperCase();
            if (conversion_rates[currencyToUppercase]) {
              let answer =
                Number(amount) * conversion_rates[currencyToUppercase];
              console.log(
                chalk.green(`${amount} USD is nearly ${answer.toFixed(2)}`)
              );
              rl.close();
            } else {
              console.log(
                chalk.red("The currency you have entered is not exist")
              );
              rl.close();
            }
          }
        );
      });
      //       console.log("API result: ", result);
    });
  });
};

currencyConverter();
