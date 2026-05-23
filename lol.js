import { readFileSync } from "fs";

const menuhtm = readFileSync("lol.htm", "utf8");

document.getElementById("urmomid").innerHTML = menuhtm;