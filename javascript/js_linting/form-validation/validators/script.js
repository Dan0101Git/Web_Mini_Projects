import listeners from "../eventListeners.js";
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
} from "./valueMatching.js";
import helpers from "./helpers.js";

const validityCheckers = (function () {
  function onPageLoad(e) {
    elementArray.forEach((element) => {
      let error;
 
   
        error = document.createElement("span");
        error.classList.add("error");
        element.parentNode.appendChild(error);
      helpers.markValidity(element, "load");
    });
  }

  function onInputChange(e) {
    let element;
      let error;
    if (e.target.closest("select")) {
      element = zipCode;
    } else {
      element = e.target.closest("input");
    }
        if(element===password )
    {
      element.nextElementSibling.remove();
      if(!password.validity.valueMissing)
        helpers.addErrorToPassword(password);
      else
      {
       error = document.createElement("span");
        error.classList.add("error");
        element.parentNode.appendChild(error);
      }
   
    }
    helpers.markValidity(element, "change");
    if(element===password){
              helpers.markValidity(confirmPassword,"change");

    }
           console.log(element.validity.valueMissing);
  }

  function onFormSubmission(e) {
    elementArray.forEach((element) => {
      helpers.markValidity(element, "change");
      element.classList.add("show");
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
