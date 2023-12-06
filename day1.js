const fs = require("fs");

var findFirstDigit = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      return str[i];
    }
  }
};

var findLastDigit = function (str) {
  for (var i = str.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(str[i]))) {
      return str[i];
    }
  }
};

const main = async () => {
  const data = await fs.promises.readFile("input.txt", "utf8");
  fileContents = data; // data will be a string

  var strings = fileContents.split("\n");
  var sum = 0;
  for (var i = 0; i < strings.length; i++) {
    let val = parseInt(findFirstDigit(strings[i]) + findLastDigit(strings[i]));
    sum += val;
  }
  console.log(sum);
};

main();
