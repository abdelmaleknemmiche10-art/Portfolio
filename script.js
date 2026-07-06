let text = "Web Developer";
let i = 0;
let typing = setInterval(function(){
 document.getElementsByClassName('title')[0].innerHTML += text[i];
    i++;
    if(i === text.length){
    clearInterval(typing)
    }
}, 100)      