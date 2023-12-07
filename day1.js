const fs = require("fs");

const digits = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

var findFirstDigit = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      return str[i];
    } else if (Object.keys(digits).find((s) => str.startsWith(s, i))) {
      var result =
        digits[Object.keys(digits).find((s) => str.startsWith(s, i))];
      return result;
    }
  }
};

var findLastDigit = function (str) {
  for (var i = str.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(str[i]))) {
      return str[i];
    } else if (Object.keys(digits).find((s) => str.startsWith(s, i))) {
      var result =
        digits[Object.keys(digits).find((s) => str.startsWith(s, i))];
      return result;
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
