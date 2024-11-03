import { publicKey, serviceID, templateID } from "./apiKeys.js";
emailjs.init(publicKey);

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
