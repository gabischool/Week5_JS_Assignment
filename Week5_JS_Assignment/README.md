# Week 5 — Arrays & Objects 🗂️

You're going to manage a list of students. By the end you'll have practiced everything you'll do every single day in real code: **arrays**, **objects**, and **arrays of objects**.

## Setup

1. **Fork** this repo to your account.
2. Clone it locally and open in your editor.
3. Open `index.html` in the browser. Open the console (F12).
4. Edit `challenges.js`. Refresh the page to see new output.

## Tasks

### Task 1 — Array Basics 📋

Start with this array:

```js
const fruits = ["apple", "banana", "orange"];
```

Do the following, **in order**:
1. Add `"mango"` to the end of the array
2. Remove the **first** item from the array (use `.shift()`)
3. Log the final array
4. Log how many items are in it (use `.length`)

**Expected output:**
```
[ 'banana', 'orange', 'mango' ]
3
```

---

### Task 2 — forEach Loop 🔁

Given this array:

```js
const cities = ["Mogadishu", "Hargeisa", "Bosaso", "Garowe"];
```

Use `.forEach()` to log each city in this format:
```
1. Mogadishu
2. Hargeisa
3. Bosaso
4. Garowe
```

> 💡 The forEach callback can take a **second argument** which is the index. Look it up if you forget the syntax.

---

### Task 3 — Build an Object 👤

Create an object called `student` with these properties:
- `name` (string) — your name
- `age` (number) — any number
- `isEnrolled` (boolean) — set to `true`

Then:
1. Log the student's name using **dot notation** (`student.name`)
2. Update the `age` property to be 1 higher
3. Log the whole object

---

### Task 4 — Array of Objects 🎓

Given this array:

```js
const students = [
  { name: "Fatuma",  score: 92 },
  { name: "Asha",    score: 68 },
  { name: "Khadija", score: 85 }
];
```

Use `.forEach()` to log a line for each student:

```
Fatuma scored 92
Asha scored 68
Khadija scored 85
```

> 🎯 Why this matters: this is exactly the shape of data every API will give you. Lock it in now.

---

## ✅ When you're done

- All 4 tasks log the expected output
- You used `.forEach()` (not `for` loops)
- You used `const` for things that don't change, `let` only if needed

## Submitting

```bash
git add .
git commit -m "Complete Week 5 arrays & objects assignment"
git push
```

Submit your repo link.

## 🚀 Stretch (optional)

Add a Task 5: Take the `students` array from Task 4 and use `.forEach()` to log only the names of students who scored **70 or higher**. (We'll learn `.filter()` next week to do this more elegantly!)
