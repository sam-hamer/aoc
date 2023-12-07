const fs = require("fs");

const cubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const main = async () => {
  const data = await fs.promises.readFile("test.txt", "utf8");
  console.log(data);

  var sum = 0;
  var games = data.split("\n");
  for (var i = 0; i < games.length; i++) {}
};

main();
