/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  function isNumber(c) {
    return /[0-9]/.test(c)
  }

  function isLeftBracket(c) {
    return c === '[';
  }

  function isRightBrackket(c) {
    return c === ']';
  }

  function isOtherChar(c) {
    return /[^0-9\[\]]/.test(c);
  }

  function wholeNumber(str, startIndex) {
    let result = str[startIndex];
    while (startIndex + 1 < str.length && isNumber(str[startIndex+1])) {
      result += str[startIndex+1];
      startIndex++;
    }
    return result;
  }

  function wholeEncodedString(str, startIndex) {
    let bracketStack = [];
    let result = '';
    let pivot = startIndex + 1;
    bracketStack.push(str[startIndex]);
    while (bracketStack.length) {
      if (isOtherChar(str[pivot]) || isNumber(str[pivot])) {
        result += str[pivot]
      }
      if (isLeftBracket(str[pivot])) {
        result += str[pivot]
        bracketStack.push(str[pivot])
      }
      if (isRightBrackket(str[pivot])) {
        bracketStack.pop()
        if (bracketStack.length) {
          result += str[pivot]
        }
      }
      pivot++;
    }
    return [result, pivot];
  }

  function generateResult(str, times) {
    let singleResult = '';
    let outputResult = '';
    let pivot = 0;
    while (pivot < str.length) {
      if (isOtherChar(str[pivot])) {
        singleResult += str[pivot];
         pivot++
      }
      if (isNumber(str[pivot])) {
        let repeatNumStr = wholeNumber(str, pivot);
        let [encodedString, newPivot] = wholeEncodedString(str, pivot+repeatNumStr.length);
        pivot = newPivot;
        singleResult += generateResult(encodedString, Number(repeatNumStr))
      }
    }

    while (times > 0) {
      outputResult += singleResult;
      times--;
    }

    return outputResult;
  }

  return generateResult(s, 1);
};

