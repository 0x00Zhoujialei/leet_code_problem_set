/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */


const WHITE = 0;
const GRAY = 1;
const BLACK = 2;

function Vertex() {
  this.color = WHITE;
  this.d = -1;
  this.pi = null;
  this.adj = [];
}

var openLock = function(deadends, target) {
  var deadNums = new Set(deadends.map(e => Number(e))); // 注意了，这里如果用Array的话oj是过不了的
  var targetNum = Number(target);

  function initGraph(g) {
    for (let i = 0; i < 10000; i++) {
      if (deadNums.has(i)) {
        continue;
      }
      g[i] = new Vertex();
      g[i].adj = generateAdj(deadNums, i);
    }
  }

  function generateAdj(deadNums, currentVertex) {
    var result = [];
    let temp = currentVertex;
    for (let k = 0; k < 4; k++) {
      if (temp % 10 === 0) {
        result.push(currentVertex + 1*Math.pow(10, k));
        result.push(currentVertex + 9*Math.pow(10, k));
      } else if (temp % 10 === 9) {
        result.push(currentVertex - 9*Math.pow(10, k));
        result.push(currentVertex - 1*Math.pow(10, k));
      } else {
        result.push(currentVertex + 1*Math.pow(10, k));
        result.push(currentVertex - 1*Math.pow(10, k));
      }
      temp = Math.floor(temp / 10);
    }
    return result.filter(e => !deadNums.has(e));
  }

  if (target === '0000') {
    return 0;
  }
  if (deadends.indexOf('0000') !== -1) {
    return -1;
  }

  var g = [];
  initGraph(g);

  if (!g[targetNum].adj.length) {
    return -1;
  }

  g[targetNum].color = GRAY;
  g[targetNum].d = 0;

  var q = [];
  q.push(g[targetNum]);

  loop1:
  while (q.length) {
    let t = q.shift();
    for (let v of t.adj) {
      if (g[v].color === WHITE) {
        g[v].color = GRAY;
        g[v].d = t.d + 1;
        if (v === 0) {
          break loop1;
        }
        g[v].pi = t;
        q.push(g[v]);
      }
    }
    t.color = BLACK;
  }

  return g[0].d;
};



