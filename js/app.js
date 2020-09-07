document.addEventListener("DOMContentLoaded", function (event) {
  let startPerf = performance.now();
  console.log("Event fired", event);
  let t1 = gsap.timeline();
  // let imageTimeline = gsap.timeline();
  let topHead = document.querySelector(".topHeader");
  let grid = document.querySelector(".gridNavbar");
  let slides = document.querySelector(".mySlides");
  let shield = document.querySelector("#shield");
  let head = document.getElementById("prac");
  let raids = document.getElementById("raider_pic");
  let dufty = document.getElementById("dufty_pic");
  let lockyer = document.getElementById("lockyer_pic");

  let playAnimation = function () {
    t1.fromTo(topHead, 2, { y: -200 }, { y: 0, delay: 1, ease: "bounce.out" });
    t1.fromTo(head, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1.5 });
    t1.fromTo(grid, 0.7, { y: 600 }, { y: 0, delay: 1.3 });
    t1.fromTo(shield, 0.7, { scaleX: 0 }, { scaleX: 1, delay: 0.5 });
    t1.fromTo(slides, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.7 });

    t1.fromTo(raids, 0.7, { x: 500 }, { x: 0, opacity: 1, delay: 0.7 });
    t1.to(raids, 0.7, { x: -500, delay: 2 });
    t1.fromTo(dufty, 0.7, { x: 500 }, { x: 0, opacity: 1, delay: 0.7 });
    t1.to(dufty, 0.7, { x: -500, delay: 2 });
    t1.fromTo(lockyer, 0.7, { x: 500 }, { x: 0, opacity: 1, delay: 0.7 });
    t1.to(lockyer, 0.7, { x: -500, delay: 2 });
    t1.play();
  };

  let items = document.querySelector(".navbarItems");
  let individual = items.getElementsByTagName("li");
  //   console.log(individual);

  for (let i = 0; i < individual.length; i++) {
    console.log("list of list items", individual[i]);
    individual[i].addEventListener("mouseover", function (event) {
      event.target.style.color = "red";
    });
  }
  for (let i = 0; i < individual.length; i++) {
    console.log("list of list items", individual[i]);
    individual[i].addEventListener("mouseout", function (event) {
      console.log("Event fired", event);
      event.target.style.color = "white";
    });
  }
  const navbarSideItems = document.querySelector("#navbarIconsTeam");
  const navbarTeams = document.getElementById("teams");
  const navbarTeams2 = document.getElementById("team2");
  console.log("Navbar Parent", navbarSideItems);
  console.log("Navbar Child", navbarTeams);
  console.log("Navbar Child", navbarTeams2);
  navbarSideItems.addEventListener("mouseover", (evt) => {
    console.log("Event fired", evt);
    navbarTeams.style.visibility = "visible";
    navbarTeams2.style.visibility = "visible";
  });
  navbarSideItems.addEventListener("mouseout", (evt) => {
    console.log("Event fired", evt);
    navbarTeams.style.visibility = "hidden";
    navbarTeams2.style.visibility = "hidden";
  });

  playAnimation();
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let index;
    let slides = document.getElementsByClassName("mySlides");
    for (index = 0; index < slides.length; index++) {
      slides[index].style.display = "none";
    }

    slideIndex++;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
  }

  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);
});
