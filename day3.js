const fs = require("fs");

const isDigit = (val) => {
  if (parseInt(val) >= 0 && parseInt(val) <= 9) {
    return true;
  } else {
    return false;
  }
};

const extractNumber = (string, index) => {
  var value;
  var match;
  // use regex to extract the number value
  const regex = /\d+/;
  if (index - 1 >= 0 && isDigit(string[index - 1])) {
    if (index - 2 >= 0 && isDigit(string[index - 2])) {
      match = string.substring(index - 2).match(regex);
      value = match ? parseInt(match[0]) : 0;
    } else {
      match = string.substring(index - 1).match(regex);
      value = match ? parseInt(match[0]) : 0;
      if (match[0].length === 3) {
        index += 1;
      }
    }
  } else {
    match = string.substring(index).match(regex);
    value = match ? parseInt(match[0]) : 0;
    if (match[0].length === 3) {
      index += 2;
    } else if (match[0].length === 2) {
      index += 1;
    }
  }
  return { value, index };
};

const findPartNumbers = (input) => {
  var lines = input.split("\n");
  var sum = 0;
  var height = lines.length;
  var width = lines[0].length;

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      // if char is a digit, then check for adjactent symbols
      // check previous and next chars
      // check above and below chars
      // check all 4 diagonals
      var addValue = false;
      if (isDigit(lines[i][j])) {
        if (j !== 0 && symbol.indexOf(lines[i][j - 1]) !== -1) {
          addValue = true;
        } else if (j !== width - 1 && symbol.indexOf(lines[i][j + 1]) !== -1) {
          addValue = true;
        } else if (i !== 0 && symbol.indexOf(lines[i - 1][j]) !== -1) {
          addValue = true;
        } else if (i !== height - 1 && symbol.indexOf(lines[i + 1][j]) !== -1) {
          addValue = true;
        } else if (
          i !== 0 &&
          j !== 0 &&
          symbol.indexOf(lines[i - 1][j - 1]) !== -1
        ) {
          addValue = true;
        } else if (
          i !== 0 &&
          j !== width - 1 &&
          symbol.indexOf(lines[i - 1][j + 1]) !== -1
        ) {
          addValue = true;
        } else if (
          i !== height - 1 &&
          j !== 0 &&
          symbol.indexOf(lines[i + 1][j - 1]) !== -1
        ) {
          addValue = true;
        } else if (
          i !== height - 1 &&
          j !== width - 1 &&
          symbol.indexOf(lines[i + 1][j + 1]) !== -1
        ) {
          addValue = true;
        }
      }

      // if any are true, get the full number and add to a sum
      if (addValue) {
        var temp = ({ value, index } = extractNumber(lines[i], j));
        j = temp.j;
        sum += temp.value;
      }
    }
  }
  return sum;
};
const findGears = (input) => {
  var lines = input.split("\n");
  var sum = 0;
  var height = lines.length;
  var width = lines[0].length;

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (lines[i][j] === "*") {
        var nums = [];
        console.log(lines[i]);
        if (j !== 0 && isDigit(lines[i][j - 1])) {
          var temp = ({ value, index } = extractNumber(lines[i], j - 1));
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (j !== width - 1 && isDigit(lines[i][j + 1])) {
          temp = { value, index } = extractNumber(lines[i], j + 1);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (i !== 0 && isDigit(lines[i - 1][j])) {
          temp = { value, index } = extractNumber(lines[i - 1], j);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (i !== height - 1 && isDigit(lines[i + 1][j])) {
          temp = { value, index } = extractNumber(lines[i + 1], j);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (i !== 0 && j !== 0 && isDigit(lines[i - 1][j - 1])) {
          temp = { value, index } = extractNumber(lines[i - 1], j - 1);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (i !== 0 && j !== width - 1 && isDigit(lines[i - 1][j + 1])) {
          temp = { value, index } = extractNumber(lines[i - 1], j + 1);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (i !== height - 1 && j !== 0 && isDigit(lines[i + 1][j - 1])) {
          temp = { value, index } = extractNumber(lines[i + 1], j - 1);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }
        if (
          i !== height - 1 &&
          j !== width - 1 &&
          isDigit(lines[i + 1][j + 1])
        ) {
          temp = { value, index } = extractNumber(lines[i + 1], j + 1);
          //j = temp.j;
          if (nums.indexOf(temp.value) === -1) {
            nums.push(temp.value);
          }
        }

        if (nums.length === 2) {
          sum += nums[0] * nums[1];
        }
      }
    }
  }
  return sum;
};

const symbol = ["+", "-", "*", "/", "%", "&", "=", "$", "@", "#"];

const main = async () => {
  const data = await fs.promises.readFile("input.txt", "utf8");

  //console.log(findPartNumbers(data));
  console.log(findGears(data));
};

main();
