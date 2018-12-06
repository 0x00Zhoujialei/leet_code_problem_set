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

  function markSearched(y, x) {
    grid[y][x] = '-1';
  }

  function canSearchLeft(y, x) {
    var searchIndex = x - 1;
    if (isLand(y, searchIndex)) {
      return true;
    }
    return false;
  }

  function canSearchRight(y, x) {
    var searchIndex = x + 1;
    if (isLand(y, searchIndex)) {
      return true;
    }
    return false;
  }

  function canSearchUp(y, x) {
    var searchIndex = y - 1;
    if (isLand(searchIndex, x)) {
      return true;
    }
    return false;
  }

  function canSearchDown(y, x) {
    var searchIndex = y + 1;
    if (isLand(searchIndex, x)) {
      return true;
    }
    return false;
  }

  function search(y, x) {
    if (canSearchLeft(y, x)) {
      markSearched(y, x);
      search(y, x-1);
    }
    if (canSearchRight(y, x)) {
      markSearched(y, x+1);
      search(y, x+1);
    }
    if (canSearchUp(y, x)) {
      markSearched(y-1, x);
      search(y-1, x);
    }
    if (canSearchDown(y, x)) {
      markSearched(y+1, x);
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
