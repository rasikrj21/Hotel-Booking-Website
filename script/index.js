function viewChange() {
	const cityCards = (document.getElementById("extra"));
	var cityCardsStyle = getComputedStyle(cityCards).display;
	if (cityCardsStyle === "none") {
		cityCards.style.display = "flex";
		document.getElementById("view-button").innerText = "View Less";
	} else {
		cityCards.style.display = "none";
		document.getElementById("view-button").innerText = "View More";
	}
}