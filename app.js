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

// destinationImage.attributes.src.value =data.destinations[2].images.png
// console.log(destinationImage.attributes.src.value);

// observe weather the section appears

// const crewSection = document.getElementById("crew");
// function checkVisible(elm) {
//   var rect = elm.getBoundingClientRect();
//   var viewHeight = Math.max(
//     document.documentElement.clientHeight,
//     window.innerHeight
//   );
//   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
// }

// nav under line
const navElement = document.querySelectorAll("header nav ul li");

navElement.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.target.classList.toggle("navActive");
  });
});

// destination section click function
const destElem = document.querySelectorAll("#rightDestination nav ul li");
destElem.forEach((el) => {
  // console.log((el.target.value = "Dinesh"));
  //   el.target.classList.contains("navActive") &&
  //     el.target.classList.remove("navActive");
  el.addEventListener("click", (event) => {
    // console.log(event.target.classList.add("navActive"));
  });
});
