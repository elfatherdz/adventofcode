import fs from "fs";
//first part solutoin
//get the clear input without spaces
const clear = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");
function first_part() {
  const values = clear.map((item) => {
    const first = item.split("").find((value) => !isNaN(Number(value)));
    const last = item
      .split("")
      .reverse()
      .find((value) => !isNaN(Number(value)));
    return Number(first + last);
  });

  return values.reduce((s, v) => s + v);
}
//print the result
console.log(first_part());

//second part solution
// still not working yet
const clear2 = fs.readFileSync("./examples2.txt", "utf-8").trim().split("\r\n");

const numMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
function second_part() {
  const values = clear2.map((item) => {
    // Replace words with corresponding numbers
    const replacedItem = item.replace(
      new RegExp(Object.keys(numMap).join("|"), "gi"),
      (matched) => numMap[matched]
    );

    const first = replacedItem.split("").find((value) => !isNaN(Number(value)));
    const last = replacedItem
      .split("")
      .reverse()
      .find((value) => !isNaN(Number(value)));

    return Number(first + last);
  });
  console.log(values);
  return values.reduce((s, v) => s + v);
}
console.log(second_part());
