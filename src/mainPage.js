import { contentContainer } from "./index";

export function createMainPage() {
	const navBar = document.createElement("nav");
	const heading = document.createElement("h1");
	const buttonContainer = document.createElement("div")
	buttonContainer.id = "button-container";
	const aboutButton = document.createElement("button");
	const menuButton = document.createElement("button");
	const contactButton = document.createElement("button");
	aboutButton.textContent = "About";
	aboutButton.id = "about-button";
	menuButton.id = "menu-button";
	menuButton.textContent = "Menu";
	contactButton.textContent = "Contact";
	contactButton.id = "contact-button";
	heading.textContent = "Mo's Magic Munch";

	buttonContainer.appendChild(aboutButton);
	buttonContainer.appendChild(menuButton);
	buttonContainer.appendChild(contactButton);
	navBar.appendChild(heading);
	navBar.appendChild(buttonContainer);
	contentContainer.appendChild(navBar);

	const restaurantInfo = renderAboutText();

	contentContainer.appendChild(restaurantInfo);
}

export function renderAboutText() {
	const restaurantInfo = document.createElement("p");
	restaurantInfo.id = "current-container";
	restaurantInfo.textContent = "The best up and coming restaurant in the U.K. Choose from a selection of innovative dishes that will completely blow you away!";
	return restaurantInfo;
}

