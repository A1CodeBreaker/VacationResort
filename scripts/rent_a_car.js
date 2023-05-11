"use strict";

// Get the elements needed
const rentDaysInput = document.getElementById("rentDays");
const optionsInputs = document.querySelectorAll("input[type='checkbox']");
const rentAgeInputs = document.querySelectorAll("input[name='rentAge']");
const totalCostBtn = document.getElementById("totalCostBtn");
const carRentalEl = document.getElementById("carRental");
const optChoiceEl = document.getElementById("optChoice");
const areYou25El = document.getElementById("areYou25");
const dueAmountEl = document.getElementById("dueAmount");

// Define the costs of the rental options
const rentalOptionPrices = {
  tollTag: 3.95,
  gps: 2.95,
  roadsideHelp: 2.95,
};

// Define the age surcharges
const ageSurcharges = {
  under25: 0,
  over25: 0.3,
};

// Set the click event handler for the button
totalCostBtn.addEventListener("click", calculateTotalCost);

// Define the function to calculate the total cost
function calculateTotalCost() {
  // Get the input values
  const rentDays = parseInt(rentDaysInput.value);
  const selectedOptions = [...optionsInputs].filter(input => input.checked);
  const selectedRentAge = [...rentAgeInputs].find(input => input.checked);

  // Calculate the costs
  const basicRentalCost = rentDays * 29.99;
  const optionsCost = selectedOptions.reduce((total, option) => {
    return total + rentalOptionPrices[option.id] * rentDays;
  }, 0);
  const ageSurcharge = ageSurcharges[selectedRentAge.id] * basicRentalCost;
  const totalCost = basicRentalCost + optionsCost + ageSurcharge;

  // Update the HTML elements
  carRentalEl.textContent = `Car Rental: $${basicRentalCost.toFixed(2)}`;
  optChoiceEl.textContent = `Options: $${optionsCost.toFixed(2)}`;
  areYou25El.textContent = `Under 25 surcharge: $${ageSurcharge.toFixed(2)}`;
  dueAmountEl.textContent = `Total due: $${totalCost.toFixed(2)}`;
}
