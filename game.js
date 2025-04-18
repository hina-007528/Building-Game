let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscrPara=document.querySelector("#user-score");
const compscrPara=document.querySelector("#comp-score");
const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const DrawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw! Play Again.";
    msg.style.backgroundColor=" #081b31";
}
const showwinner=(UserWin,Userchoice,compChoice)=>{
    if(UserWin){ userscore++;
        userscrPara.innerText=userscore;
        console.log("you Win!");
        msg.innerText=`You Win! your ${Userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscrPara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You lost!  ${compChoice} beats your ${Userchoice}`;
          msg.style.backgroundColor="Red";
    }
}

const playgame=(Userchoice)=>{
    console.log("UserChoice=",Userchoice);
//generate comp choice
const compChoice=genComChoice();
console.log("CompChoice=",compChoice);
if(Userchoice==compChoice){
//draw game
DrawGame();
}
else{
    let UserWin=true;
    if(Userchoice==="rock"){//scissors papers
      UserWin=  compChoice === "paper" ? false:true;
    }
    else if(Userchoice==="paper"){
        //rock siccors
        UserWin=compChoice === "scissors"?false:true;
    }
    else{
        //rock paper
UserWin=compChoice==="rock"?false:true;
    }
    showwinner(UserWin,Userchoice,compChoice);
}
};
choices.forEach((choice)=>{
   
choice.addEventListener("click",()=>{
    const Userchoice =choice.getAttribute("id");
playgame(Userchoice);
});
});