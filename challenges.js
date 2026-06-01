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

//
fruits.push("mango");
fruits.shift();
console.log(fruits);
console.log(fruits.length);



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

cities.forEach((city, index) => {
  console.log(`${index + 1}. ${city}`);
});



/* ------------------------------------------------------------
   Task 3: Build an Object 👤

   1. Create an object `student` with: name, age, isEnrolled
   2. Log student.name
   3. Update student.age (add 1)
   4. Log the whole student object
   ------------------------------------------------------------ */
const student = {
   name: "Abdi",
   age:30,
   isEnrolled: true 

}

console.log(student.name);
student.age += 1;
console.log(student);



/* ------------------------------------------------------------
   Task 4: Array of Objects 🎓

   Use .forEach() to log each student as:
     "Fatuma scored 92"
     "Asha scored 68"
     "Khadija scored 85"
   ------------------------------------------------------------ */


const students = [
   { name: "fatuma", score: 92 },
   { name: "Asha", score: 68 },
    { name: "khadija", score: 85 },

]
students.forEach((student) => {
  console.log(`${student.name} scored ${student.score}`);
});




/* ------------------------------------------------------------
   🚀 STRETCH (optional)

   Use .forEach() to log only the names of students
   with a score >= 70.
   ------------------------------------------------------------ */

   students.forEach((student=>{
      if(student.score >= 70)
         console.log(student.name);

   }));
