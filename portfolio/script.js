const text=["Web Developer","Fronthend Developer","Problem Solver"];
let i=0;
let j=0;
let current="";
let isdeleting=false;

function type(){
    const element=document.querySelector(".typing");

    if(i<text.length)
    {
        if(!isdeleting && j<=text[i].length)
        {
            current = text[i].substring(0,j++);        }
    }else if (isdeleting && j>=0){
        current= text[i].substring(0,j--);
    }

    element.textcontent= current;

    if(j===text[i].length)isdeleting=true;
    if(j===0){
        isdeleting=false;
        i++;
    }
    
setTimeout(type,100);
}

type();

