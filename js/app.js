document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Event fired", event);

  /**Global Variables */
  let startPerf = performance.now();
  let sectionsAll = document.querySelectorAll("section");
  let myButton = document.getElementById("goTop");
  let ulElements = document.getElementById("menu");
  let aTags = document.getElementsByTagName("a");
  /**GREENSOCK ANIMATIONS (new gsap timeline)*/
  let t1 = gsap.timeline();
  let grid = document.querySelector(".navbar");
  let chart = document.getElementById("premiershipTable");
  // console.log("Length of sections : ", sectionsAll.length);// length = 4
  // console.log("Sections : ", sectionsAll); //section HTML collections

  /**Check if section in viewport */

  // function isInView(elem) {
  //   var distance = elem.getBoundingClientRect();
  //   // console.log(distance);
  //   return (
  //     distance.top >= 0 &&
  //     distance.left >= 0 &&
  //     distance.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     distance.right <=
  //       (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  // window.addEventListener("scroll", isInView(sectionsAll));

  let playAnimation = function () {
    t1.fromTo(
      grid,
      1,
      { y: -200 },
      { y: 0, delay: 1, visibility: "visible", ease: "bounce.out" }
    );

    t1.fromTo(chart, 0.7, { scaleY: 0 }, { scaleY: 1, delay: 0.4 });

    t1.play();
  };
  playAnimation();

  /**NAVBAR LINKS */
  function createNavLinks(title) {
    let liElements = document.createElement("li");
    liElements.innerHTML = title;
    return liElements;
  }

  ulElements.appendChild(
    createNavLinks(`<a href="#home"  id="first">HOME</a>`)
  );
  ulElements.appendChild(
    createNavLinks(`<a href="#teams"  id="second" >TEAMS</a>`)
  );
  ulElements.appendChild(
    createNavLinks(`<a href="#slides"  id="third" >SLIDES</a>`)
  );
  ulElements.appendChild(
    createNavLinks(`<a href="#premier" id="fourth" >PREMIERSHIPS</a>`)
  );

  /**Modal List */
  function createRules(list) {
    const elem = document.createElement("li");
    elem.innerHTML = list;
    return elem;
  }
  let ulElement = document.querySelector("#rules");
  let players, objective, scoring, ball, scrum;
  players = "17 Players per side, 13 on field at a time, 4 on the bench";
  objective = "Objective of game is to outscore other side";
  scoring = `Scoring points:
  <strong
    >4 points awarded for try, 2 points for successful try
    conversion, 2 points for a penalty goal, and 1 for a field
    goal</strong
  >`;
  ball =
    "Ball is passed between players, but must be passed backward,\n failure to do so results in a forward pass/penalty to other side";
  scrum =
    "If ball carrier loses the ball and hits the ground in front of\n him, a knock on is called and a scrum is formed";

  ulElement.appendChild(createRules(players));
  ulElement.appendChild(createRules(objective));
  ulElement.appendChild(createRules(scoring));
  ulElement.appendChild(createRules(ball));
  ulElement.appendChild(createRules(scrum));

  /**JQuery scroll to section */
  $("#first").on("click", function (e) {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  });
  $("#second").on("click", function (e) {
    e.preventDefault();
    document.querySelector("#teams").scrollIntoView({ behavior: "smooth" });
  });
  $("#third").on("click", function (e) {
    e.preventDefault();
    document.querySelector("#slides").scrollIntoView({ behavior: "smooth" });
  });
  $("#fourth").on("click", function (e) {
    e.preventDefault();
    document.querySelector("#premier").scrollIntoView({ behavior: "smooth" });
  });

  function addActiveClass() {
    for (let i = 0; i < sectionsAll.length; i++) {
      aTags[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        // console.log(current);
        if (current.length > 0) {
          current[0].className = current[0].className.replace("active", "");
        } else {
          this.className = " active";
        }
      });
    }
  }
  document.addEventListener("scroll", function () {
    addActiveClass();
  });

  /**NRL LOGO POP UP/POP BACK SCALE EFFECT */
  let timelineLogo = gsap.timeline();
  const hovericon = () => {
    timelineLogo.fromTo(
      nrlLogo,
      0.2,
      { scale: 1 },
      { scale: 1.1, boxShadow: "5px 10px 8px #888888" }
    );
    timelineLogo.play();
  };
  const hovericonOut = () => {
    timelineLogo.fromTo(
      nrlLogo,
      0.2,
      { scale: 1.1 },
      { scale: 1, boxShadow: "none" }
    );
    timelineLogo.play();
  };
  const nrlLogo = document.getElementById("nrl");
  nrlLogo.addEventListener("mouseover", hovericon, true);
  nrlLogo.addEventListener("mouseout", hovericonOut, true);

  window.onscroll = () => {
    scrollFunc();
  };

  function scrollFunc() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

  myButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);
});
