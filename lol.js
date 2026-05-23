import { readFileSync } from "fs";

const menuhtm = readFileSync("lol.htm", "utf8");
console.log(menuhtm);
document.getElementById("urmomid").innerHTML = menuhtm;