import uiState from "./state.js";
const next=(function(){
function buttonClicked(divArray,imageBody){
    console.log("next");
        let state=uiState.state;
    if(state>=divArray.length-1 )
        uiState.state=0;
    else
    uiState.state++;
console.log(imageBody.isConnected,divArray[uiState.state],uiState.state);
imageBody.appendChild(divArray[uiState.state]);
const id=divArray[uiState.state].getAttribute("data-set");
if(document.querySelector(".active"))
    document.querySelector(".active").classList.remove("active");
document.querySelector(`.card-div[data-set="${id}"]`).classList.add("active");
}
return {buttonClicked}; 
})();
export default next;