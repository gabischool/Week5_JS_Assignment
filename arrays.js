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


const inventory =["Apples","Bread","Milk","Eggs"];
inventory.push("Orange","Banana")
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


const student= {ali: true,     
                fatima: false,  
                 hassan: true,    
                layla: false
}
      Object.entries(student).forEach(([name, isPresent]) => {
  if (isPresent) {

    console.log( name,"is present");
   } else 
   {
      console.log(name ," is Absent");
    }


 });
  
/*
Task 3: Top Scorers Leaderboard 🏆⚽

You are creating a leaderboard for a soccer game. The array `topScorers` contains the names of players and their scores.

1. Write a function called `updateScore` that takes a player's name and a score to add. If the player exists in the leaderboard, add the score to their total. If not, add the player to the array with the given score.
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


const topScorers = [
  { name: "Messi", score: 5 },
  { name: "Ronaldo", score: 3 },
  { name: "Neymar", score: 4 },
];

function updateScore(playerName, additionalScore) {
  const foundPlayer = topScorers.find(scorer => scorer.name === playerName);
  if (foundPlayer) {
    foundPlayer.score += additionalScore;
  } else {
    topScorers.push({ name: playerName, score: additionalScore });
  }
}

function printLeaderboard() {
  const sortedScorers = [...topScorers].sort((a, b) => b.score - a.score);
  sortedScorers.forEach(scorer => {
    console.log(`${scorer.name}: ${scorer.score}`);
  });
}

// Example usage:
updateScore("Ronaldo", 2); // Adds 2 to Ronaldo's score
updateScore("Mbappe", 6);  // Adds Mbappe to the leaderboard with a score of 6
printLeaderboard();        // Prints the sorted leaderboard



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

// */
const clues = ["Map", "Compass", "Key", "Shovel"];
const clueMessages = ["ppaM", "ssapmoC", "yeK", "levohS"];
const treasureMapSteps = ["Start at the beach", "Cross the forest", "Climb the mountain", "Danger", "Treasure"];

function findClue(clues, clueName) {
  return clues.includes(clueName);
}

function decipherMessage(clueMessages) {
  return clueMessages.map(message => message.split('').reverse().join(''));
}

function followSteps(treasureMapSteps) {
  for (let i = 0; i < treasureMapSteps.length; i++) {
    console.log(`Step ${i + 1}: ${treasureMapSteps[i]}`);
    if (treasureMapSteps[i] === "Danger") {
      console.log("Stopped at danger. Cannot continue.");
      break;
    }
  }
}

function finalTreasureHunt() {
  let allCluesFound = true;
  for (const clue of clues) {
    if (!findClue(clues, clue)) {
      allCluesFound = false;
      break;
    }
  }

  const decipheredMessages = decipherMessage(clueMessages);
  let messagesMatch = true;
  for (let i = 0; i < clues.length; i++) {
    if (clues[i] !== decipheredMessages[i]) {
      messagesMatch = false;
      break;
    }
  }

  followSteps(treasureMapSteps);
  let reachedTreasure = treasureMapSteps[treasureMapSteps.length - 1] === "Treasure";

  if (allCluesFound && messagesMatch && reachedTreasure) {
    console.log("Congratulations! You found the ultimate treasure!");
  } else {
    console.log("The treasure remains hidden. Try again!");
  }
}

// Test the functions
console.log(findClue(clues, "Map")); // "Clue Map found!"
console.log(decipherMessage(clueMessages)); // ["Map", "Compass", "Key", "Shovel"]
followSteps(treasureMapSteps); 
finalTreasureHunt();