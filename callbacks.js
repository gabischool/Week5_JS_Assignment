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


function sendMessage(userName, cb){
  return cb(userName)

}
function CallBack(name){
  
  return `Welcome ${name}`
}
let name= prompt("Enter your name")
console.log( sendMessage(name, CallBack))

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

function checkTemperature (tempValue, cb){
  return cb(tempValue)

}
function temperatureChecker(value){
  if(value >= 30){
    return `${value}\u00B0C Hot`

  }else if(value < 30 && value >= 15){
    return `${value}\u00B0C Warm`

  }else { 
    return`${value}\u00B0C Cold`

  }
}
let temp = Number(prompt("Enter the temperature"))
console.log(checkTemperature(temp, temperatureChecker))


/*
STRETCH: Task 3: Quiz Evaluator 📚📚📚📚

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

function evaluateAnswer(question, answr, cb){
  return cb(question, answr)
}
function checkAnswer(question, answr){
  if (question === answr){
    return`${answr} is correct`
  }
  else{
    return `${question} is incorrect. and the correct answer is ${answr}`
  }
}
let que  = Number(prompt("what is 5 + 5"))
let ans = 10

console.log(evaluateAnswer(que, ans, checkAnswer))

