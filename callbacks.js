/*
Task 1: Simple Welcome Message 💌💌💌💌

You are building a simple messaging system. Write a function called `sendMessage` that:
1. Takes a user name and a callback function as arguments.
2. The callback function should log a welcome message.

Steps:
- Create the callback function to log: "Welcome, [name]!"

Example:
Input:
sendMessage("Amina", theCallBackFunction);

Expected Output:
- "Welcome, Amina!"
*/

// ✍️ Solve it here ✍️
let sendMessage = (name, callback) => {
  callback(name);
};

let theCallBackFunction = (name) => {
  console.log(`Welcome, ${name}!`);
};

sendMessage("Amina", theCallBackFunction);





/*
Task 2: Temperature Checker 🌡️🌡️🌡️🌡️


You are creating a temperature monitoring system. Write a function called `checkTemperature` that:
1. Takes a temperature value and a callback function as arguments.
2. The callback function should evaluate whether the temperature is "Hot", "Warm", or "Cold" based on the following:
   - "Hot" if the temperature is above 30.
   - "Warm" if the temperature is between 15°C and 30.
   - "Cold" if the temperature is below 15.

Steps:
- Create the callback function to evaluate and log:
  - "[temperature]°C is Hot/Warm/Cold."

Example:
Input:
checkTemperature(35, theCallBackFunction);

Expected Output:
- "35°C is Hot."
- "22°C is Warm."
- "10°C is Cold."
*/

// ✍️ Solve it here ✍️
let checkTemperature = (temperature, callback) => {
  callback(temperature);
};
let temperatureEvaluator = (temperature) => {
  if (temperature > 30) {
    console.log(`${temperature}°C is Hot.`);
  } else if (temperature >= 15 && temperature <= 30) {
    console.log(`${temperature}°C is Warm.`);
  } else {
    console.log(`${temperature}°C is Cold.`);
  }
};

checkTemperature(35, temperatureEvaluator);

// ✍️ Solve it here ✍️

