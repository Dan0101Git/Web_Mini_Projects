import listeners from "./eventListeners.js";
const form=document.querySelector("form");
const email=document.querySelector("input[type='email']");
const countryCode=document.querySelector("select");
const zipCode=document.getElementById("postal")
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password");
const elementArray=[];
pushElements(email);
pushElements(zipCode);
pushElements(password);
pushElements(confirmPassword);

function pushElements(element){
elementArray.push(element);
}
const patterns={//regexpattern,error
    US:[/^\d{5}(?:[-\s]\d{4})?$/,"US zip-code must have five digit followed by - or space wuth 4 more digits"],
    IN:[/^[1-9]\d{5}$/,"Indian pin Code must have 6 digits, first one cannot start with 0,eg. 152002"],
    PK:[/^\d{5}$/,"Palistani pin must have 5 digits eg.11100"],
    CA:[/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] \d[ABCEGHJ-NPRSTV-Z]\d$/,"Canadian postal code must have letters except D,F,I,O,Q,U,W,Z and a white spacein between"],
    RU:[/^[1-6]\d{5}$/,"Russian postal must start with digits from 1-6 and have 6 toal digits eg.101000"],
    PASS:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,["At Least 8 characters", "msut have 1 LowerCase character","must have 1 uppercase character","mist have atleast 1 digit","And atleast 1 special character"]],
    MAIL:[/^[^@\s]+@[^@\s]+\.[^@\s]+$/,"Email must be eg. thing@example.com"],
    CONFIRM:[``,"Passwords do not match"]
}
const passArray=[/^.{8,}$/,/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*\d)/,/(?=.*[!@#$%^&*])/]

const validityCheckers=(function(){
    function isValid(element){
        const errorSpan=document.createElement("span");
errorSpan.classList.add("error");
         let regExp;
        if(element.getAttribute("id")==="postal"){        
             regExp=new RegExp(patterns[countryCode.value][0]);
            element.nextElementSibling.textContent=patterns[countryCode.value][1];
            }
       else if(element.getAttribute("id")==="password"){
                    regExp=new RegExp(patterns["PASS"][0]);
        checkPasswordValidity(element);
       }
         else if(element.getAttribute("id")==="confirm-password"){
            element.nextElementSibling.textContent=patterns["CONFIRM"][1];
            return element.value && element.value===password.value;
       }
          else if(element.getAttribute("id")==="mail"){
            regExp=new RegExp(patterns["MAIL"][0]);
            element.nextElementSibling.textContent=patterns["MAIL"][1];

          }

        return element.value && regExp.test(element.value);
            
    }
    function markValidity(element,action){
       let className=  isValid(element)?"valid":"invalid";
       element.className=className;
       console.log(action,className)
       if(action==="change" && className==="invalid"){
                    element.nextElementSibling.classList.add("active");
       }
        else if(action==="change" && className==="valid" &&   element.nextElementSibling.matches(".active"))
               element.nextElementSibling.classList.remove("active");

    }
    function checkFieldValidity(){}
    function onPageLoad(e){
        console.log("hey",e);
        elementArray.forEach((element)=>{let error;
            if(element!==password){
                         error=document.createElement("span");
            error.classList.add("error");
            element.parentNode.appendChild(error);
            }
            else{
                addErrorToPassword(password);
            }
            markValidity(element,"load");

        });
    }
    function addErrorToPassword(password){
        let errorDiv=document.createElement("div");
        let error;
        for(let i=0;i<5;i++)
        {
  error=document.createElement("span");
            error.classList.add(`error`);
            error.classList.add(`${i}`);
            errorDiv.appendChild(error);
        }
                   password.parentNode.appendChild(errorDiv);
    }
    function checkPasswordValidity(element){
  const errorDiv=element.nextElementSibling;

  const errorDivArray=Array.from(errorDiv.children);
  console.log(errorDivArray,errorDiv);
  for(let i=0;i<5;i++){
    errorDivArray[i].textContent=patterns["PASS"][1][i];
    if(passArray[i].test(element.value)){
                errorDivArray[i].classList.add("match");

    }
    else if(!passArray[i].test(element.value) && errorDivArray[i].matches(".match"))
          errorDivArray[i].classList.remove("match");
        console.log(!passArray[i].test(element.value), errorDivArray[i].matches(".match"));
    }
    }
    function onInputChange(e){
        let element;
        if(e.target.closest("select"))
            element=zipCode;
        else
         element=e.target.closest("input");
           markValidity(element,"change");
           console.log("heyman",element);

    }
    function onFormSubmission(e){
            elementArray.forEach((element)=>{
                        markValidity(element,"change");

        });
        if(!document.querySelector(".invalid"))
            console.log("form successfulyy submitted")
        else    
            e.preventDefault()

    }
    return {checkFieldValidity,onPageLoad,onInputChange,onFormSubmission}
})();

export default validityCheckers;
listeners(elementArray);