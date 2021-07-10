"use strict";
// import wait from "waait";

const content = "안녕하세요. \n 개발자를 꿈꾸는 윤현묵입니다."
const text = document.querySelector(".text")
let index = 0;

// async function sleep(t){
//     return new Promise(resolve=>setTimeout(resolve,t));
//  }

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }


function typing(){
    // let txt = content[index++];
    // text.innerHTML += txt;
    // text.innerHTML += txt === "\n" ? "<br>" : txt

    text.textContent += content[index++];
    

    if(index > content.length){
        
        text.textContent = ""
        index = 0;
        sleep(3000);
    }
}

setInterval(typing, 200)