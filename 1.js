var findFirstDigit = function (str) {
  console.log(str.length);
  for (var i = 0; i < str.length; i++) {
    //console.log(str[i]);
    if (!isNaN(parseInt(str[i]))) {
      return parseInt(str[i]);
    }
  }
};

var findLastDigit = function (str) {
  console.log(str.length);
  for (var i = str.length - 1; i > 0; i--) {
    //console.log(str[i]);
    if (!isNaN(parseInt(str[i]))) {
      return parseInt(str[i]);
    }
  }
};

var temp = findFirstDigit("sagnow23oasdf");
var temp2 = findLastDigit("sagnow23oasdf");
console.log(temp);
console.log(temp2);
