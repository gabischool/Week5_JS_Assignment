/* ============================================================
   Week 5 — Arrays & Objects
   ------------------------------------------------------------
   Open the browser console to see your output.
   ============================================================ */


/* ------------------------------------------------------------
   Task 1: Array Basics 📋

   Start with this array:
   ------------------------------------------------------------ */

const fruits = ["apple", "banana", "orange"];

// 1. Add "mango" to the end
// 2. Remove the FIRST item (.shift())
// 3. Log the final array
// 4. Log fruits.length

// ✍️ Solve it here ✍️

fruits.push("mango")
console.log(fruits)

// 2. Remove the FIRST item (.shift())
fruits.shift()
console.log(fruits)
//  Log fruits.length

console.log(fruits.length)

/* ------------------------------------------------------------
   Task 2: forEach Loop 🔁

   Use .forEach() to log each city as:
     "1. Mogadishu"
     "2. Hargeisa"
     "3. Bosaso"
     "4. Garowe"

   Hint: the forEach callback gets (item, index) as arguments.
   ------------------------------------------------------------ */

const cities = ["Mogadishu", "Hargeisa", "Bosaso", "Garowe"];

// ✍️ Solve it here ✍️


let city = cities.forEach((item, index) =>{
   console.log(item)
})


/* ------------------------------------------------------------
   Task 3: Build an Object 👤

   1. Create an object `student` with: name, age, isEnrolled
   2. Log student.name
   3. Update student.age (add 1)
   4. Log the whole student object
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️

let student = {
   name: "Rooble",
   age: 30,
   isEnrolled: true
}
console.log(student.name)
student.age = 20
console.log(student)


/* ------------------------------------------------------------
   Task 4: Array of Objects 🎓

   Use .forEach() to log each student as:
     "Fatuma scored 92"
     "Asha scored 68"
     "Khadija scored 85"
   ------------------------------------------------------------ */

const students = [
  { name: "Fatuma",  score: 92 },
  { name: "Asha",    score: 68 },
  { name: "Khadija", score: 85 }
];

// ✍️ Solve it here ✍️

students.forEach((student) =>{
   console.log(student)
})



/* ------------------------------------------------------------
   🚀 STRETCH (optional)

   Use .forEach() to log only the names of students
   with a score >= 70.
   ------------------------------------------------------------ */

// ✍️ Stretch: solve it here ✍️

let studentLists = [
   {name: "Rooble", score: 80},
   {name: "Fadumo", score: 89},
   {name: "Ahmed", score: 90},
   {name: "nur", score: 20},
]

studentLists.forEach((student) =>{
   if(student.score >= 80){
      console.log(student.name)
   }
})

console.log("first")