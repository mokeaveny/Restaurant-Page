import { contentContainer } from "./index";

export function createMainPage() {
	const navBar = document.createElement("nav");
	const heading = document.createElement("h1");
	heading.textContent = "Mo's Magic Munch";
	navBar.appendChild(heading);
	contentContainer.appendChild(navBar);
	const restaurantImage = document.createElement("img");
	restaurantImage.src = "assets/restaurant.jpg";
	contentContainer.appendChild(restaurantImage);
	const restaurantInfo = document.createElement("p");
	restaurantInfo.textContent = "The best up and coming restaurant in the U.K. Choose from a selection of innovative dishes that will completely blow you away!";
	contentContainer.appendChild(restaurantInfo);
}

