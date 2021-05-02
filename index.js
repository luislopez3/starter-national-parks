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

