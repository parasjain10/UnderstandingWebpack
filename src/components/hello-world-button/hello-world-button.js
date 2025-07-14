import "./hello-world-button.scss"

class HelloWorldButton {
    render() {
const button=document.createElement("button");
button.innerHTML="Hello Paras";
const body=document.querySelector("body");
button.classList.add("hello-world-button")
button.onclick=function(){
    const p=document.createElement("p");
    p.innerHTML="Hey man whats up";
    p.classList.add("hello-world-text");
    body.appendChild(p);
}

body.appendChild(button)
    }
}



export { HelloWorldButton };