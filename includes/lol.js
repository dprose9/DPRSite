
const menuhtm = await fetch("/includes/head.htm").then(r => r.text());
console.log(menuhtm);
document.getElementById("headid").innerHTML = menuhtm;