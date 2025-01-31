// import { publicKey, serviceID, templateID } from "./apiKeys.js";
// const publicKey = "I9qdyBOY1LRq-z7LE";
const serviceID = "service_qwv8ueb";
const templateID = "template_wyihj2c";
export function sendEmail(firstName, lastName, email, message, phoneNumber) {
  const data = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    message: message,
    phone: phoneNumber,
  };
  emailjs
    .send(serviceID, templateID, data)
    .then((res) => console.log(res, "success"))
    .catch((err) => console.log(err));
}
