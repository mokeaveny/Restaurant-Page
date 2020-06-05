export function renderContact() {
	const contactContainer = document.createElement("div");
	contactContainer.id = "current-container";
	const contactHeader = document.createElement("h1");
	contactHeader.id = "contact-header";
	contactHeader.textContent = "Contact Mo Keavo";
	const paraInfo = document.createElement("p");
	paraInfo.textContent = "Email: mike@momunch.com"
	const paraBreak = document.createElement("br");
	const addressLines = document.createElement("ul");
	addressLines.id = "address-lines"
	const addressHeader = document.createElement("h2");
	addressHeader.textContent = "Address:";
	const addressLine1 = document.createElement("li");
	addressLine1.textContent = "Mo's Magic Munch"
	const addressLine2 = document.createElement("li");
	addressLine2.textContent = "56 Delicious Lane"
	const addressLine3 = document.createElement("li");
	addressLine3.textContent = "Flavour City"
	const addressLine4 = document.createElement("li");
	addressLine3.textContent = "Planet Earth";

	contactContainer.appendChild(contactHeader);	
	paraInfo.appendChild(paraBreak);
	addressLines.appendChild(addressHeader);
	addressLines.appendChild(addressLine1);
	addressLines.appendChild(addressLine2);
	addressLines.appendChild(addressLine3);
	addressLines.appendChild(addressLine4);
	paraInfo.appendChild(addressLines);
	contactContainer.appendChild(paraInfo);

	return contactContainer;
}