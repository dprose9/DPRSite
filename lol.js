
const menuhtm = await fetch("lol.htm").then(r => r.text());
console.log(menuhtm);
document.getElementById("urmomid").innerHTML = menuhtm;