var list = [];

function customSort(inputList){

  inputList.sort(function(a, b){
    return a - b;
  });

  return inputList;
};


module.exports = {

  input: function(inputedVar) {
    list.push(inputedVar);
    console.log(list);
  },

  listSort: function(){
    return customSort(list);
  }
};