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
    document.querySelector(".moon").classList.remove("navActive");
    destiNav.forEach((navItem) => navItem.classList.remove("navActive"));

    ele.classList.add("navActive");

    const index = ele.getAttribute("value");
    const dest = data.destinations[index];

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
mainNav.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    document.querySelector(".home").classList.remove("navActive");
    mainNav.forEach((navItem) => navItem.classList.remove("navActive"));
    switch (index) {
      case 0:
        document.getElementById("home").style.display = "flex";
        document.getElementById("destination").style.display = "none";
        document.getElementById("crew").style.display = "none";
        document.getElementById("technology").style.display = "none";
        document.querySelector("body").style.background =
          'url("./assets/home/background-home-desktop.jpg") no-repeat center center fixed';
        document.querySelector("body").style.backgroundSize = "cover";
        break;
      case 1:
        document.getElementById("home").style.display = "none";
        document.getElementById("destination").style.display = "flex";
        document.getElementById("crew").style.display = "none";
        document.getElementById("technology").style.display = "none";
        document.querySelector("body").style.background =
          'url("./assets/destination/background-destination-desktop.jpg") no-repeat center center fixed';
        document.querySelector("body").style.backgroundSize = "cover";
        break;
      case 2:
        document.getElementById("home").style.display = "none";
        document.getElementById("destination").style.display = "none";
        document.getElementById("crew").style.display = "flex";
        document.getElementById("technology").style.display = "none";
        document.querySelector("body").style.background =
          'url("./assets/crew/background-crew-desktop.jpg") no-repeat center center fixed';
        document.querySelector("body").style.backgroundSize = "cover";
        break;
      case 3:
        document.getElementById("home").style.display = "none";
        document.getElementById("destination").style.display = "none";
        document.getElementById("crew").style.display = "none";
        document.getElementById("technology").style.display = "block";
        document.querySelector("body").style.background =
          'url("./assets/technology/background-technology-desktop.jpg") no-repeat center center fixed';
        document.querySelector("body").style.backgroundSize = "cover";
        break;
    }

    ele.classList.add("navActive");
  });
});
