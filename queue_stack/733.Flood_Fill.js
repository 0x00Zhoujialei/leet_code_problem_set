/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let imgXLength = image[0].length;
  let imgYLength = image.length;

  function indexValid(idx, length) {
    return idx >= 0 && idx < length;
  }

  function color(xIdx, yIdx) {
    return image[yIdx][xIdx];
  }

  function setNewColor(xIdx, yIdx) {
    image[yIdx][xIdx] = newColor;
  }

  function canFillColor(xIdx, yIdx, clr) {
    return indexValid(xIdx, imgXLength) && indexValid(yIdx, imgYLength) && clr === color(xIdx, yIdx) && clr !== newColor; // for any pixel adjacent to image[yIdx][xIdx], if the pixel'color is not the same as image[yIdx][xIdx], then it should not be 'flood fill', otherwise it already be 'flood fill'.
  }

  function processFloodFill(xIdx, yIdx) {
    let clr = color(xIdx, yIdx);
    setNewColor(xIdx, yIdx);
    if (canFillColor(xIdx, yIdx-1, clr)) {
      processFloodFill(xIdx, yIdx-1);
    }
    if (canFillColor(xIdx+1, yIdx, clr)) {
      processFloodFill(xIdx+1, yIdx);
    }
    if (canFillColor(xIdx, yIdx+1, clr)) {
      processFloodFill(xIdx, yIdx+1);
    }
    if (canFillColor(xIdx-1, yIdx, clr)) {
      processFloodFill(xIdx-1, yIdx);
    }
  }

  processFloodFill(sc, sr);
  return image;
};

