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

const helpers = (function () {
  function markValidity(element, action) {
    let className = isValid(element) ? "valid" : "invalid";
    element.className = className;
    console.log(action, className);

    if (action === "change" && className === "invalid") {
      element.nextElementSibling.classList.add("active");
    } else if (
      action === "change" &&
      className === "valid" &&
      element.nextElementSibling.matches(".active")
    ) {
      element.nextElementSibling.classList.remove("active");
    }
  }

  function checkPasswordValidity(element) {
    const errorDiv = element.nextElementSibling;
    const errorDivArray = Array.from(errorDiv.children);

    for (let i = 0; i < 5; i++) {
      errorDivArray[i].textContent = patterns["PASS"][1][i];
      if (passArray[i].test(element.value)) {
        errorDivArray[i].classList.add("match");
      } else if (
        !passArray[i].test(element.value) &&
        errorDivArray[i].matches(".match")
      ) {
        errorDivArray[i].classList.remove("match");
      }
    }
  }

  function isValid(element) {
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error");

    let regExp;

    if (element.getAttribute("id") === "postal") {
      regExp = patterns[countryCode.value][0];
      element.nextElementSibling.textContent = patterns[countryCode.value][1];
    } else if (element.getAttribute("id") === "password") {
      regExp = patterns["PASS"][0];
      checkPasswordValidity(element);
    } else if (element.getAttribute("id") === "confirm-password") {
      element.nextElementSibling.textContent = patterns["CONFIRM"][1];
      return element.value && element.value === password.value;
    } else if (element.getAttribute("id") === "mail") {
      regExp = patterns["MAIL"][0];
      element.nextElementSibling.textContent = patterns["MAIL"][1];
    }

    return element.value && regExp.test(element.value);
  }

  function addErrorToPassword(password) {
    let errorDiv = document.createElement("div");

    for (let i = 0; i < 5; i++) {
      let error = document.createElement("span");
      error.classList.add("error");
      error.classList.add(`${i}`);
      errorDiv.appendChild(error);
    }

    password.parentNode.appendChild(errorDiv);
  }

  return {
    markValidity,
    checkPasswordValidity,
    addErrorToPassword,
  };
})();

export default helpers;
