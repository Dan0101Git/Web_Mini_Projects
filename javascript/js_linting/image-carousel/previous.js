import uiState from "./state.js";
const previous=(function(){
function buttonClicked(divArray,imageBody){
    let state=uiState.state;
    if(state===0)
        uiState.state=divArray.length-1;
    else
    uiState.state--;
console.log(uiState.state);
imageBody.appendChild(divArray[uiState.state]);
const id=divArray[uiState.state].getAttribute("data-set");
if(document.querySelector(".active"))
    document.querySelector(".active").classList.remove("active");
document.querySelector(`.card-div[data-set="${id}"]`).classList.add("active");

}
return {buttonClicked};
})();
export default previous;