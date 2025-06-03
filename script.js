const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearMessages();
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email.");
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message is required.");
    isValid = false;
  }

  if (isValid) {
    successMessage.innerText = "Message sent successfully!";
    form.reset();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.innerText = message;
}

function clearMessages() {
  document.querySelectorAll(".error").forEach((el) => (el.innerText = ""));
  successMessage.innerText = "";
}
