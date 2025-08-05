import validityCheckers from "./script.js";
const form=document.querySelector("form");
const countryCode=document.querySelector("select");

const listeners=function(elementArray){
document.addEventListener("DOMContentLoaded",validityCheckers.onPageLoad);

document.body.addEventListener("input",validityCheckers.onInputChange);
document.body.addEventListener("change",validityCheckers.onInputChange);

form.addEventListener("submit",validityCheckers.onFormSubmission);
};
export default listeners;