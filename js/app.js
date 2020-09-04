document.addEventListener("DOMContentLoaded", function (event) {
  let startPerf = performance.now();
  console.log("Event fired", event);
  var t1 = gsap.timeline();
  var topHead = document.querySelector(".topHeader");
  var shield = document.querySelector("#shield");
  var head = document.getElementById("prac");

  let playAnimation = function () {
    t1.fromTo(topHead, 2, { y: -200 }, { y: 0, delay: 1, ease: "bounce.out" });
    t1.fromTo(head, 0.7, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1.5 });
    t1.fromTo(shield, 0.7, { scaleX: 0 }, { scaleX: 1, delay: 1 });
    t1.play();
  };
  playAnimation();
  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);
});
