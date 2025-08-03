import uiState from "./state.js";
const cardClicked=(function(){
function buttonClicked(divArray,imageBody,cardId){
    let state=uiState.state;
   
    uiState.state=cardId;
console.log(uiState.state);
imageBody.appendChild(divArray[uiState.state]);
const id=divArray[uiState.state].getAttribute("data-set");
if(document.querySelector(".active"))
    document.querySelector(".active").classList.remove("active");
document.querySelector(`.card-div[data-set="${id}"]`).classList.add("active");

}
return {buttonClicked};
})();
export default cardClicked;