document.addEventListener("DOMContentLoaded", function (event) {
  let startPerf = performance.now();
  console.log("Event fired", event);

  let t1 = gsap.timeline();

  let grid = document.querySelector(".navbar");
  let chart = document.getElementById("premiershipTable");

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

  function createNavLinks(title) {
    let liElements = document.createElement("li");
    liElements.innerHTML = title;
    return liElements;
  }
  let ulElements = document.getElementById("menu");

  ulElements.appendChild(createNavLinks(`<a href="#home" id="s1">HOME</a>`));
  ulElements.appendChild(createNavLinks(`<a href="#teams" id="s2" >TEAMS</a>`));
  ulElements.appendChild(
    createNavLinks(`<a href="#slides" id="s3" >SLIDES</a>`)
  );
  ulElements.appendChild(
    createNavLinks(`<a href="#premier" id="s4" >PREMIERSHIPS</a>`)
  );

  playAnimation();

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

  function addActiveClass() {
    let a = document.querySelector("a");
    // for (let i = 0; i < a.length; i++) {
    a.addEventListener("click", function (event) {
      event.preventDefault();
      a.classList.add("active");
    });
  }
  addActiveClass();

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

  // hovericon();

  //scroll to sections smoothly

  var h = document.getElementById("s1");

  let t = document.getElementById("s2");

  var sli = document.getElementById("s3");

  var pre = document.getElementById("s4");

  h.onclick = document.documentElement.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
  t.onclick = document.documentElement.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
  sli.onclick = document.documentElement.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
  pre.onclick = document.documentElement.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });

  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);

  // let scr = window.scrollY;
  // let another = window.scrollY;
  // console.log("scrolled page", another);
  // let scrollable = document.documentElement.scrollHeight;
  // console.log("scrolled page", scrollable);
  // let windowHeight = window.innerHeight;
  // console.log("Window height", windowHeight);

  var isInView = function (elem) {
    var distance = elem.getBoundingClientRect();
    console.log(distance);
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  let sectionsAll = document.querySelector("#home");

  window.addEventListener(
    "scroll",
    function (event) {
      if (isInView(sectionsAll)) {
        console.log("In view");
      } else {
        console.log("Not in view");
      }
    },
    false
  );
});
