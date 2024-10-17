const sendButton = document.querySelector(".form-submit");
const joinUsForm = document.getElementById("join-us");
const thankYouMessage = document.getElementById("thank-you");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phone");
const message = document.querySelector(".message");
const firstNameErrorMessage = document.getElementById("firstname-error");
const lastNameErrorMessage = document.getElementById("lastname-error");
const emailErrorMessage = document.getElementById("email-error");
const messageErrorMessage = document.getElementById("message-error");

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  firstNameErrorMessage.style.display = "none";
  lastNameErrorMessage.style.display = "none";
  emailErrorMessage.style.display = "none";
  messageErrorMessage.style.display = "none";

  if (firstName.value && lastName.value && email.value && message.value) {
    joinUsForm.style.display = "none";
    thankYouMessage.style.display = "flex";
  } else {
    if (!firstName.value) {
      firstNameErrorMessage.style.display = "flex";
    }
    e;
    if (!lastName.value) {
      lastNameErrorMessage.style.display = "flex";
    }
    if (!email.value) {
      emailErrorMessage.style.display = "flex";
    }
    if (!message.value) {
      messageErrorMessage.style.display = "flex";
    }
  }
});
