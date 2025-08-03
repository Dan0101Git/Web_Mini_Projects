

const event=(function(){
    function listener(callback){
        
            document.body.addEventListener("click",callback);

    }
    return {listener}
})();
export default event;
