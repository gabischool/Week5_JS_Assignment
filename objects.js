/* 
Task 1: Gamer Profile Manager 🎮 🎮 🎮 🎮

You are creating a system to manage a gamer's profile. 

Steps:
1.⁠ ⁠Create an object named ⁠ gamerProfile ⁠ with the following properties:
   - ⁠ username ⁠ (string): The gamer's username.
   - ⁠ level ⁠ (number): The gamer's level.
   - ⁠ isOnline ⁠ (boolean): Whether the gamer is currently online.

2.⁠ ⁠Write a function ⁠ updateOnlineStatus ⁠ that:
   - Takes the ⁠ gamerProfile ⁠ object and a boolean ⁠ status ⁠ as arguments.
   - Updates the ⁠ isOnline ⁠ property based on the ⁠ status ⁠.
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

// ✍️ Solve it here 

const gamerProfile = {
   username: "ShadowSlayer",
   level : 5,
   isOnline: false
};
   


function updateOnlineStatus(gamerProfile, status){
   gamerProfile.isOnline =status;
      if (status){
         console.log(`⁠${gamerProfile.username} is now online."`);
      }else  
      {
         console.log(`${gamerProfile.username} is now offline.`);
      }
   }



/*
Task 2: Dress Inventory Checker 👗 👗 👗 👗 👗

You are helping a fashion designer manage their dress inventory.

Steps:
1.⁠ ⁠Create an object named ⁠ dress ⁠ with the following properties:
   - ⁠ name ⁠ (string): Name of the dress.
   - ⁠ size ⁠ (string): Size of the dress.
   - ⁠ inStock ⁠ (boolean): Whether the dress is available.

2.⁠ ⁠Write a function ⁠ checkAvailability ⁠ that:
   - Takes the ⁠ dress ⁠ object as an argument.
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

// ✍️ Solve it her

const dress = {
   name: "Evening Gown",
   size: "M",
   inStock: true
 };


 function checkAvailability(dress) {
   if (dress.inStock) {
     console.log(`${dress.name} is available in size ${dress.size}.`);
   } else {
     console.log(`${dress.name} is out of stock.`);
   }
 }
      


/*
Task 3: Supercar Feature Adder 🚗 🚗 🚗 🚗

You are building a configurator for a supercar. 

Steps:
1.⁠ ⁠Create an object named ⁠ supercar ⁠ with the following properties:
   - ⁠ model ⁠ (string): The car's model.
   - ⁠ price ⁠ (number): The base price.
   - ⁠ features ⁠ (object): An object with a ⁠ color ⁠ property.

2.⁠ ⁠Write a function ⁠ addFeature ⁠ that:
   - Takes the ⁠ supercar ⁠ object and a feature name (string) as arguments.
   - Adds the feature to the ⁠ features ⁠ object and sets it to ⁠ true ⁠.
   - Logs: "[featureName] has been added to [model]."

3.⁠ ⁠Use a *for...in loop* to log all the features of the ⁠ supercar ⁠ object.

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
•⁠  ⁠color: Red
•⁠  ⁠turbo: true
*/

// ✍️ Solve it here ✍️

const supercar ={
   model: "Ferrari SF90",
   price: 500000,
   features: {
     color: "Red"
   }
 };
function addFeature(supercar, featureName){
   supercar.features[featureName] = true;
   console.log(`⁠ ${featureName} has been added to ${supercar.model}. ⁠`);
}

function listFeatures(supercar){
   console.log("Features:");
   for (let feature in supercar.features) {
      console.log(`- ${feature}: ${supercar.features[feature]}`);
    }


}