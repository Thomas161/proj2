document.addEventListener("DOMContentLoaded", function (event) {
  let startPerf = performance.now();
  console.log("Event fired", event);
  let t1 = gsap.timeline();

  let grid = document.querySelector(".navbar");
  let slides = document.querySelector(".slideshowContainer");
  let shield = document.querySelector("#shield");

  let chart = document.getElementById("premiershipTable");

  let playAnimation = function () {
    t1.fromTo(
      grid,
      1,
      { y: -200 },
      { y: 0, delay: 1, visibility: "visible", ease: "bounce.out" }
    );

    t1.fromTo(shield, 0.7, { scaleX: 0 }, { scaleX: 1, delay: 0.4 });
    t1.fromTo(slides, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.4 });

    t1.fromTo(chart, 0.7, { scaleY: 0 }, { scaleY: 1, delay: 0.4 });

    t1.play();
  };

  function createNavLinks(title) {
    let liElements = document.createElement("li");
    liElements.innerHTML = title;
    return liElements;
  }
  let ulElements = document.getElementById("menu");

  ulElements.appendChild(createNavLinks(`<a href="#home">HOME</a>`));
  ulElements.appendChild(createNavLinks(`<a href="#teams">TEAMS</a>`));
  ulElements.appendChild(createNavLinks(`<a href="#slides">SLIDES</a>`));
  ulElements.appendChild(createNavLinks(`<a href="#premier">PREMIERSHIPS</a>`));

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

  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);
});
/**************************************************************************************************** */
/**UNUSED CODE SNIPPETS */

/** 
 * 
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

   const modal = document.querySelector(".modal");
  const hoverRules = document.querySelector("#navbarIconsRules");
  const closeIcon = document.querySelector(".close");

  hoverRules.addEventListener("mouseover", (event) => {
    console.log("Event fired", event.target);
    modal.style.display = "block";
  });
  closeIcon.addEventListener("click", (evt) => {
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target) {
      modal.style.display = "none";
    }
  };
  let section1 = document.getElementsByClassName(grid);

  let items = document.querySelector(".navbar");

  items.appendChild(ulElements).appendChild(liElements);
    console.log(individual);

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


fution changeBackground() {
   console.dir("Event fired", event);
  let secondColumn, pTags;
  try {
    secondColumn = document.querySelector("#separate");
    const list = ["colTwo", "changeFontColorOver"];
    secondColumn.classList.add(...list);
    pTags = document.getElementsByTagName("p");
    for (let i = 0; i < pTags.length; i++) {
      pTags[i].style.color = "#fff";
    }
  } catch (error) {
    console.log(error.stack);
  }
  return secondColumn, pTags;
}
function changeBack() {
  // console.log("Event fired", event);
  let secondColumn, pTags;
  try {
    secondColumn = document.querySelector("#separate");
    secondColumn.classList.remove("colTwo");
    pTags = document.querySelectorAll("p");
    for (let i = 0; i < pTags.length; i++) {
      pTags[i].style.color = "#000";
    }
  } catch (error) {
    console.log(error.stack);
  }
  return secondColumn, pTags;
}
*/
