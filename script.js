const toggleBtn = document.querySelector("#toggleFormBtn");
const contactForm = document.querySelector("#contactForm");

toggleBtn.addEventListener("click", () => {
  contactForm.classList.toggle("hidden");
});

const form = document.querySelector("#contactForm");

const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", (event) => {
  let valid = true;

  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  }

  if (messageField.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  if (!valid) {
    event.preventDefault();
  }
});

nameField.addEventListener("input", () => {
  if (nameField.value.trim() !== "") {
    nameError.textContent = "";
  }
});

emailField.addEventListener("input", () => {
  if (emailField.value.trim() !== "") {
    emailError.textContent = "";
  }
});

messageField.addEventListener("input", () => {
  if (messageField.value.trim() !== "") {
    messageError.textContent = "";
  }
});