import Kiwi from '.././kiwi.jpg';
// import addtext from './addText.txt';

function addImage(){
    const img=document.createElement("img");
    img.alt="addtext";
    img.width=200;
    img.src=Kiwi;
    const body=document.querySelector("body");
    body.appendChild(img);
}

export default addImage;