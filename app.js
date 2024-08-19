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
const crewDesignation = document.querySelector("#crewcontent h4");
const crewName = document.querySelector("#crewcontent h2");
const crewDescription = document.querySelector("#crewcontent p");
const crewNav = document.querySelectorAll("#circle-navigation>.circle");

crewNav.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    document.querySelector("#circle4").classList.remove("circleactive");
    crewNav.forEach((navItem) => navItem.classList.remove("circleactive"));

    ele.classList.add("circleactive");
    const cre = data.crew[index];
    crewDescription.textContent = cre.bio;
    crewName.textContent = cre.name;
    crewImage.setAttribute("src", cre.images.png);
    crewDesignation.textContent = cre.role;
  });
});

// Technology
const techName = document.querySelector("#content h1");
const techDescription = document.querySelector("#content p");
const techImage = document.querySelector("#technology img");
const techNav = document.querySelectorAll(
  "#technology>.tech-content>.content-main>.circle-main>.circle"
);

techNav.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    document.querySelector(".circle-1").classList.remove("circleactive");
    techNav.forEach((navItem) => navItem.classList.remove("circleactive"));

    ele.classList.add("circleactive");
    const tech = data.technology[index];
    techDescription.textContent = tech.description;
    techName.textContent = tech.name;
    techImage.setAttribute("src", tech.images.portrait);
  });
});

// Main Navigation
const mainNav = document.querySelectorAll("header>nav>ul>li");
const mobNav = document.querySelectorAll("#menuToggle>ul>li");

// Combine both NodeLists into one array for iteration
const navItems = [...mainNav, ...mobNav];

navItems.forEach((ele, index) => {
  console.log("Mobile elem clicked");
  console.log(ele.innerHTML);

  ele.addEventListener("click", () => {
    document.querySelector(".home").classList.remove("navActive");

    // Remove navActive from all nav items
    navItems.forEach((navItem) => navItem.classList.remove("navActive"));

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
