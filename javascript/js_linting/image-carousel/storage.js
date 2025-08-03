


// Generate random image URL
export default (function storage(){
    const divArray=[];
    let c=0;
    const imgArray = ["3idiots", "inception", "interstellar2", "udaan", "whiplash"];

    function generateRandomimgUrl(i) {
    return `images/movies/${imgArray.pop()}.jpg`;
}
function generateImageDiv(){
    
    const imageDiv=document.createElement("div");
    const cardDiv=document.createElement("div");
const generatedImage=generateRandomimgUrl();
    const image=document.createElement("img");
    const image2=document.createElement("img");

    image.setAttribute("src",generatedImage);
    image2.setAttribute("src",generatedImage);

    imageDiv.setAttribute("data-id",crypto.randomUUID());
    cardDiv.setAttribute("data-id",imageDiv.getAttribute("data-id"));
    imageDiv.classList.add("image-div");
    cardDiv.classList.add("card-div");
    cardDiv.appendChild(image2);
    imageDiv.appendChild(image);
    c++;
    console.log(cardDiv,imageDiv,image,image2,generatedImage,c);
    return {imageDiv,cardDiv};

}
function getDivArray(){
        const cardOptionsDiv=document.createElement("div");
                const imageBody=document.querySelector(".carousel");

    cardOptionsDiv.classList.add("card-options-div");

   let length=imgArray.length;
console.log(length)
    for(let i=0;i<length;i++)
    {
        const generate=generateImageDiv();
        const imageDiv=generate.imageDiv;
        imageDiv.setAttribute("data-set",i);
        generate.cardDiv.setAttribute("data-set",i)
            cardOptionsDiv.appendChild(generate.cardDiv);

        divArray.push(imageDiv);

    }
            imageBody.appendChild(cardOptionsDiv);
            console.log(divArray);


    return divArray;
}


return {generateImageDiv,getDivArray};
})();

