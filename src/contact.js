export function renderContact() {
	const contactContainer = document.createElement("div");
	contactContainer.id = "current-container";
	const contactHeader = document.createElement("h1");
	contactHeader.textContent = "Contact Mo Keavo";

	contactContainer.appendChild(contactHeader);	

	return contactContainer;
}