const fs = require("fs");

const cubes = {
  red: 12,
  green: 13,
  blue: 14,
};

var getSumOfValidGames = function (input) {
  var sum = 0;
  var games = input.split("\n");
  for (var i = 0; i < games.length; i++) {
    var isGreater = false;
    var temp = games[i]
      .substring(games[i].indexOf(":") + 2)
      .split(";")
      .map((x) => x.split(","));

    temp.forEach((element) => {
      var num = element.map((x) => x.trim());
      num.forEach((ele) => {
        var value = parseInt(ele);
        if (value > cubes[ele.substring(ele.indexOf(" ") + 1)]) {
          isGreater = true;
        }
      });
    });
    if (!isGreater) {
      sum += i + 1;
    }
  }
  return sum;
};

var getMinPowerOfGames = function (input) {
  var sum = 0;
  var games = input.split("\n");
  for (var i = 0; i < games.length; i++) {
    var temp = games[i]
      .substring(games[i].indexOf(":") + 2)
      .split(";")
      .map((x) => x.split(","));

    var red = 0;
    var blue = 0;
    var green = 0;

    temp.forEach((element) => {
      var num = element.map((x) => x.trim());
      num.forEach((ele) => {
        var value = parseInt(ele);
        var currentColor = ele.substring(ele.indexOf(" ") + 1);
        switch (currentColor) {
          case "red":
            if (value > red) {
              red = value;
            }
            break;
          case "blue":
            if (value > blue) {
              blue = value;
            }
            break;
          case "green":
            if (value > green) {
              green = value;
            }
            break;
        }
      });
    });
    sum += red * green * blue;
  }
  return sum;
};

const main = async () => {
  const data = await fs.promises.readFile("input.txt", "utf8");
  console.log(getSumOfValidGames(data));
  console.log(getMinPowerOfGames(data));
};

main();
