
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  for(let i = 0; i < array.length; i++){
      if(i % 2 == 0){
          arr = arr.concat(array[i]);
      }else{
          arr = arr.concat(array[i].sort((a, b) => {return b - a}));
      }
  }

  return arr;
}

