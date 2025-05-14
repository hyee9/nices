function initIntro_index() {
  gsap.delayedCall(0.3, initBannerUnmaskCustomTrigger);
  gsap.delayedCall(0.3, initScrollTriggers_index);
  gsap.delayedCall(0.3, initLocalPageTriggers2);
}

function initScrollTriggers_index() {
  initIndexCareerSlider();
}

function setColorValue() {
  var color;

  if (document.body.classList.contains('is-light')) {
    color = ' 4px solid #000';
  } else {
    color = '4px solid red';
  } // let color = isDarkMode ? '4px solid #fff' : ' 4px solid #000';


  return color;
}

function initFullWindowSlider() {
  if (isMobile) return;
  var coverTitle = document.querySelector('.section-3 .cover-element h4');

  var _direction;

  if (document.body.classList.contains('is-light')) {
    gsap.set(coverTitle, {
      color: '#000'
    });
  }

  var scrollamount = 10000;
  var tl_pinslider = gsap.timeline({
    defaults: {
      duration: 1
    },
    scrollTrigger: {
      trigger: '.section-3',
      pin: true,
      start: 'top top',
      // when the top of the trigger hits the top of the viewport
      end: '+=' + scrollamount + 'px',
      // end after scrolling 500px beyond the start
      scrub: 0.5,
      id: 'main',
      pintype: 'transform',
      onUpdate: function onUpdate(self) {
        if (_direction == self.direction) return;
        _direction = self.direction;
      },
      onEnter: function onEnter(self) {
        if (isToScrollTrigger) return;
        self.refresh();
      },
      onToggle: function onToggle(self) {
        if (self.isActive) {
          document.body.classList.add('is-bg-hide');
        } else {
          document.body.classList.remove('is-bg-hide');
        }
      },
      onScrubComplete: function onScrubComplete(self) {
        if (self.isActive == false) {
          coverTitle.classList.remove('is-inverted');
        } else {
          coverTitle.classList.add('is-inverted');
        }
      }
    }
  }); // add animations and labels to the timeline

  tl_pinslider.addLabel('start');

  if (!isMobile) {
    tl_pinslider.to(coverTitle, {
      border: 'none',
      onUpdate: function onUpdate() {
        gsap.to(coverTitle, {
          color: function color() {
            return isDarkMode ? '#fff' : '#000';
          }
        });
      }
    });
    tl_pinslider.to('.section-3 .cover-element .banner', {
      width: '100%',
      height: '100%',
      marginTop: 0,
      marginLeft: 0,
      ease: 'power2.inOut',
      onUpdate: function onUpdate() {
        if (_direction == -1) {
          if (coverTitle.classList.contains('is-inverted')) {
            coverTitle.classList.remove('is-inverted');
          }
        } else {
          if (!coverTitle.classList.contains('is-inverted')) {
            coverTitle.classList.add('is-inverted');
          }
        }
      }
    }, 'start');
    tl_pinslider.to('.section-3 .cover-element .banner', {
      xPercent: -50,
      yPercent: -50,
      ease: 'power2.inOut'
    }, 'start');
    tl_pinslider.to(coverTitle, {
      marginTop: 0,
      marginBottom: 60,
      y: 0,
      ease: 'power2.inOut'
    }, 'start');
    tl_pinslider.to(coverTitle, {
      color: '#fff',
      onUpdate: function onUpdate() {
        if (_direction == 1) {
          gsap.killTweensOf(coverTitle, 'color');
        }
      }
    }, 'start');
    tl_pinslider.to('.section-3 .cover-element .text-group', {
      marginTop: '30px',
      color: 'white',
      ease: 'power2.inOut',
      onStart: function onStart() {
        coverTitle.classList.add('is-inverted');
      }
    }, 'start');
    tl_pinslider.to('.section-3 .cover-element .text-desc', {
      color: 'white',
      ease: 'power2.inOut'
    }, 'start');
    tl_pinslider.to('.section-3 .cover-element .button', {
      opacity: 1,
      ease: 'power2.inOut',
      onComplete: function onComplete() {
        gsap.set('.section-3 .cover-element', {
          pointerEvents: 'none'
        });
        gsap.set('.section-3 .index-swiper', {
          pointerEvents: 'auto'
        });
        document.body.classList.add('invert-color');
        gsap.to('.section-index-fullslider .swiper-pagination', {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.2,
          ease: 'power1.inOut'
        });
      }
    }, 'start');
    tl_pinslider.addLabel('switch');
    tl_pinslider.to('.section-3 .cover-element', {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    }, 'switch');
    tl_pinslider.to('.section-3 .swiper', {
      opacity: 1,
      onStart: function onStart() {},
      onReverseComplete: function onReverseComplete() {
        document.body.classList.remove('invert-color');
        gsap.set('.section-3 .cover-element', {
          pointerEvents: 'auto'
        });
        gsap.set('.section-3 .index-swiper', {
          pointerEvents: 'none'
        });
      }
    }, 'switch');
  } // pause


  tl_pinslider.to('.section-3', {
    duration: 0.8,
    onStart: function onStart() {
      gsap.set('.section-3 .cover-element', {
        pointerEvents: 'none'
      });
      gsap.set('.section-3 .index-swiper', {
        pointerEvents: 'auto'
      });
    },
    onReverseComplete: function onReverseComplete() {
      gsap.to('.section-index-fullslider .swiper-pagination', {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2,
        ease: 'power1.inOut'
      });

      if (isMobile) {
        gsap.set('.section-3 .cover-element', {
          pointerEvents: 'auto'
        });
        gsap.set('.section-3 .index-swiper', {
          pointerEvents: 'none'
        });
      }
    }
  });
  tl_pinslider.addLabel('slide0to1');
  tl_pinslider.fromTo('.section-3 .swiper-slide-1', {
    y: '100%'
  }, {
    y: 0
  }, 'slide0to1');
  tl_pinslider.fromTo('.section-3 .swiper-slide-1 .text-title', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.3,
    ease: 'power1.inOut'
  }, 'slide0to1');
  tl_pinslider.fromTo('.section-3 .swiper-slide-1 .text-smalltitle', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.4,
    ease: 'power1.inOut'
  }, 'slide0to1');
  tl_pinslider.fromTo('.section-3 .swiper-slide-1 .text-desc', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.45,
    ease: 'power1.inOut'
  }, 'slide0to1');
  tl_pinslider.fromTo('.section-3 .swiper-slide-1 .button', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.6,
    ease: 'power1.inOut'
  }, 'slide0to1');
  tl_pinslider.fromTo('.section-3 .swiper-slide-1 .text-title', {
    y: 50
  }, {
    y: 0,
    delay: 0.3,
    ease: 'power2.out'
  }, 'slide0to1');
  tl_pinslider.to('.section-3 .swiper-slide-0 .banner', {
    y: '-40%',
    ease: 'power1.inOut',
    onReverseComplete: function onReverseComplete() {
      document.querySelectorAll('.swiper-pagination li')[0].classList.add('active');
      document.querySelectorAll('.swiper-pagination li')[1].classList.remove('active');
    },
    onComplete: function onComplete() {
      document.querySelectorAll('.swiper-pagination li')[0].classList.remove('active');
      document.querySelectorAll('.swiper-pagination li')[1].classList.add('active');
    }
  }, 'slide0to1'); // pause

  tl_pinslider.to('.section-3', {
    duration: 0.8
  });
  tl_pinslider.addLabel('slide1to2');
  tl_pinslider.fromTo('.section-3 .swiper-slide-2', {
    y: '100%'
  }, {
    y: 0
  }, 'slide1to2');
  tl_pinslider.fromTo('.section-3 .swiper-slide-2 .text-title', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.3,
    ease: 'power1.inOut'
  }, 'slide1to2');
  tl_pinslider.fromTo('.section-3 .swiper-slide-2 .text-smalltitle', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.4,
    ease: 'power1.inOut'
  }, 'slide1to2');
  tl_pinslider.fromTo('.section-3 .swiper-slide-2 .text-desc', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.45,
    ease: 'power1.inOut'
  }, 'slide1to2');
  tl_pinslider.fromTo('.section-3 .swiper-slide-2 .button', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.6,
    ease: 'power1.inOut'
  }, 'slide1to2');
  tl_pinslider.fromTo('.section-3 .swiper-slide-2 .text-title', {
    y: 50
  }, {
    y: 0,
    delay: 0.3,
    ease: 'power2.out'
  }, 'slide1to2');
  tl_pinslider.to('.section-3 .swiper-slide-1 .banner', {
    y: '-40%',
    ease: 'power1.inOut',
    onReverseComplete: function onReverseComplete() {
      document.querySelectorAll('.swiper-pagination li')[1].classList.add('active');
      document.querySelectorAll('.swiper-pagination li')[2].classList.remove('active');
    },
    onComplete: function onComplete() {
      document.querySelectorAll('.swiper-pagination li')[1].classList.remove('active');
      document.querySelectorAll('.swiper-pagination li')[2].classList.add('active');
    }
  }, 'slide1to2'); // pause

  tl_pinslider.to('.section-3', {
    duration: 0.8
  });
  tl_pinslider.to({}, {
    duration: 0.2
  });
  tl_pinslider.addLabel('slide2to3');
  tl_pinslider.fromTo('.section-3 .swiper-slide-3', {
    y: '100%'
  }, {
    y: 0
  }, 'slide2to3');
  tl_pinslider.fromTo('.section-3 .swiper-slide-3 .text-title', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.3,
    ease: 'power1.inOut'
  }, 'slide2to3');
  tl_pinslider.fromTo('.section-3 .swiper-slide-3 .text-smalltitle', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.4,
    ease: 'power1.inOut'
  }, 'slide2to3');
  tl_pinslider.fromTo('.section-3 .swiper-slide-3 .text-desc', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.45,
    ease: 'power1.inOut'
  }, 'slide2to3');
  tl_pinslider.fromTo('.section-3 .swiper-slide-3 .button', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.6,
    ease: 'power1.inOut'
  }, 'slide2to3');
  tl_pinslider.fromTo('.section-3 .swiper-slide-3 .text-title', {
    y: 50
  }, {
    y: 0,
    delay: 0.3,
    ease: 'power2.out'
  }, 'slide2to3');
  tl_pinslider.to('.section-3 .swiper-slide-2 .banner', {
    y: '-40%',
    ease: 'power1.inOut',
    onReverseComplete: function onReverseComplete() {
      document.querySelectorAll('.swiper-pagination li')[2].classList.add('active');
      document.querySelectorAll('.swiper-pagination li')[3].classList.remove('active');
    },
    onComplete: function onComplete() {
      document.querySelectorAll('.swiper-pagination li')[2].classList.remove('active');
      document.querySelectorAll('.swiper-pagination li')[3].classList.add('active');
    }
  }, 'slide2to3'); // pause

  tl_pinslider.to('.section-3', {
    duration: 0.8
  });
  tl_pinslider.addLabel('slide3to4');
  tl_pinslider.to('.section-3 .swiper-slide-4', {
    y: 0
  }, 'slide3to4');
  tl_pinslider.fromTo('.section-3 .swiper-slide-4 .text-group', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.2
  }, 'slide3to4');
  tl_pinslider.to('.section-3 .swiper-slide-4', {
    duration: 0.01,
    opacity: 1,
    onStart: function onStart() {
      document.body.classList.remove('invert-color');
      gsap.to('.section-index-fullslider .swiper-pagination', {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.2,
        ease: 'power1.inOut'
      });
    },
    onReverseComplete: function onReverseComplete() {
      document.body.classList.add('invert-color');
      gsap.to('.section-index-fullslider .swiper-pagination', {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.2,
        ease: 'power1.inOut'
      });
    }
  }); // click on slider pagination

  var _loop = function _loop(i) {
    pagination_button = document.querySelectorAll('.swiper-pagination button')[i];

    pagination_button.onclick = function () {
      scrollToSlide(i);
    };
  };

  for (var i = 0; i < document.querySelectorAll('.swiper-pagination button').length; i++) {
    _loop(i);
  } // scroll to correct slide when keyboard focusses on its buttons


  var _loop2 = function _loop2(_i) {
    button = document.querySelectorAll('.index-swiper .viewmore')[_i];

    button.onfocus = function () {
      scrollToSlide(_i);
    };
  };

  for (var _i = 0; _i < document.querySelectorAll('.index-swiper .viewmore').length; _i++) {
    var button;

    _loop2(_i);
  }

  function scrollToSlide(index) {
    var startofslider = -document.querySelector('.section-2').getBoundingClientRect().height - 200;
    var section2 = document.querySelector('.section-2').offsetTop;

    if (index == 0) {
      var pos = tl_pinslider.labels.slide0to1 / tl_pinslider.duration() * scrollamount;
      gsap.to(scrollElement, {
        duration: 0.4,
        scrollTo: {
          y: section2,
          offsetY: startofslider - pos + 5
        },
        ease: 'pow2.Out'
      });
    } else if (index == 1) {
      var pos = tl_pinslider.labels.slide1to2 / tl_pinslider.duration() * scrollamount;
      gsap.to(scrollElement, {
        duration: 0.4,
        scrollTo: {
          y: section2,
          offsetY: startofslider - pos + 5
        },
        ease: 'pow2.Out'
      });
    } else if (index == 2) {
      var pos = tl_pinslider.labels.slide2to3 / tl_pinslider.duration() * scrollamount;
      gsap.to(scrollElement, {
        duration: 0.4,
        scrollTo: {
          y: section2,
          offsetY: startofslider - pos + 5
        },
        ease: 'pow2.Out'
      });
    } else if (index == 3) {
      var pos = tl_pinslider.labels.slide3to4 / tl_pinslider.duration() * scrollamount;
      gsap.to(scrollElement, {
        duration: 0.4,
        scrollTo: {
          y: section2,
          offsetY: startofslider - pos + 5
        },
        ease: 'pow2.Out'
      });
    }
  }
}

var current_career_slide = 0;
var career_slide_length = document.querySelectorAll('.section-index-careers .single-slide').length;
var career_slider_inview = false;
var career_slider_animating = false;
var career_interval;

function initIndexCareerSlider() {
  // check if index careers is in view
  ScrollTrigger.create({
    trigger: '.section-index-careers',
    start: 'top 85%',
    onToggle: function onToggle(self) {
      career_slider_inview = self.isActive;
    }
  }); // check if index careers is in view

  ScrollTrigger.create({
    trigger: '.section-index-careers',
    start: 'top 85%',
    onToggle: function onToggle(self) {
      career_slider_inview = self.isActive;
    }
  });
  ScrollTrigger.create({
    trigger: '.section-index-careers',
    start: 'top 85%',
    once: true,
    onEnter: function onEnter(self) {}
  });
}

function hideSlide() {
  gsap.to('.section-index-careers .slide-' + current_career_slide + ' .slider-fadegroup', {
    opacity: 0,
    display: 'none',
    duration: 0.6,
    onComplete: function onComplete() {
      document.querySelector('.section-index-careers .slide-' + current_career_slide).classList.remove('active-actual');
    }
  });
  gsap.delayedCall(0, maskSlide, [document.querySelector('.section-index-careers .slide-' + current_career_slide)]);
}

function showSlide() {
  document.querySelector('.section-index-careers .slide-' + current_career_slide).classList.add('active-actual');
  gsap.set('.section-index-careers .slide-' + current_career_slide + ' .banner', {
    opacity: 1
  });
  gsap.to('.section-index-careers .slide-' + current_career_slide + ' .slider-fadegroup', {
    opacity: 1,
    display: 'block',
    duration: 0.6
  });
  gsap.delayedCall(0.3, unmaskSlide, [document.querySelector('.section-index-careers .slide-' + current_career_slide)]);
}

function unmaskSlide(slide) {
  gsap.to(slide.querySelectorAll('.mask-item'), {
    scaleX: 0,
    duration: 0.3,
    stagger: 0.1
  });
}

function maskSlide(slide) {
  gsap.to(slide.querySelectorAll('.mask-item'), {
    scaleX: 1,
    duration: 0.3,
    stagger: 0.1,
    onComplete: function onComplete() {
      gsap.set(slide.querySelector('.banner'), {
        opacity: 0
      });
    }
  });
}

function prevIndexSlide() {
  hideSlide();

  if (current_career_slide - 1 < 0) {
    current_career_slide = career_slide_length - 1;
  } else {
    current_career_slide--;
  }

  gsap.delayedCall(1, showSlide);
}

function nextIndexSlide() {
  hideSlide();

  if (current_career_slide + 1 > career_slide_length - 1) {
    current_career_slide = 0;
  } else {
    current_career_slide++;
  }

  gsap.delayedCall(1, showSlide);
}

document.querySelector('.section-index-careers .prev-slide').onclick = function () {
  prevIndexSlide();
};

document.querySelector('.section-index-careers .next-slide').onclick = function () {
  nextIndexSlide();
};

function create_slider_interval() {
  career_interval = setInterval(nextIndexSlide, 5000);
}

function initLocalPageTriggers() {
  // section-index-stats title text fade trigger
  return;
}

initIntro_index(); // API

function makeNewsList(list) {
  var wrap = document.querySelector('.news-list');
  var container = document.createElement('li');
  container.classList.add('single-news-li');
  container.innerHTML = "\n        <a href=\"/ko/news/newsdetail?id=".concat(list.id, "&page=1\" class=\"hover-arrow\" data-type=\"board\">\n            <div class=\"news-meta\">\n                <span class=\"meta-source\">").concat(list.affiliate, "</span>\n            </div>\n            <div class=\"news-title-wrap\">\n                <span class=\"news-title\">").concat(list.title, "</span>\n                <div class=\"arrow-transtion\">\n                    <img class=\"arr-list\" src=\"/resources/assets/svg/icon-arrow-mobile-2-white.svg\">\n                    <img class=\"arr-list list-last\" src=\"/resources/assets/svg/icon-arrow-mobile-2-white.svg\">\n                </div>\n            </div>\n        </a>\n    ");
  var button = container.querySelector('a');
  arrowTranstion(button);
  wrap.appendChild(container);
}

function completeLoadNews(res) {
  res.data.results.map(function (result, i) {
    if (i > 3) return;
    makeNewsList(result);
  });
}

function completeLoadStock(res) {
  // F02133 - 현재가
  // F15006 - 등락여부
  // F15472 - 전일대비
  // F15004 - 등락률
  // UPDATE_TIME - 조회 일자
  var stock = document.querySelector('.stock-delta');
  var rate = res.data['F15006'];

  if (rate == 1) {
    stock.classList.add('positive');
  } else if (rate == -1) {
    stock.classList.add('negative');
  }

  document.querySelector('.stock-number').innerText = commasToNumber(res.data['F15001']);
  document.querySelector('.stock-value').innerText = "".concat(res.data['F15472'], " (").concat(res.data['F15004'], "%)");
  document.querySelector('.stock-date').innerText = "KRX ".concat(changeDateWithDot(res.data['UPDATE_TIME']));
}

function requestLoadData() {
  var connectNews = new ConnectManager('news?is_pinned=True', completeLoadNews);
  connectNews.serverData();
  var connectStock = new ConnectManager('investment/stock/basic', completeLoadStock);
  connectStock.serverData();
}

requestLoadData();
var main_modal = document.querySelector('#main-modal');
var main_modalDim = main_modal.querySelector('.dim');
var main_modalHeader = main_modal.querySelector('.modal-title__container');
var main_modalContainer = main_modal.querySelector('.modal-container');
var main_modalBody = main_modal.querySelector('.modal-body__container');

function openMainModal() {
  var modalTl = gsap.timeline();
  smoothScrollControler(true);
  scrollDisable();
  modalTl.set(main_modal, {
    display: 'block'
  }).addLabel('start').addLabel('dimStart', 'start').addLabel('containerStart', 'dimStart+=.0').addLabel('bodyStart', 'containerStart+=.1').to(main_modalDim, {
    opacity: 1,
    ease: 'Power1.inOut',
    duration: 0.3
  }, 'dimStart').to(main_modalContainer, {
    opacity: 1,
    ease: 'Power1.inOut',
    duration: 0.2
  }, 'containerStart').to(main_modalBody, {
    opacity: 1,
    ease: 'Power1.inOut',
    duration: 0.2
  }, 'bodyStart').to(main_modalHeader, {
    opacity: 1,
    ease: 'Power1.inOut',
    duration: 0.2
  }, 'bodyStart');
}

var closeMainModal = function closeMainModal(e) {
  if (e.target.classList.contains('main-modal-close-btn') || e.target.classList.contains('modal-container')) {
    smoothScrollControler(false);
    var modalTl = gsap.timeline();
    modalTl.addLabel('start').addLabel('containerStart', 'start').addLabel('dimStart', 'containerStart+=.2').to(main_modalDim, {
      opacity: 0,
      ease: 'Power1.inOut',
      duration: 0.3
    }, 'dimStart').to(main_modalContainer, {
      opacity: 0,
      ease: 'Power1.inOut',
      duration: 0.3,
      onComplete: function onComplete() {
        // main_modalBody.scrollTop = 0;
        scrollEnable();
      }
    }, 'containerStart').set(main_modal, {
      display: 'none'
    }).set(main_modalBody, {
      opacity: 0
    });
  }
};

main_modal.addEventListener('click', closeMainModal); // document.addEventListener("DOMContentLoaded", function () {
//     openMainModal();
// });