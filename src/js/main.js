(function () {
  // let circles = document.querySelectorAll('circle');
  // let inner = document.querySelector('.inner');
  // let box = document.querySelector('.box');

  // let boxCR = box.getBoundingClientRect();
  // let innerCR = inner.getBoundingClientRect();
  // inner.style.transform = `translate3d(${(boxCR.width - 1.5*innerCR.width)/2}px, ${(boxCR.height - 1.5*innerCR.height)/2}px, 0)`;

  // const randomInt = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // const circlesArray = Array.from(circles);
  // const greyCircles = circlesArray.filter((c) => c.classList.contains('grey-dot'));
  // const orangeCircles = circlesArray.filter((c) => c.classList.contains('orange-dot'));

  // circlesArray.forEach((circle) => {
  //   dynamics.css(circle, {
  //     translateX: 55,
  //     translateY: 55,
  //     opacity: 0,
  //     scale: 0.1
  //   });
  // });

  // function enterDots (dots, cb) {
  //   dots.forEach((circle, idx) => {
  //     dynamics.animate(circle, {
  //       translateX: 0,
  //       translateY: 0,
  //       opacity: 1,
  //       scale: 1.5
  //     }, {
  //       type: dynamics.gravity,
  //       duration: 600,
  //       bounciness: 200,
  //       elasticity: 50,
  //       delay: idx*50,
  //       complete: cb
  //     });
  //   });
  // }

  // function intro () {
  //   enterDots(greyCircles, enterDots.bind(null, orangeCircles));
  // }

  // dynamics.setTimeout(intro, 500);

  const $tutorial1 = $('.tutorial');
  const $tutorial2 = $('.tutorial-part--two');


  const $terminal1 = $tutorial1.find('.terminal-line');
  const $terminal2 = $tutorial2.find('.terminal-line');

  $tutorial1.waypoint({
    handler: () => {
      $terminal1.typed({
        strings: [ $terminal1.data('text') ],
        typeSpeed: 30,
        startDelay: 100,
        callback: () => {
          const $resp = $tutorial1.find('.terminal-response');
          $resp.addClass('is-visible');
        }
      });
    }
  });

  const initTerminals = () => {

  };

  const $subtitle = $('.hero-subtitle');
  $subtitle.typed({
    strings: [ $subtitle.data('text') ],
    typeSpeed: 30,
  });

})();
