import previous from "./previous.js";
import next from "./next.js";
import event from "./event_listeners.js";
import storage from "./storage.js";
import uiState from "./state.js";
import cardClicked from "./cardDiv.js";
const divArray=storage.getDivArray();
                const imageBody=document.querySelector(".carousel");

console.log(imageBody)
imageBody.appendChild(divArray[uiState.state]);
const controller=(function(){
    function eventHandler(e){
        if(e.target.closest(".left")){           
            document.querySelector(".image-div").remove();
            previous.buttonClicked(divArray,imageBody);
}
        else if(e.target.closest(".right")){      
            document.querySelector(".image-div").remove();
            next.buttonClicked(divArray,imageBody);
}
 else if(e.target.closest(".card-div")){
    const cardId=e.target.closest(".card-div").getAttribute("data-set")
       document.querySelector(".image-div").remove();
            cardClicked.buttonClicked(divArray,imageBody,cardId);
 }
    }
    return {eventHandler};
})();
setInterval(()=>{
       document.querySelector(".image-div").remove();
    next.buttonClicked(divArray,imageBody);
                         

},5000);

event.listener(controller.eventHandler);
export default controller;
