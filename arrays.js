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

// Array:
const inventory = ["Apples", "Bread", "Milk", "Eggs"];
// 1. Add "Oranges" and "Bananas" to the inventory.
inventory.push("Oranges", "Bananas");
// 2. Remove the first item from the array.
inventory.shift();
// 3. Print the updated inventory.
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

// Array: List of students
const students = ["Ali", "Fatima", "Hassan", "Layla"];
// 1. Write a function called `isPresent` that takes a student's name as input.
function isPresent(name) {
  // 2. Use an if statement to check if the name exists in the `students` array.
  if (students.includes(name)) {
    return `${name} is present.`; // - If present, return "[name] is present."
   } else {
    return `${name} is absent.`; // - If not present, return "[name] is absent."

  }
}
console.log(isPresent("Ali"));
console.log(isPresent("Sarah"));
  
  // Through the researches I discovered that to solve this task you can use the following Methods;
  // .includes() method & indexOf() method.
  /* And/or for loop
  function isPresent(name) {
  const students = ["Ali", "Fatima", "Hassan", "Layla"];
  for (let i = 0; i < students.length; i++) {
    if (students[i] === name) {
      return `${name} is present.`;
    } else {
  return `${name} is absent.`;
}
  }
  }
console.log(isPresent("Ali"));
console.log(isPresent("Sarah"));*/
  


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

// Array of objects:
const topScorers = [
  { name: "Messi", score: 5 },
  { name: "Ronaldo", score: 3 },
  { name: "Neymar", score: 4 }
];

// 1. Write a function called `updateScore`.
// that takes a player's name and a score to add.
function updateScore(playerName, scoreToAdd) {
  // Loop through the array
  for (let i = 0; i < topScorers.length; i++) {
    // Check If the player exists in the leaderboard
    if (topScorers[i].name === playerName) {
      // Add the score to their total. if the player is found.
      topScorers[i].score += scoreToAdd;
      return; // Exit the function once the score is updated
    }
  }
  
  // If player is not found, add the player to the array with the given score.
  topScorers.push({ name: playerName, score: scoreToAdd });
}

// 2. Write another function called `printLeaderboard`.
function printLeaderboard() {
  // Sort the leaderboard in descending order based on score
  topScorers.sort((a, b) => b.score - a.score); // Sort by score in descending order
  // Loop through the leaderboard and print each player's name and score
  for (let i = 0; i < topScorers.length; i++) {
    console.log(`${i + 1}. ${topScorers[i].name}: ${topScorers[i].score}`);

  }
}

// Test the functions
updateScore("Ronaldo", 2); // Add 2 points to Ronaldo's score
updateScore("Nuno", 6);  // Add Nuno to the leaderboard with 6 points
updateScore("Ronaldo", 2); // Add 2 points to Ronaldo's score
updateScore("Messi", 1); // Add 1 point to Messi's score

// Print the leaderboard
printLeaderboard();


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
