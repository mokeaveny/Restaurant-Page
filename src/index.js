import { createMainPage } from "./mainPage";
import { renderMenu } from "./menu";

export const contentContainer = document.getElementById("content");

// Render the main page from the mainPage.js file
createMainPage();

const menuButton = document.getElementById("menu-button");

// When the menu utton is clicked then the elements created by renderMenu() are assigned to the menuContainer variable and appended to the contentContainer.
menuButton.addEventListener("click", () => {
	const menuContainer = renderMenu();
	contentContainer.appendChild(menuContainer);
	
});