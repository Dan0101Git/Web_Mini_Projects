import listeners from "./eventListeners.js";
import {
  patterns,
  passArray,
  form,
  email,
  countryCode,
  zipCode,
  password,
  confirmPassword,
  elementArray,
} from "./validators/valueMatching.js";
import helpers from "./validators/helpers.js";

const validityCheckers = (function () {
  function onPageLoad(e) {
    console.log("hey", e);
    elementArray.forEach((element) => {
      let error;
      if (element !== password) {
        error = document.createElement("span");
        error.classList.add("error");
        element.parentNode.appendChild(error);
      } else {
        helpers.addErrorToPassword(password);
      }
      helpers.markValidity(element, "load");
    });
  }

  function onInputChange(e) {
    let element;
    if (e.target.closest("select")) {
      element = zipCode;
    } else {
      element = e.target.closest("input");
    }
    helpers.markValidity(element, "change");
    console.log("heyman", element);
  }

  function onFormSubmission(e) {
    elementArray.forEach((element) => {
      helpers.markValidity(element, "change");
    });

    if (!document.querySelector(".invalid")) {
      console.log("form successfully submitted");
    } else {
      e.preventDefault();
    }
  }

  return { onPageLoad, onInputChange, onFormSubmission };
})();

export default validityCheckers;

listeners(elementArray);
