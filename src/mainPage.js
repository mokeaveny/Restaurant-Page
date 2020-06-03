import { contentContainer } from "./index";

export function createMainPage() {
	const navBar = document.createElement("nav");
	const heading = document.createElement("h1");
	const menuButton = document.createElement("button");
	const contactButton = document.createElement("button");
	menuButton.textContent = "Menu";
	contactButton.textContent = "Contact";
	heading.textContent = "Mo's Magic Munch";
	navBar.appendChild(heading);
	navBar.appendChild(menuButton);
	navBar.appendChild(contactButton);
	contentContainer.appendChild(navBar);
	const restaurantInfo = document.createElement("p");
	restaurantInfo.textContent = "The best up and coming restaurant in the U.K. Choose from a selection of innovative dishes that will completely blow you away!";
	contentContainer.appendChild(restaurantInfo);
}

