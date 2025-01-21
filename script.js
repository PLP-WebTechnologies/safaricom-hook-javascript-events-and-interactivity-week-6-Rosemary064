// Toggle Background Color
const toggleButton = document.getElementById("toggleButton");
let isBlue = false;

toggleButton.addEventListener("click", function () {
  document.body.style.backgroundColor = isBlue ? "white" : "lightblue";
  isBlue = !isBlue;
});

// Adjust Text Size with Slider
const textSlider = document.getElementById("textSlider");
const textPara = document.getElementById("textPara");

textSlider.addEventListener("input", function () {
  textPara.style.fontSize = textSlider.value + "px";
});

// Show Modal
const showModalButton = document.getElementById("showModalButton");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalButton = document.getElementById("closeModalButton");

showModalButton.addEventListener("click", function () {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
});

// Close Modal
closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
});

// Form Validation
function validateForm() {
  let isValid = true;
  let errorMessages = [];
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Name validation
  if (name.length < 3) {
    isValid = false;
    errorMessages.push("Name must be at least 3 characters long.");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    errorMessages.push("Please enter a valid email.");
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    isValid = false;
    errorMessages.push("Password must be at least 8 characters long, contain at least one uppercase letter and one number.");
  }

  // Display error messages
  const errorMessagesDiv = document.getElementById("errorMessages");
  errorMessagesDiv.innerHTML = errorMessages.join("<br>");
  
  return isValid; // Prevent form submission if validation fails
}

// Dropdown Message
function showMessage() {
  const dropdown = document.getElementById("messageDropdown");
  const dropdownMessage = document.getElementById("dropdownMessage");
  
  dropdownMessage.textContent = "You selected: " + dropdown.value;
}
