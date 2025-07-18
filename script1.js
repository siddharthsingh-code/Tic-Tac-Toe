 console.log("hello");
let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector("#newgame");
let reset =document.querySelector(".reset");
let msg=document.querySelector("#winner");
let msg_container=document.querySelector(".container_hide");
let turn0=true;
let count=0;
boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
            if(turn0==true){
                  box.innerHTML ="O";
                  turn0=false;
            }
            else{
                  box.innerHTML="X";
                  turn0=true;
            }
            box.disabled=true;
            count++;
            let iswinner= checkwinner();
            if(count===9 && !iswinner){
                  gamedraw();
            }
      });
});
const gamedraw=()=>{
      msg.innerHTML="Game Draw";
      msg_container.classList.remove("hide");
      disablebox();
};
const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const checkwinner=()=>{
      for (let pattern of winpattern){
            let p1=boxes[pattern[0]].innerHTML;
            let p2=boxes[pattern[1]].innerHTML;
            let p3=boxes[pattern[2]].innerHTML;
            if(p1!=""  && p2!=""  &&  p3!=""){
                  if(p1===p2 && p2===p3){
                        showwinner(p1);
                        console.log(p1);
                        return true;      
                  }
            }
      }
};

const showwinner=(winner) => {
      msg.innerHTML='Congrats! Winner is '+ winner;
      msg_container.classList.remove("hide");
      disablebox();
}
const disablebox =() =>{
      for(let box of boxes){
            box.disabled=true;
      }
       
}
const enablebox =() =>{
      for(let box of boxes){
            box.disabled=false;
            box.innerHTML="";
            msg_container.classList.add("hide");
            count=0;
      }
       
}
reset.addEventListener("click",()=>{
      enablebox();
});
newgame.addEventListener("click",()=>{
      enablebox();
});

