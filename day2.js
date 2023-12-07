const fs = require("fs");

const cubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const main = async () => {
  const data = await fs.promises.readFile("input.txt", "utf8");
  console.log(data);

  var sum = 0;
  var games = data.split("\n");
  for (var i = 0; i < games.length; i++) {
    var isGreater = false;
    var temp = games[i]
      .substring(games[i].indexOf(":") + 2)
      .split(";")
      .map((x) => x.split(","));

    temp.forEach((element) => {
      var num = element.map((x) => x.trim());
      console.log(num);
      num.forEach((ele) => {
        console.log(ele);
        var value = parseInt(ele);
        console.log(cubes[ele.substring(ele.indexOf(" ") + 1)]);
        console.log(value);
        if (value > cubes[ele.substring(ele.indexOf(" ") + 1)]) {
          console.log(value);
          isGreater = true;
        }
      });
    });
    if (!isGreater) {
      sum += i + 1;
    }
  }

  console.log(sum);
};

main();
