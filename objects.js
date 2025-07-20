/* 
Task 1: Gamer Profile Manager 🎮 🎮 🎮 🎮

You are creating a system to manage a gamer's profile. 

Steps:
1. Create an object named `gamerProfile` with the following properties:
   - `username` (string): The gamer's username.
   - `level` (number): The gamer's level.
   - `isOnline` (boolean): Whether the gamer is currently online.

2. Write a function `updateOnlineStatus` that:
   - Takes the `gamerProfile` object and a boolean `status` as arguments.
   - Updates the `isOnline` property based on the `status`.
   - Logs: "[username] is now online." or "[username] is now offline."

Example:
Input:
const gamerProfile = {
  username: "ShadowSlayer",
  level: 5,
  isOnline: false
};

updateOnlineStatus(gamerProfile, true);

Expected Output:
"ShadowSlayer is now online."
*/

// ✍️ Solve it here ✍️
// Step 1: Create the gamerProfile object
const gamerProfile = {
  username: "ShadowSlayer",
  level: 5,
  isOnline: false,
};

// Step 2: Define the function to update online status
function updateOnlineStatus(profile, status) {
  profile.isOnline = status;

  if (status) {
    console.log(`${profile.username} is now online.`);
  } else {
    console.log(`${profile.username} is now offline.`);
  }
}

// Step 3: Call the function with a new status
updateOnlineStatus(gamerProfile, true);
updateOnlineStatus(gamerProfile, false);

/*
Task 2: Dress Inventory Checker 👗 👗 👗 👗 👗

You are helping a fashion designer manage their dress inventory.

Steps:
1. Create an object named `dress` with the following properties:
   - `name` (string): Name of the dress.
   - `size` (string): Size of the dress.
   - `inStock` (boolean): Whether the dress is available.

2. Write a function `checkAvailability` that:
   - Takes the `dress` object as an argument.
   - Logs: "[name] is available in size [size]." if the dress is in stock.
   - Logs: "[name] is out of stock." if the dress is not available.

Example:
Input:
const dress = {
  name: "Evening Gown",
  size: "M",
  inStock: true
};

checkAvailability(dress);

Expected Output:
"Evening Gown is available in size M."
*/

// ✍️ Solve it here ✍️

// Step 1: Create the dress object
const dress = {
  name: "white t-shirt",
  size: "M",
  inStock: true,
};

// Step 2: Define the function to check availability
function checkAvailability(dressObj) {
  if (dressObj.inStock) {
    console.log(`${dressObj.name} is available in size ${dressObj.size}.`);
  } else {
    console.log(`${dressObj.name} is out of stock.`);
  }
}

// Step 3: Call the function
checkAvailability(dress);

/*
Task 3: Supercar Feature Adder 🚗 🚗 🚗 🚗

You are building a configurator for a supercar. 

Steps:
1. Create an object named `supercar` with the following properties:
   - `model` (string): The car's model.
   - `price` (number): The base price.
   - `features` (object): An object with a `color` property.

2. Write a function `addFeature` that:
   - Takes the `supercar` object and a feature name (string) as arguments.
   - Adds the feature to the `features` object and sets it to `true`.
   - Logs: "[featureName] has been added to [model]."

3. Use a **for...in loop** to log all the features of the `supercar` object.

Example:
Input:
const supercar = {
  model: "Ferrari SF90",
  price: 500000,
  features: {
    color: "Red"
  }
};

addFeature(supercar, "turbo");

Expected Output:
"Turbo has been added to Ferrari SF90."
Features:
- color: Red
- turbo: true
*/

// ✍️ Solve it here ✍️
const supercar = {
  model: "Ferrari SF90",
  price: 500000,
  features: {
    color: "Red",
  },
};

// Step 2: Define the addFeature function
function addFeature(car, featureName) {
  car.features[featureName] = true; // Add new feature
  console.log(`${capitalize(featureName)} has been added to ${car.model}.`);
}

// Optional helper to capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Step 3: Call the function to add a feature
addFeature(supercar, "turbo");

// Step 4: Use for...in to log all features
console.log("Features:");
for (let key in supercar.features) {
  console.log(`- ${key}: ${supercar.features[key]}`);
}
