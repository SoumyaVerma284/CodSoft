const buttons=document.querySelectorAll(".btn");
const display=document.getElementById("display");

let currentInput="";

buttons.forEach(button=>{
  button.addEventListener("click",()=>{
    const value=button.textContent;

    if(value=="C"){
      currentInput="";
      display.value="";
    }else if(value==="="){
      try{
        if(currentInput.includes("+")){
          const parts=currentInput.split("+");
          display.value=parseFloat(parts[0])+ parseFloat(parts[1]);
        }else if(currentInput.includes("-")){
          const parts=currentInput.split("-");
          display.value=parseFloat(parts[0])-parseFloat(parts[1]);
        }else if(currentInput.includes("*")){
          const parts=currentInput.split("*");
          display.value=parseFloat(parts[0])*parseFloat(parts[1]);
        }else if(currentInput.includes("/")){
          const parts=currentInput.split("/");
          if(parseFloat(parts[1])==0){
            display.value="Error";
          }else{
            display.value=parseFloat(parts[0])/parseFloat(parts[1]);
         }
        }
        currentInput=display.value;


      }catch(error){
        display.value="Error";
        currentInput="";
      }
    } else{
      currentInput += value;
      display.value=currentInput;
    }
   });
});