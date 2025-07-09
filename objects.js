// ✅ Task 1: Gamer Profile Manager 🎮 🎮 🎮 🎮
const gamerProfile = {
  username: "ShadowSlayer",
  level: 5,
  isOnline: false
};

function updateOnlineStatus(gamerProfile, status) {
  gamerProfile.isOnline = status;
  if (status) {
    console.log(`${gamerProfile.username} is now online.`);
  } else {
    console.log(`${gamerProfile.username} is now offline.`);
  }
}

updateOnlineStatus(gamerProfile, true); 
// Output: "ShadowSlayer is now online."



// ✅ Task 2: Dress Inventory Checker 👗 👗 👗 👗 👗
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

checkAvailability(dress); 
// Output: "Evening Gown is available in size M."



// ✅ Task 3: Supercar Feature Adder 🚗 🚗 🚗 🚗
const supercar = {
  model: "Ferrari SF90",
  price: 500000,
  features: {
    color: "Red"
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addFeature(supercar, featureName) {
  supercar.features[featureName] = true;
  console.log(`${capitalize(featureName)} has been added to ${supercar.model}.`);

  console.log("Features:");
  for (const feature in supercar.features) {
    console.log(`- ${feature}: ${supercar.features[feature]}`);
  }
}

addFeature(supercar, "turbo");

/* 
Expected Output:
"Turbo has been added to Ferrari SF90."
Features:
- color: Red
- turbo: true
*/
// Output: "Turbo has been added to Ferrari SF90."
