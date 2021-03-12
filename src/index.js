
// You should implement your task here.

/*module.exports = function towelSort (matrix) {
  let arr = [];

  for(let i = 0; i < matrix.length; i++){
      if(i % 2 == 0){
          arr = arr.concat(matrix[i]);
      }else{
          arr = arr.concat(matrix[i].sort((a, b) => {return b - a}));
      }
  }

  return arr;
}*/

let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ];

function towelSort (matrix) {
  let arr = [];

  if(matrix == undefined || matrix.length == 0){
    return 0;
  }else{
    for(let i = 0; i < matrix.length; i++){
      if(i % 2 == 0){
          arr = arr.concat(matrix[i]);
      }else{
          arr = arr.concat(matrix[i].sort((a, b) => {return b - a}));
      }
    }
  }

  return arr;
}

console.log(towelSort (matrix));

