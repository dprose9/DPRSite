function sizeiframe() {
	const frme = document.getElementById("urmomid");
	const doc = frme.contentWindow.document;
	
	frme.style.height = doc.body.scrollHeight +"px";
	frme.style.width = doc.body.scrollWidth +"px";
}

window.addEventListener("load", () => {
	const frme = document.getElementById("urmomid");
	frme.onload = () => {
		sizeiframe();
		console.log("urmom menu loaded");
	};
});