const patterns={//regexpattern,error
    US:[/^\d{5}(?:[-\s]\d{4})?$/,"US zip-code must have five digit followed by - or space wuth 4 more digits"],
    IN:[/^[1-9]\d{5}$/,"Indian pin Code must have 6 digits, first one cannot start with 0,eg. 152002"],
    PK:[/^\d{5}$/,"Pakistani pin must have 5 digits eg.11100"],
    CA:[/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] \d[ABCEGHJ-NPRSTV-Z]\d$/,"Canadian postal code must have letters except D,F,I,O,Q,U,W,Z and a white spacein between"],
    RU:[/^[1-6]\d{5}$/,"Russian postal must start with digits from 1-6 and have 6 toal digits eg.101000"],
    PASS:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,["At Least 8 characters", "msut have 1 LowerCase character","must have 1 uppercase character","mist have atleast 1 digit","And atleast 1 special character"]],
    MAIL:[/^[^@\s]+@[^@\s]+\.[^@\s]+$/,"Email must be eg. thing@example.com"],
    CONFIRM:[``,"Passwords do not match"]
}
const passArray=[/^.{8,}$/,/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*\d)/,/(?=.*[!@#$%^&*])/]
const form=document.querySelector("form");
const email=document.querySelector("input[type='email']");
const countryCode=document.querySelector("select");
const zipCode=document.getElementById("postal")
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-password");
const elementArray=[email,zipCode,password,confirmPassword];

function showError(type){
    return `please enter the ${type}`
}

export {showError,patterns,passArray,form,email,countryCode,zipCode,password,confirmPassword,elementArray};