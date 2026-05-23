const menuhtm = await fetch("/includes/menu.htm").then(r => r.text());
const foothtm = await fetch("/includes/foot.htm").then(r => r.text());

document.getElementById("menuid").innerHTML = menuhtm;
document.getElementById("footid").innerHTML = foothtm;