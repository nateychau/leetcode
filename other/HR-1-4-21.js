function numberOfCharactersEscaped(expression) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let counter = 0;
  let subCount = 0;
  let counting = false;
 
  for(let i = 0; i < expression.length; i++){
      if (counting && expression[i] === '!' && letters.includes(expression[i+1])){
          subCount++;
      }
      else if (expression[i] === '#') {
         if (counting){
             counter += subCount;
             subCount = 0;
         }
         counting = !counting;
      }
  }
  return counter

}


function countSignals(frequencies, filterRanges) {
  // Write your code here
  let low = Number.NEGATIVE_INFINITY;
  let high = Number.POSITIVE_INFINITY;
  let counter = 0;
  
  for(let i = 0; i < filterRanges.length; i++) {
      low = Math.max(low, filterRanges[i][0]);
      high = Math.min(high, filterRanges[i][1]);
  }
  
  frequencies.forEach(frequency => {
      if(frequency >= low && frequency <= high) {
          counter++;
      }
  })
  
  return counter;   
}


function minimumMovement(obstacleLanes) {
  console.log(obstacleLanes)
  let moves = 0;
  let lanes = [0, 0, 0];    
  for(let i = 0; i < obstacleLanes.length; i++){
      let obstacle = obstacleLanes[i] - 1
      
      if (moves === 0 && obstacle !== 1) {
          continue 
      }
      
      if (moves === 0 && obstacle === 1) {
          moves++;
      }
      
      lanes[obstacle] = 1;
      if (lanes.every(lane => lane === 1)) {
          moves++; 
          lanes = [0, 0, 0]
          lanes[obstacle] = 1;
      }
  }
  
  return moves
}