// import { publicKey, serviceID, templateID } from "./apiKeys.js";
// const publicKey = "I9qdyBOY1LRq-z7LE";
const serviceID = "service_aa4r1no";
const templateID = "template_ek8hq1d";
export function sendEmail(firstName, lastName, email, message, phoneNumber) {
  const data = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    message: message,
    phone: phoneNumber,
  };
  console.log(data);
  // emailjs
  //   .send(serviceID, templateID, data)
  //   .then((res) => console.log(res, "success"))
  //   .catch((err) => console.log(err));
}
