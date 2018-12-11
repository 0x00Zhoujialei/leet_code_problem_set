/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  let visitedDic = {};
  
  function hasNoNeighbors(node) {
    return !node.neighbors.length;
  }
  
  function isSelfCycle(node, neighbor) {
    return node.label === neighbor.label;
  }

  function hasVisited(neighbor) {
    return visitedDic[neighbor.label];
  }

  function helper(node, traceGraph) {
    if (hasNoNeighbors(traceGraph)) {
      return node;
    }
    traceGraph.neighbors.forEach(neighbor => {
      let cloneNeighbor;
      if (hasVisited(neighbor)) {
        cloneNeighbor = visitedDic[neighbor.label];
        node.neighbors.push(cloneNeighbor);
      } else {
        cloneNeighbor = new UndirectedGraphNode(neighbor.label);
        visitedDic[neighbor.label] = cloneNeighbor;
        node.neighbors.push(cloneNeighbor);
        helper(cloneNeighbor, neighbor);
      }
      
    });
    
    return node;
  }
  

  if (!graph) {
    return null;
  }
  visitedDic[graph.label] = new UndirectedGraphNode(graph.label);
  return helper(visitedDic[graph.label], graph);
}


