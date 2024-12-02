const fs = require("fs");

const createAndSortArrays = (data) => {
  let arrays = createArrays(data);

  arrays.arr1.sort();
  arrays.arr2.sort();

  return arrays;
};

const createArrays = (data) => {
  let dataArr = data.split("\n");
  let arrays = {
    arr1: [],
    arr2: [],
  };
  dataArr.forEach((line) => {
    const [val1, val2] = line.split("   ");
    arrays.arr1.push(val1);
    arrays.arr2.push(val2);
  });
  return arrays;
};

const createDicts = (data) => {
  let dataArr = data.split("\n");
  let maps = {
    map1: new Map(),
    map2: new Map(),
  };
  dataArr.forEach((line) => {
    const [val1, val2] = line.split("   ");
    if (maps.map1.has(val1)) {
      maps.map1.set(val1, maps.map1.get(val1) + 1);
    } else {
      maps.map1.set(val1, 1);
    }
    if (maps.map2.has(val2)) {
      maps.map2.set(val2, maps.map2.get(val2) + 1);
    } else {
      maps.map2.set(val2, 1);
    }
  });
  return maps;
};

const sumDifferences = (arrays) => {
  let arr1 = arrays.arr1;
  let arr2 = arrays.arr2;
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum += Math.abs(arr1[i] - arr2[i]);
  }
  return sum;
};

const sumSimilarities = (dicts) => {
  let map1 = dicts.map1;
  let map2 = dicts.map2;
  let sum = 0;

  map1.forEach((value1, key1) => {
    if (map2.has(key1)) {
      sum += key1 * value1 * map2.get(key1);
    }
  });

  return sum;
};

const getDifferences = () => {
  let data = fs.readFileSync("day1.txt", "utf8");
  let arrays = createAndSortArrays(data);
  let sum = sumDifferences(arrays);
  console.log(sum);
};

const getSimilarityScore = () => {
  let data = fs.readFileSync("day1.txt", "utf8");
  let dicts = createDicts(data);
  let similarity = sumSimilarities(dicts);
  console.log(similarity);
};

if (process.argv[2] === "getDifferences") {
  getDifferences();
} else if (process.argv[2] === "getSimilarityScore") {
  getSimilarityScore();
}
