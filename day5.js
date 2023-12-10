const fs = require("fs");

const seedToSoil = [
  {
    min: 98,
    max: 100,
    relation: 50 - 98,
  },
  {
    min: 50,
    max: 97,
    relation: 52 - 50,
  },
];

const runMap = (seeds, currentMap) => {
  var newSeed = seed;
  var newValues = [];
  for (var i = 0; i < seeds.length; i++) {
    var didMatch = false;
    var seed = seeds[i];
    for (var j = 0; j < currentMap.length; j++) {
      var map = currentMap[j];
      if (seed >= map.min && seed <= map.max) {
        newValues.push(seed + map.relation);
        didMatch = true;
        break;
      }
    }
    if (!didMatch) {
      newValues.push(seed);
    }
  }
  return newValues;
};

const createMaps = (input) => {
  var maps = [];
  for (var i = 0; i < input.length; i++) {
    var map = [];

    var splitMap = input[i].split("\n");
    for (var j = 1; j < splitMap.length; j++) {
      var splitLine = splitMap[j].split(" ").map(Number);
      var min = splitLine[1];
      var max = splitLine[1] + splitLine[2];
      var relation = splitLine[0] - splitLine[1];
      map.push({ min, max, relation });
    }
    maps.push(map);
  }
  return maps;
};

const main = async () => {
  const data = fs.readFileSync("day5.txt", "utf8");
  var splitMaps = data.split("\n\n");
  var seeds = splitMaps
    .shift()
    .split(":")[1]
    .split(" ")
    .filter(Boolean)
    .map(Number);
  var maps = createMaps(splitMaps);

  maps.forEach((map) => {
    seeds = runMap(seeds, map);
  });
  console.log(Math.min(...seeds));
};

main();
