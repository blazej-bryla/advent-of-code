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

    let result = 0;

    for (let i = 0; i < sortedLeftList.length; i++) {
      result += Math.abs(sortedLeftList[i] - sortedRightList[i]);
    }

    console.log(result);
  });
}

processFile(filePath);
