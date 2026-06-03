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
fruits.shift()
console.log(`"The final array is",${fruits[fruits.length-1]}`)
console.log(fruits[fruits.length])


/* ------------------------------------------------------------
   Task 2: forEach Loop 🔁

   Use .forEach() to log each city as:
     "1. Mogadishu"
     "2. Hargeisa"
     "3. Bosaso"
     "4. Garowe"

   Hint: the forEach callback gets (item, index) as arguments.
   ------------------------------------------------------------ */



// ✍️ Solve it here ✍️

const cities = ["Mogadishu", "Hargeisa", "Bosaso", "Garowe"];

cities.forEach((cities,index) => {
   console.log(`${index + 1} ${cities}`)
   
})


/* ------------------------------------------------------------
   Task 3: Build an Object 👤

   1. Create an object `student` with: name, age, isEnrolled
   2. Log student.name
   3. Update student.age (add 1)
   4. Log the whole student object
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️

const student ={

   name: "Mahad",
   age: 20,
   isEnrolled: true

}
student.age = student.age + 1

console.log(student.name)
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

students.forEach((students) => {
   console.log(`${students.name} scored ${students.score}`)
}

)



/* ------------------------------------------------------------
   🚀 STRETCH (optional)

   Use .forEach() to log only the names of students
   with a score >= 70.
   ------------------------------------------------------------ */

// ✍️ Stretch: solve it here ✍️

students.forEach((student) => {
   if (student.score >= 70) {
      console.log(student.name)
   }
}

)