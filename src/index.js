
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  for(let i = 0; i < matrix.length; i++){
      if(i % 2 == 0){
          arr = arr.concat(matrix[i]);
      }else{
          arr = arr.concat(matrix[i].sort((a, b) => {return b - a}));
      }
  }

  return arr;
}

