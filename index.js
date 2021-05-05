/*
**************** Selecting Elements on the DOM Checkpoint *****************

// Using "querySelector()"
console.log(document.querySelector(".value"));
console.log(document.querySelector("button"));
console.log(document.querySelector(".established-display .value"));
console.log(document.querySelector(".area-display"));
console.log(document.querySelector(".rating-display .value"));

// Using "querySelectorAll()"
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Working with the NodeList
const heading3List = document.querySelectorAll("h3");

for (let element of heading3List.values()) {
    console.log(element);
}

for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
}

const allDivs = document.querySelectorAll(".rating-display");

for (let element of allDivs.values()) {
    console.log(element);
}

const allAreas = document.querySelectorAll(".area-display");

for (let i = 0; i < allAreas.length; i++) {
    const element = allAreas[i];
    console.log(element);
}
*/

/********************* Updating the DOM Checkpoint *****************/

// Changing the content using the "innerText" property
const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    if (ratingValue > 4.7) {
        rating.style.fontWeight = "bold";
        rating.style.color = "#3ba17c"
    }
    console.log(ratingValue);
}

// Creating DOM Elements using the "createElement()" & "appendChild()" methods
// First, select the parks on the page using the "park" class as a selector:
const parks = document.querySelectorAll(".park-display");
// Then, get the number of parks using the "length" property of the list:
const numberParks = parks.length;
// Next, create a new element. In this case, you should use a <div>:
const newElement = document.createElement("div");
// You can set the text of this element with the "innerText" property, like this:
newElement.innerText = `${numberParks} exciting parks to visit`;
// Using "classList" to add the new "header-statement" class added to the CSS file:
// Then add this class to the new element:
newElement.classList.add("header-statement");
// Finally, to add the new element to the DOM, select the <header> element and use
// the "appendChild()" method to add the new element to the <header>, as shown below:
const header = document.querySelector("header");
header.appendChild(newElement);

// Removing elements from the DOM
// For example, you can select the first park on the park and remove it:
// Get the parent element of all parks
const main = document.querySelector("main");
// Select a single park
const park = main.querySelector(".park-display");
// Remove that park
//main.removeChild(park);

