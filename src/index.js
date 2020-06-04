import { createMainPage } from "./mainPage";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

export const contentContainer = document.getElementById("content");

// Render the main page from the mainPage.js file
createMainPage();

const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");
const aboutText = document.getElementById("restaurant-info");
aboutText.id = "current-container";


// When the menu utton is clicked then the elements created by renderMenu() are assigned to the menuContainer variable and appended to the contentContainer.
menuButton.addEventListener("click", () => {
	const menuContainer = renderMenu();
	const currentContainer = document.getElementById("current-container");
	contentContainer.removeChild(currentContainer);
	contentContainer.appendChild(menuContainer);
});

contactButton.addEventListener("click", () => {
	const contactContainer = renderContact();
	const currentContainer = document.getElementById("current-container");
	contentContainer.removeChild(currentContainer);
	contentContainer.appendChild(contactContainer);

});