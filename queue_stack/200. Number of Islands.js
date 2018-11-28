/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length) {
    return 0;
  }

  var numberOfIsland = 0;
  var xLength = grid[0].length;
  var yLength = grid.length;

  function outOfBound(y, x) {
    return y > yLength-1 || y < 0 || x < 0 || x > xLength-1; 
  }

  function isWater(y, x) {
    return !outOfBound(y, x) && grid[y][x] === '0';
  }

  function isSearched(y, x) {
    return !outOfBound(y, x) && grid[y][x] === '-1';
  }

  function isLand(y, x) {
    return !outOfBound(y, x) && grid[y][x] === '1'; 
  }

  function isLastRow(y) {
    return y + 1 === grid.length;
  }

  function markSearched(y, x) {
    grid[y][x] = '-1';
  }

  function searchLeft(y, x) {
    var searchIndex = x - 1;
    if (isLand(y, searchIndex)) {
      markSearched(y, searchIndex);
      return true;
    }
    return false;
  }

  function searchRight(y, x) {
    var searchIndex = x + 1;
    if (isLand(y, searchIndex)) {
      markSearched(y, searchIndex);
      return true;
    }
    return false;
  }

  function searchUp(y, x) {
    var searchIndex = y - 1;
    if (isLand(searchIndex, x)) {
      markSearched(searchIndex, x);
      return true;
    }
    return false;
  }

  function searchDown(y, x) {
    var searchIndex = y + 1;
    if (isLand(searchIndex, x)) {
      markSearched(searchIndex, x);
      return true;
    }
    return false;
  }

  function search(y, x) {
    if (searchLeft(y, x)) {
      search(y, x-1);
    }
    if (searchRight(y, x)) {
      search(y, x+1);
    }
    if (searchUp(y, x)) {
      search(y-1, x);
    }
    if (searchDown(y, x)) {
      search(y+1, x);
    }
  }


  for (let yIndex = 0; yIndex < yLength; yIndex++) {
    for (let xIndex = 0; xIndex < xLength; xIndex++) {
      if (isSearched(yIndex, xIndex)) {
        continue;
      }
      if (!isWater(yIndex, xIndex)) {
        numberOfIsland++;
        markSearched(yIndex, xIndex);
        search(yIndex, xIndex);
        continue;
      }
    }
  }

  return numberOfIsland;
};
