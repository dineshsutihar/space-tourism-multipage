import data from "./data.js";
console.log(data);

//Destinations
const destinationImage = document.querySelector("#leftDestination img");
const destinationHeader = document.querySelector("#destiheader");
const destinationDescription = document.querySelector("#desticontent");
const destinationDistance = document.querySelector("#planetDetails .dis h4");
const destinationTravel = document.querySelector("#planetDetails .trav h4");
const destiNav = document.querySelectorAll("#rightDestination>nav>ul>li");

destiNav.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // Remove the 'navActive' class from all elements
    document.querySelector(".moon").classList.remove("navActive");
    destiNav.forEach((navItem) => navItem.classList.remove("navActive"));
    // Add 'navActive' class to the clicked element
    ele.classList.add("navActive");

    // Get the destination data
    const index = ele.getAttribute("value");
    const dest = data.destinations[index];

    // Update the destination details
    destinationDescription.textContent = dest.description;
    destinationHeader.textContent = dest.name;
    destinationImage.setAttribute("src", dest.images.png);
    destinationDistance.textContent = dest.distance;
    destinationTravel.textContent = dest.travel;
  });
});

// crew
const crewImage = document.querySelector("#crewright img");
const crewDesignation = document.querySelector("#crewContent h4");
const crewName = document.querySelector("#crewContent h2");
const crewDescription = document.querySelector("#crewContent p");

// Technology
const techName = document.querySelector("#content h1");
const techDescription = document.querySelector("#content p");
const techImage = document.querySelector("#content img");



const mainNav = document.querySelectorAll("header>nav>ul>li");
console.log(mainNav);
mainNav.forEach((ele) => {
  ele.addEventListener("click", () => {
    document.querySelector(".home").classList.remove("navActive");
    mainNav.forEach((navItem) => navItem.classList.remove("navActive"));

    ele.classList.add("navActive");
  });
});
