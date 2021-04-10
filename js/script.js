
// Variable initialization for getting respective elements
const age = document.querySelector("#age-value");
const heightInput = document.querySelector("#height-value");
const weightInput = document.querySelector("#weight-value");
const genderRadioItems = document.getElementsByName("gender");
const weightRadioItems = document.getElementsByName("weight");
const heightRadioItems = document.getElementsByName("height");
const activity = document.getElementById("select-list");
const resetBtn = document.querySelector("#reset-btn");
const targetDiv = document.querySelector(".new-div");
const form = document.querySelector("#id-form");
const calculateBtn = document.querySelector("#calculate-btn");

// Adding event listener to the form
form.addEventListener("submit", (e) => {
  setTimeout(getRadioValues, 1000);
  e.preventDefault();
});

const getRadioValues = () => {

  // Getting selected gender
  let selectedGender;
  genderRadioItems.forEach((item) => {
    if (item.checked === true) {
      selectedGender = item;
    }
  });
 

  // Getting selected measurement for weight
  let selectedWeight;
  weightRadioItems.forEach((item) => {
    if (item.checked === true) {
      selectedWeight = item;
    }
  });

  // Getting selected measurement for height
  let selectedHeight;
  heightRadioItems.forEach((item) => {
    if (item.checked === true) {
      selectedHeight = item;
    }
  });

  calculateCalorie(selectedGender, selectedWeight, selectedHeight);
};

// Function to calculate the calorie required
const calculateCalorie = (selectedGender, selectedWeight, selectedHeight) => {  

  if(checkInput()) {
    return false;
  }
 
  let bmr;
  let weight, height;
  

  try {
    if(selectedWeight.id === "pounds") {
      weight = parseFloat(weightInput.value / 2.2);
    }
    if(selectedWeight.id === "kilos") {
      weight = parseFloat(weightInput.value);
    }
    if(selectedHeight.id === "cm") {
      height = parseFloat(heightInput.value); 
    }
    if(selectedHeight.id === "feet") {
      height = parseFloat(heightInput.value * 30.4);
    }
  
    // Calculations for Male
    if(selectedGender.id === "male" && activity.value === "1") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) + 5) * 1.2);
    }
    else if(selectedGender.id === "male" && activity.value === "2") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) + 5) * 1.375);
    }
    else if(selectedGender.id === "male" && activity.value === "3") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) + 5) * 1.55);
    }
    else if(selectedGender.id === "male" && activity.value === "4") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) + 5) * 1.725);
    }
    else if(selectedGender.id === "male" && activity.value === "5") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) + 5) * 1.9);
    }
  
    // Calculations for Female
    if(selectedGender.id === "female" && activity.value === "1") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) - 161) * 1.2);
    }
    else if(selectedGender.id === "female" && activity.value === "2") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) - 161) * 1.375);
    }
    else if(selectedGender.id === "female" && activity.value === "3") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) - 161) * 1.55);
    }
    else if(selectedGender.id === "female" && activity.value === "4") {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) - 161) * 1.725);
    }
    else {
      bmr = Math.round(((10 * weight) + (6.25 * height) - (5 * parseFloat(age.value)) - 161) * 1.9);
    }
  }

  catch(err) {
    alert("Provide correct values");
  }

  showResult(bmr);
};

// Function to validate the inputs provided
const checkInput = () => {
  if(age.value === "" || weightInput.value === "" || heightInput.value === "" || age.value > 100 || age.value < 15) {
    alert("Please make sure you have provided all the values correctly");
    return false;
  }
  return;
};

// Function to show the result on the page
const showResult = (bmr) => {
  
  let newHTML = "";
  newHTML += `
          <h2>Total Calories</h2>
          <p>Your daily calorie intake including exercise is</p>
          <p id="p-bmr">${bmr}</p>
          `;
  targetDiv.innerHTML = newHTML;
};

// Function to reset all the input values
const resetValue = () => {
  // age.value = "";
  // heightInput.value = "";
  // weightInput.value = "";
  targetDiv.remove();
};

// Add event to the Reset button
resetBtn.addEventListener("click", resetValue);

