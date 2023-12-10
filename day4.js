const fs = require("fs");

const getWinnings = (input) => {
  var cards = input.split("\n");
  var total = 0;

  cards.forEach((element) => {
    var splitCard = element.split("|");
    var winningNums = splitCard[0]
      .split(":")[1]
      .trim()
      .split(" ")
      .filter(Boolean);
    var myNums = splitCard[1].trim().split(" ").filter(Boolean);

    var counter = 0;
    myNums.forEach((num) => {
      if (winningNums.includes(num)) {
        counter++;
      }
    });
    if (counter > 0) {
      total += Math.pow(2, counter - 1);
    }
  });
  return total;
};

const getScratchers = (input, i, max) => {
  var cards = input.split("\n");
  var total = 0;

  for (i; i < max; i++) {
    var splitCard = cards[i].split("|");
    var winningNums = splitCard[0]
      .split(":")[1]
      .trim()
      .split(" ")
      .filter(Boolean);
    var myNums = splitCard[1].trim().split(" ").filter(Boolean);

    var counter = 0;
    myNums.forEach((num) => {
      if (winningNums.includes(num)) {
        counter++;
      }
    });
    if (counter > 0) {
      total += counter;
      total += getScratchers(input, i + 1, i + counter + 1);
    }
  }
  return total;
};

const main = async () => {
  const data = await fs.promises.readFile("input.txt", "utf8");

  //var winnings = getWinnings(data);
  //console.log(winnings);
  var length = data.split("\n").length;
  var scratchers = getScratchers(data, 0, length);
  console.log(scratchers + length);
};

main();
