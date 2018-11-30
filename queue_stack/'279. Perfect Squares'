/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
  function isSquareNum(num) {
    let k = Math.floor(Math.pow(num, 0.5));
    return k * k === num;
  }
  
  if (n === 0) {
    return 0;
  }
  if (isSquareNum(n)) {
    return 1;
  }
  
  let perfectSquares = [];
  let cntPerfectSquares = [];
  for (let i = 1; i*i <= n; i++) {
    perfectSquares.push(i*i);
    cntPerfectSquares[i*i - 1] = 1;
  }
  let q = [];
  for (let k of perfectSquares) {
    q.push(k);
  }
  
  let currentCntPerfectSquares = 1;
  while (q.length) {
    currentCntPerfectSquares++;

    let qSize = q.length;
    while (qSize-- > 0) {
      let u = q.shift();
      for (let s of perfectSquares) {
        if (u + s === n) {
          return currentCntPerfectSquares;
        } else if ((u + s < n) && (typeof cntPerfectSquares[u + s - 1] === 'undefined')) {
          cntPerfectSquares[u + s - 1] = currentCntPerfectSquares;
          q.push(u + s);
        } else if (u + s > n) {
          break;
        }
      }
    }
  }

  return 0;
};

