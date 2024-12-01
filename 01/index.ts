import fs from "fs";

const filePath = "./inputs/01.txt";

function processFile(filePath: fs.PathOrFileDescriptor) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error while reading the file:", err);
      return;
    }

    const leftList = [];
    const rightList = [];

    const lines = data.trim().split("\n");

    lines.forEach((line) => {
      const [left, right] = line.trim().split(/\s+/).map(Number);
      if (!isNaN(left) && !isNaN(right)) {
        leftList.push(left);
        rightList.push(right);
      }
    });

    const sortedLeftList = leftList.sort((a, b) => a - b);
    const sortedRightList = rightList.sort((a, b) => a - b);

    let firstHalfResult = 0;

    for (let i = 0; i < sortedLeftList.length; i++) {
      firstHalfResult += Math.abs(sortedLeftList[i] - sortedRightList[i]);
    }

    console.log("first half result:", firstHalfResult);

    let temp_array = [];

    for (let i = 0; i < sortedLeftList.length; i++) {
      let counter = 0;
      for (let j = 0; j < sortedRightList.length; j++) {
        if (sortedLeftList[i] === sortedRightList[j]) {
          counter++;
        }
      }
      temp_array.push(sortedLeftList[i] * counter);

      counter = 0;
    }

    const secondHalfResult = temp_array.reduce((a, b) => a + b, 0);

    console.log("second half result:", secondHalfResult);
  });
}

processFile(filePath);
