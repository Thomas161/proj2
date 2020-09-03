document.addEventListener("DOMContentLoaded", function (event) {
  let startPerf = performance.now();
  console.log("Event fired", event);
  var t1 = gsap.timeline();
  var head = document.getElementById("prac");

  let playAnimation = function () {
    t1.fromTo(head, 0.9, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1 });
    t1.play();
  };
  playAnimation();
  let endPerf = performance.now();
  console.log(`Entire time in milliseconds : ${endPerf - startPerf} ms`);
});
