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

// Task 1

function userName(name, callback) {
  return callback(name)
}


function sendMessage (name) {
  console.log(`Welcome, ${name}`);
}


userName("Omar", sendMessage)


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
// Task 2

function checkTemperature(tempValue, callback) {
 callback(tempValue)
}

function tempEvaluate(temperature) {
  
  if(temperature > 30) {
    console.log(`${temperature}°C is Hot.`)
  } else if(temperature >= 15 && temperature <= 30) {
    console.log(`${temperature}°C is Warm.`)
  } else {
    console.log(`${temperature}°C is Cold.`)
  }
}


checkTemperature(30, tempEvaluate)


/*
Task 3: Quiz Evaluator 📚📚📚📚

You are building a quiz system. Write a function called `evaluateAnswer` that:
1. Takes a question, a correct answer, and a callback function as arguments.
2. The callback function should compare the user's answer with the correct answer and log whether the answer is correct or not.

Steps:
- Create the callback function to evaluate:
  - If the user's answer matches the correct answer, log: "Correct!"
  - Otherwise, log: "Incorrect. The correct answer is [correctAnswer]."

Example:
Input:
evaluateAnswer("What is 5 + 5?", "10", TheCallBackFunction);

Expected Output:
- If user's input is "10": "Correct!"
- If user's input is "15": "Incorrect. The correct answer is 10."
*/

// ✍️ Solve it here ✍️
// Task 3 

function evaluateAnswer (question, correctAnswer, callback) {
  const userAnswer = "10"
  return callback (userAnswer, correctAnswer)
 
}

function callback (userAnswer, corretAnswer) {
  if(userAnswer === corretAnswer) {
    console.log("Correct!");
  } else {
    console.log(`Incorrect. The correct answer is ${corretAnswer}`);
  }
}
 



evaluateAnswer ("What is 5 + 5?", "10", callback)


