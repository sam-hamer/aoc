const fs = require("fs");

const getSafeReports = () => {
    let data = fs.readFileSync("day2.txt", "utf8");
    let arrays = data.split("\n").map(line => line.split(" "));

    let safeArrays = arrays.filter(isReportSafe);

    console.log(safeArrays.length);
};

const getSafeReportsWithRemoval = () => {
    let data = fs.readFileSync("day2.txt", "utf8");
    let arrays = data.split("\n").map(line => line.split(" "));

    let safeArrays = arrays.filter(isReportSafeWithRemoval);

    console.log(safeArrays.length);
};

const isReportSafe = (array) => {
    let diff = array[0] - array[1];
    let isDecreasing = diff > 0;

    for (let i = 0; i < array.length - 1; i++) {
        diff = array[i] - array[i + 1];
        if (isDecreasing) {
            if (diff < 0 || Math.abs(diff) === 0 || Math.abs(diff) > 3) {
                // console.log(array);
                return false;
            }
        } else {
            if (diff > 0 || Math.abs(diff) === 0 || Math.abs(diff) > 3) {
                // console.log(array);
                return false;
            }
        }
    }
    return true;
}

const isReportSafeWithRemoval = (array) => {
    if (isReportSafe(array)) return true;

    for (let i = 0; i < array.length; i++) {
        if (isReportSafe(array.toSpliced(i,1))) {
            return true;
        }
    }
    return false;
}

if (process.argv[2] === "getSafeReports") {
    getSafeReports();
} else if (process.argv[2] === "getSafeReportsWithRemoval") {
    getSafeReportsWithRemoval();
}
