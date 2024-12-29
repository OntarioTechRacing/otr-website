import { sendEmail } from "../email.js";
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
const phoneErrorMessage = document.getElementById("phone-error");
const verficationErrorMessage = document.getElementById(
  "email-verfication-error"
);
const messageErrorMessage = document.getElementById("message-error");

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
};
const validatePhoneNumber = (phone) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return regex.test(phone);
};
sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  firstNameErrorMessage.style.display = "none";
  lastNameErrorMessage.style.display = "none";
  emailErrorMessage.style.display = "none";
  messageErrorMessage.style.display = "none";
  phoneErrorMessage.style.display = "none";

  const isEmail = validateEmail(email.value);
  console.log(isEmail);
  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    message.value &&
    isEmail
  ) {
    if (phoneNumber.value) {
      console.log(validatePhoneNumber(phoneNumber.value));
      if (!validatePhoneNumber(phoneNumber.value)) {
        phoneErrorMessage.style.display = "flex";
        return;
      }
    }
    joinUsForm.style.display = "none";
    thankYouMessage.style.display = "flex";
    sendEmail(
      firstName.value,
      lastName.value,
      email.value,
      message.value,
      phoneNumber.value ? phoneNumber.value : "Not provided"
    );
  } else {
    if (!firstName.value) {
      firstNameErrorMessage.style.display = "flex";
    }
    if (!lastName.value) {
      lastNameErrorMessage.style.display = "flex";
    }
    if (!email.value) {
      emailErrorMessage.style.display = "flex";
    }
    if (!message.value) {
      messageErrorMessage.style.display = "flex";
    }
    if (email.value && !isEmail) {
      verficationErrorMessage.style.display = "flex";
    }
    if (phoneNumber.value) {
      if (!validatePhoneNumber(phoneNumber.value)) {
        phoneErrorMessage.style.display = "flex";
        return;
      }
    }
  }
});
