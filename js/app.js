document.addEventListener("DOMContentLoaded", function (event) {
  let startPerf = performance.now();
  console.log("Event fired", event);
  let t1 = gsap.timeline();

  let topHead = document.querySelector(".topHeader");
  let grid = document.querySelector(".gridNavbar");
  let slides = document.querySelector(".slideshowContainer");
  let shield = document.querySelector("#shield");
  let head = document.getElementById("prac");
  let one = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let fourth = document.getElementById("fourth");
  let fifth = document.getElementById("fifth");
  let sixth = document.getElementById("sixth");
  let seventh = document.getElementById("seventh");
  let eigth = document.getElementById("eigth");
  let ninth = document.getElementById("ninth");
  let tenth = document.getElementById("tenth");
  let eleventh = document.getElementById("eleventh");
  let twelfth = document.getElementById("twelfth");
  let thirteenth = document.getElementById("thirteenth");
  let fourteenth = document.getElementById("fourteenth");
  let fifteenth = document.getElementById("fifteenth");
  let sixteenth = document.getElementById("sixteenth");
  let seventeenth = document.getElementById("seventeenth");
  let eighteenth = document.getElementById("eighteenth");
  let nineteenth = document.getElementById("nineteenth");
  let twentieth = document.getElementById("twentieth");
  let twentyfirst = document.getElementById("twentyfirst");
  let foot = document.querySelector(".footerContainer");

  let playAnimation = function () {
    t1.fromTo(topHead, 1, { y: -200 }, { y: 0, delay: 1, ease: "bounce.out" });
    t1.fromTo(head, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1 });
    t1.fromTo(
      grid,
      0.7,
      { x: -400 },
      { x: 0, delay: 0.4, ease: "back.out(1.5)" }
    );
    t1.fromTo(shield, 0.7, { scaleX: 0 }, { scaleX: 1, delay: 0.4 });
    t1.fromTo(slides, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.4 });
    t1.fromTo(foot, 0.7, { autoAlpha: 0 }, { autoAlpha: 1 });
    t1.staggerFromTo(
      one,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      second,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      third,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      fourth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      fifth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      sixth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      seventh,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      eigth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      ninth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      tenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      eleventh,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      twelfth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      thirteenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      fourteenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      fifteenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      sixteenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      seventeenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      eighteenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      nineteenth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      twentieth,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );
    t1.staggerFromTo(
      twentyfirst,

      0.3,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
        stagger: 0.2,
      }
    );

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

  // showSlides();

  // function showSlides() {
  //   let slideIndex = 0;
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "block";
  //   }

  //   slideIndex++;
  //   // slides[slideIndex - 1].style.display = "block";
  //   setTimeout(showSlides, 4000);
  // }

  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);
});
