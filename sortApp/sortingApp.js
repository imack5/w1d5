var prompt = require("prompt-sync")();

var sortingFuncs = require('./sortingFuncs.js');
var answer = '';
var inputCount = 0;


while(true){
  answer = prompt("Enter a number (press q to stop):");

  if(answer =='q'){
    if(inputCount >= 5){
      break;
    } else {
      console.log("You need atleast 5 entries!");
    }
  }else if(Number(answer)){
    sortingFuncs.input(answer);
    inputCount += 1;
  } else {
    console.log("Not a number! Try again!");
  }
};

console.log(sortingFuncs.listSort());






