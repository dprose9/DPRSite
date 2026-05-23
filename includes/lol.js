const menuhtm = await fetch("/includes/menu.htm").then(r => r.text());

document.getElementById("menuid").innerHTML = menuhtm;