export function renderMenu() {
	const menuContainer = document.createElement("div");
	menuContainer.id = "current-container";
	const menuList = document.createElement("ul");
	const menuItem1 = document.createElement("li");
	menuItem1.textContent = "Southern Fried Chicken";
	const menuItem2 = document.createElement("li");
	menuItem2.textContent = "Macaroni Cheese";
	const menuItem3 = document.createElement("li");
	menuItem3.textContent = "Pizza";
	const menuItem4 = document.createElement("li");
	menuItem4.textContent = "Hamburger";
	const menuItem5 = document.createElement("li");
	menuItem5.textContent = "Chicken Burger";
	const menuItem6 = document.createElement("li");
	menuItem6.textContent = "Curly Fries"
	const menuItem7 = document.createElement("li");
	menuItem7.textContent = "Milkshake";
	
	menuList.appendChild(menuItem1);
	menuList.appendChild(menuItem2);
	menuList.appendChild(menuItem3);
	menuList.appendChild(menuItem4);
	menuList.appendChild(menuItem5);
	menuList.appendChild(menuItem6);
	menuList.appendChild(menuItem7);
	menuContainer.appendChild(menuList);

	// Returns the menuContainer element so that it can be used on the main page when the function is called by the menu button
	return menuContainer;
}