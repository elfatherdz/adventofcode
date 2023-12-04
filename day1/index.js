import fs from "fs";
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
