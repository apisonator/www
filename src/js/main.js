(() => {
  const circles = document.querySelectorAll('circle');
  const inner = document.querySelector('.inner');
  const box = document.querySelector('.box');
  const $tutorial = $('.tutorial');
  const $tutorialParts = $('.tutorial-part');
  const $subtitle = $('.hero-subtitle');

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const enterDots = (dots, cb) => {
    dots.forEach((circle, idx) => {
      dynamics.animate(circle, {
        translateX: 0,
        translateY: 0,
        opacity: 1,
        scale: 1.5
      }, {
        type: dynamics.gravity,
        duration: 600,
        bounciness: 200,
        elasticity: 50,
        delay: idx*50,
        complete: cb
      });
    });
  };

  const initResponse = (tutorialPart) => {
    const $resp = $(tutorialPart).find('.terminal-response');
    $resp.addClass('is-visible');
  };

  const initTerminals = () => {
    $tutorialParts.each((idx, part) => {
      $terminal = $(part).find('.terminal-line');
      $terminal.typed({
        strings: [ $terminal.data('text') ],
        typeSpeed: 30,
        startDelay: 100 + 1500*idx,
        callback: initResponse.bind(null, part)
      });
    });
  };

  // start

  const boxCR = box.getBoundingClientRect();
  const innerCR = inner.getBoundingClientRect();
  inner.style.transform = `translate3d(${(boxCR.width - 1.5*innerCR.width)/2}px, ${(boxCR.height - 1.5*innerCR.height)/2}px, 0)`;

  const circlesArray = Array.from(circles);
  const greyCircles = circlesArray.filter((c) => c.classList.contains('grey-dot'));
  const orangeCircles = circlesArray.filter((c) => c.classList.contains('orange-dot'));

  circlesArray.forEach((circle) => {
    dynamics.css(circle, {
      translateX: 55,
      translateY: 55,
      opacity: 0,
      scale: 0.1
    });
  });

  const introScene = () => {
    enterDots(greyCircles, () => {
      enterDots(orangeCircles, () => {
        dynamics.setTimeout(() => {
          box.classList.add('is-hidden');
          $subtitle.typed({
            strings: [ $subtitle.data('text') ],
            typeSpeed: 30,
            startDelay: 900
          });
          $tutorial.waypoint({ handler: initTerminals });
        }, 800);
      })
    });
  };

  dynamics.setTimeout(introScene, 500);

})();
