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
//index
//add new items at the beginning 
inventory.unshift("Oranges", "Bananas");
// console.log(inventory)

// add new item at the end 
inventory.push("egg");
// console.log(inventory)


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
const students = ["Ali", "Fatima", "Hassan", "Layla"];
function isPresent(name)
{
  if(students.includes(name)){
    return `${name} is present`
  }else{
    return `${name} is absent`
  }
} console.log(isPresent("Layla"))








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


function updateScore(Messi,Ronaldo, Neymar,)
{
  if(topScorers.includes(Messi)){
    return `${Messi} is present`
  }else{
    return `${Messi} is absent`
  }

  }

function printLeaderboard(){
  topScorers.sort((a,b) => b.score - a.score)
  console.log(topScorers)

}