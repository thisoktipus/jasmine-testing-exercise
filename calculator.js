
// DOM content loaded event is used when javascript is placed in the head of page.
window.addEventListener('DOMContentLoaded', function () {
  // Get form from the DOM
  const form = document.getElementById("calc-form");
  // If form is true, set the initial values inside the form.
  if (form) {
    setupIntialValues();
    // add an event listener to the form, on submit run the update function.
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// Used for the update function - retrieving current values
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 100000, years: 30, rate: 4.5 };
  const loanAmount = document.getElementById('loan-amount');
  loanAmount.value = values.amount;
  const loanYears = document.getElementById('loan-years');
  loanYears.value = values.years;
  const loanRate = document.getElementById('loan-rate');
  loanRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = '$' + monthly;
}
