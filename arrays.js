/*
Task 1: Grocery Store Restock 🛒🍎

You manage a grocery store. The array `inventory` shows the items currently in stock. 

1. Add "Oranges" and "Bananas" to the inventory.
2. Remove the first item from the array.
3. Print the updated inventory.

Array:
const inventory = ["Apples", "Bread", "Milk", "Eggs"];

Expected Output:
- Updated inventory
*/

// ✍️ Solve it here ✍️

const inventory = ["Apples", "Bread", "Milk", "Eggs"];
inventory.push("Orenges" , "Bananas")
inventory.shift()
console.log(inventory)



/*
Task 2: Student Attendance Checker 📚✅

You are a teacher tracking attendance. Use the `students` array to check if specific students are present.

1. Write a function called `isPresent` that takes a student's name as input.
2. Use an if statement to check if the name exists in the `students` array.
   - If present, return "[name] is present."
   - If not present, return "[name] is absent."

Array:
const students = ["Ali", "Fatima", "Hassan", "Layla"];

Example:
Input: isPresent("Ali")
Output: "Ali is present."
*/

// ✍️ Write your function here ✍️


function isPresent(namE){
  const students = ["Ali", "Fatima", "Hassan", "Layla"];
  for(let i = 0; i < students.length; i++){
    if(students[i].toLowerCase() == namE){
      return `${namE} is Present`
    }

  }
  return  `${namE} is Absent`
}
let studntName = prompt("Enter the student Name:")
console.log(isPresent(studntName.toLowerCase()))




/*
Task 3: Top Scorers Leaderboard 🏆⚽

You are creating a leaderboard for a soccer game. The array `topScorers` contains the names of players and their scores.

1. Write a function called `updateScore` that takes a player's name and a score to add. If the player exists in the leaderboard, 
add the score to their total. If not, add the player to the array with the given score.
2. Write another function called `printLeaderboard` that sorts the leaderboard in descending order of scores and prints it.

Array:
const topScorers = [
  { name: "Messi", score: 5 },
  { name: "Ronaldo", score: 3 },
  { name: "Neymar", score: 4 }
];

Example:
Input: updateScore("Ronaldo", 2)
Output: Sorted leaderboard with updated scores
*/

// ✍️ Write your functions here ✍️
function updateScore(name, score){
  const topScores = [
    { name: "Messi", score: 5 },
    { name: "Ronaldo", score: 3 },
    { name: "Neymar", score: 4 }
  ];
  let plyers = false;

  for(let i = 0; i < topScores.length; i++){


    if(name.toLowerCase() === topScores[i].name.toLowerCase()){
      topScores[i].score +=score;
      plyers =true;
      break;

    }
  
  }
  if(!plyers){
  topScores.push({name,score})
  }
  return topScores;
}
function printLeaderboard(name,score){
const updated = updateScore(name, score)

return updated.slice().reverse();

}
let Pname = prompt("Enter the name of the player?")
let pScore = Number(prompt ("Enter the new score?"))
console.log(printLeaderboard(Pname, pScore))





/*
STRETCH TASK: **The Ultimate Treasure Hunt** 🗺️💎🏴‍☠️

You are a legendary adventurer searching for the ultimate treasure! 
The treasure is hidden in a remote island, and you have a map with a series 
of clues stored in arrays. Your task is to navigate through the clues, 
decode them, and uncover the treasure.

Here’s the plan:

1. **Clue Checkpoint**:
   - Write a function called `findClue` that takes a `clues` array and a clue name (string).
   - Check if the clue exists in the array:
     - If it exists, return "Clue [name] found!"
     - If it doesn’t exist, return "Clue [name] is missing, search again!"

2. **Decipher Hidden Messages**:
   - Each clue is a scrambled message stored in the `clueMessages` array.
   - Write a function called `decipherMessage` that uses a loop to reverse each message in the `clueMessages` array and return the updated array.

3. **Follow the Treasure Map**:
   - You are given an array of steps to reach the treasure: `treasureMapSteps`.
   - Write a function called `followSteps` that:
     - Uses a loop to log each step in the journey.
     - Tracks your current position in the array.
     - Stops if the step says "Danger" and logs: "Stopped at danger. Cannot continue."

4. **Final Treasure Hunt**:
   - Use all the above functions to:
     - Check if all the clues exist.
     - Decipher the messages.
     - Follow the map.
     - If all clues are found, all steps are completed without danger, and the final step is "Treasure," log:
       "Congratulations! You found the ultimate treasure!"
     - Otherwise, log: "The treasure remains hidden. Try again!"

---

### Input Data

const clues = ["Map", "Compass", "Key", "Shovel"];
const clueMessages = ["ppaM", "ssapmoC", "yeK", "levohS"]; // scrambled clues
const treasureMapSteps = ["Start at the beach", "Cross the forest", "Climb the mountain", "Danger", "Treasure"];

---

### Example Usage

findClue(clues, "Map");
// Output: "Clue Map found!"

decipherMessage(clueMessages);
// Output: ["Map", "Compass", "Key", "Shovel"]

followSteps(treasureMapSteps);
// Output:
// "Step 1: Start at the beach"
// "Step 2: Cross the forest"
// "Step 3: Climb the mountain"
// "Stopped at danger. Cannot continue."

Final Output:
- "The treasure remains hidden. Try again!" (if danger is encountered)
- "Congratulations! You found the ultimate treasure!" (if all conditions are met)



*/
function findClue(clues, clueName){
  clueName = clueName.toLowerCase();

  for(let clue of clues){
    if(clue.toLowerCase() === clueName ){
      return `Clue ${clueName} found`
    }
    
  }
 
    return `Clue ${clueName} is missing, search again! `
 }


function decipherMessage(clueMessages){
 
  for(let i = clueMessages.length - 1; i >=0; i--){
    
    clueMessages[i] = clueMessages[i].split('').reverse().join('');
  } 
  return clueMessages

}

function followSteps(treasureMapSteps){
  let currentstep = 1;
  for(let step of treasureMapSteps){
    let userStep = prompt(`Current Step: ${step}. Do you want to proceed? (Type 'yes' to continue)`);
    
    if (userStep.toLowerCase() === "yes") {
      console.log(`You are step ${currentstep} : ${step}`)
      currentstep ++;
   }else if (step === "Danger") {
      console.log("Stopped at danger. Cannot continue.");
      return false;  
    }
   

  }
  if (treasureMapSteps[treasureMapSteps.length - 1] === "Treasure") {
    return true
  }

}



function FinalHunt(){
  const clues = ["Map", "Compass", "Key", "Shovel"]
  const clueMessages = ["ppaM", "ssapmoC", "yeK", "levohS"];
  const treasureMapSteps = ["Start at the beach", "Cross the forest", "Climb the mountain", "Danger", "Treasure"];

  let allCluesFound = true;
  for(let clue of clues){
    let clueName = prompt(`Enter the clue name for: ${clue}`)
    if(!findClue(clue, clueName)){
      console.log(`Clue ${clueName} not found. Try again!`);
      allCluesFound = false
      break
    }
  }
  if(allCluesFound){

  let decipherdMessages = decipherMessage(clueMessages);  
  console.log("Deciphered Messages: ", decipherdMessages.join(", "));

  }
  if(allCluesFound){

  let stepsCompleted = followSteps(treasureMapSteps);
  if(stepsCompleted){
    console.log("Congratulations! You found the ultimate treasure!");
  } else {
    console.log("The treasure remains hidden. Try again!");
  }
}
}

FinalHunt();
