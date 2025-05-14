function initLocalPageTriggers2() {
  initSection2();
  initSection3();
  initSectionStats();
  initFullWindowSlider();

  if (lang == 'ko') {
    initSectionNews();
  }

  initSectionCareers();
  initSectionStock();
}

var video = document.getElementById('main_video');

video.oncanplaythrough = function () {
  isCanPlay = true;
};

var isCanPlay = false; // SECION === 1

function initBannerUnmaskCustomTrigger() {
  var section = document.querySelector('.section-index-intro');
  gsap.set(section.querySelectorAll('.text-desc'), {
    opacity: 1
  });

  if (isMobile) {
    var tl = gsap.timeline();
    tl.addLabel('mask');
    tl.to(section.querySelectorAll('.mask-item'), {
      scaleX: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: -0.09,
      onStart: function onStart() {
        gsap.set(section.querySelectorAll('.big-text'), {
          opacity: 1
        });
      }
    });
    tl.to(section.querySelectorAll('.bt-mask .text-item')[0], {
      x: 0,
      duration: 1.35,
      ease: 'power2.inOut'
    }, 'mask+=0.25');
    tl.to(section.querySelectorAll('.line-inner'), {
      y: '0%',
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.15
    }, 'mask+=1');
    tl.to(section.querySelectorAll('.bt-mask .text-item')[1], {
      x: 0,
      duration: 1.3,
      ease: 'power2.inOut'
    }, 'mask+=1.6');
    tl.to(section.querySelectorAll('.line'), {
      width: 52,
      duration: 1.5,
      ease: 'power4.inOut'
    }, 'mask+=1.4');
  } else {
    var _tl = gsap.timeline();

    _tl.addLabel('mask');

    _tl.to(section.querySelectorAll('.mask-item'), {
      scaleX: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: -0.09,
      onStart: function onStart() {
        gsap.set(section.querySelectorAll('.big-text'), {
          opacity: 1
        });
      }
    });

    _tl.to(section.querySelectorAll('.bt-mask .text-item')[0], {
      x: 0,
      duration: 1.85,
      ease: 'power2.inOut'
    }, 'mask+=0.25');

    _tl.to(section.querySelectorAll('.line-inner'), {
      y: '0%',
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.15
    }, 'mask+=1.4');

    _tl.to(section.querySelectorAll('.bt-mask .text-item')[1], {
      x: 0,
      duration: 1.65,
      ease: 'power2.inOut'
    }, 'mask+=1.6');

    _tl.to(section.querySelectorAll('.line'), {
      width: 77,
      duration: 1.7,
      ease: 'power4.inOut'
    }, 'mask+=1.8');

    gsap.delayedCall(0.65, function () {
      if (isCanPlay) {
        video.play();
      }
    });
  }
} // SECION === 1


function initSection2() {
  var content = document.querySelector('.section-index-stats');
  new SplitText(content.querySelectorAll('.title-mask .title-list'), {
    type: 'lines, words',
    linesClass: 'line-inner'
  });
  new SplitText(content.querySelectorAll('.title-mask .title-list'), {
    type: 'lines, words',
    linesClass: 'line-wrap'
  });
  ScrollTrigger.matchMedia({
    // large
    '(min-width: 769px)': function minWidth769px() {
      ScrollTrigger.create({
        trigger: content.querySelector('.title-mask'),
        start: '40% 80%',
        once: true,
        invalidateOnRefresh: true,
        onEnter: function onEnter(self) {
          var tl_indexstats = gsap.timeline({});
          tl_indexstats.addLabel('start');
          tl_indexstats.to(content.querySelectorAll('.v-pc .line-inner'), {
            y: '0',
            duration: 0.75,
            ease: 'power2.out',
            stagger: 0.15,
            onStart: function onStart() {
              gsap.set('.section-index-stats .text-title', {
                autoAlpha: 1
              });
              gsap.set(content.querySelectorAll('.title-list'), {
                autoAlpha: 1
              });
            }
          }, 'start');
          tl_indexstats.addLabel('desc');
          tl_indexstats.to(content.querySelectorAll('.desc-inner'), {
            opacity: 1,
            duration: 0.7,
            ease: 'power1.inOut'
          }, 'desc-=0.8');
          tl_indexstats.from(content.querySelectorAll('.desc-inner'), {
            x: 60,
            duration: 0.9,
            ease: 'power2.out'
          }, 'desc-=0.8');
        }
      });
    },
    // small
    '(max-width: 768px)': function maxWidth768px() {
      ScrollTrigger.create({
        trigger: content.querySelector('.title-mask'),
        start: 'top 96%',
        once: true,
        invalidateOnRefresh: true,
        onEnter: function onEnter(self) {
          var tl_indexstats = gsap.timeline({});
          tl_indexstats.addLabel('start');
          tl_indexstats.to(content.querySelectorAll('.v-mb .line-inner'), {
            y: '0',
            duration: 0.65,
            ease: 'power2.out',
            stagger: 0.15,
            onStart: function onStart() {
              gsap.set('.section-index-stats .text-title', {
                autoAlpha: 1
              });
              gsap.set(content.querySelectorAll('.title-list'), {
                autoAlpha: 1
              });
            }
          }, 'start');
          tl_indexstats.addLabel('desc');
          tl_indexstats.to(content.querySelectorAll('.desc-inner .v-mb span'), {
            opacity: 1,
            duration: 0.6,
            stagger: 0.25,
            ease: 'power1.inOut'
          }, 'desc-=0.75');
          tl_indexstats.from(content.querySelectorAll('.desc-inner .v-mb span'), {
            x: 25,
            duration: 0.9,
            stagger: 0.25,
            ease: 'power2.out'
          }, 'desc-=0.75');
        }
      });
    }
  });
} // SECTION === stats
// 최초, 100%


function initSectionStats() {
  var statsgroup = document.querySelector('.section-index-stats .stats-group');
  ScrollTrigger.matchMedia({
    // large
    '(min-width: 769px)': function minWidth769px() {
      gsap.utils.toArray('.single-stat').forEach(function (stat, i) {
        if (!stat.querySelector('.char-inner')) {
          if (stat.querySelector('.chars')) {
            new SplitText(stat.querySelector('.chars'), {
              type: 'chars',
              charsClass: 'line-wrap'
            });
            new SplitText(stat.querySelector('.chars'), {
              type: 'chars',
              charsClass: 'char-inner'
            });
          }
        }

        if (statsgroup.classList.contains('is-load')) {
          gsap.set(stat.querySelectorAll('.chars .char-inner'), {
            y: 0
          });
        }

        ScrollTrigger.create({
          trigger: statsgroup,
          start: 'top 80%',
          once: true,
          delay: i * 0.1,
          onEnter: function onEnter(self) {
            if (statsgroup.classList.contains('is-load')) return;
            var target = stat.querySelectorAll('.char-inner');
            gsap.to(target, {
              y: '0%',
              duration: 0.75,
              ease: 'power2.out',
              stagger: 0.15,
              onStart: function onStart() {
                gsap.set(target, {
                  opacity: 1
                });
              },
              onComplete: function onComplete() {
                if (stat.querySelector('.counter')) {
                  var _target = stat.querySelector('.counter');

                  var end = _target.getAttribute('data-value');

                  countEvent(_target, 0, end, 0.65 + i * 0.2);
                }

                if (stat.classList.contains('single-stat-3')) {
                  gsap.delayedCall(1.5, function () {
                    gsap.set('.char-inner', {
                      y: 0
                    });
                  });
                }
              }
            });
          }
        });
      });
    },
    '(max-width: 768px)': function maxWidth768px() {
      gsap.utils.toArray('.stat-wrap.v-mb .single-stat').forEach(function (stat, i) {
        if (!stat.querySelector('.char-inner')) {
          if (!stat.classList.contains('stat-mb')) {
            if (stat.querySelector('.chars')) {
              new SplitText(stat.querySelector('.chars'), {
                type: 'chars',
                charsClass: 'line-wrap'
              });
              new SplitText(stat.querySelector('.chars'), {
                type: 'chars',
                charsClass: 'char-inner'
              });
            }
          }
        }

        var startPoint = i == 3 ? '-=20% 98%' : '-=40% 98%';
        ScrollTrigger.create({
          trigger: stat,
          start: startPoint,
          once: true,
          id: "".concat(i),
          onEnter: function onEnter(self) {
            var target = stat.querySelectorAll('.char-inner');

            if (!statsgroup.classList.contains('is-load')) {
              statsgroup.classList.add('is-load');
            }

            if (stat.classList.contains('stat-mb')) {
              target = document.querySelectorAll('.stat-mb .chars');
            }

            gsap.to(target, {
              y: '0%',
              duration: 0.65,
              ease: 'power2.out',
              stagger: 0.15,
              onStart: function onStart() {
                gsap.set(target, {
                  opacity: 1
                });
                gsap.delayedCall(0.3, function () {
                  if (stat.querySelector('.counter')) {
                    var _target2 = stat.querySelector('.counter');

                    var end = _target2.getAttribute('data-value');

                    countEvent(_target2, 0, end, 0.55);
                  }
                });
              },
              onComplete: function onComplete() {
                if (stat.classList.contains('single-stat-2')) {
                  gsap.utils.toArray('.stat-wrap.v-pc .counter').forEach(function (c) {
                    var end = c.getAttribute('data-value');
                    countEvent(c, 0, end, 0);
                    gsap.set('.char-inner', {
                      y: 0
                    });
                  });
                }
              }
            });
          }
        });
      });
    }
  });
}

function initSection3() {
  ScrollTrigger.matchMedia({
    // large
    '(min-width: 769px)': function minWidth769px() {
      var content = document.querySelector('.section-index-about');
      ScrollTrigger.create({
        trigger: '.section-index-about .banner',
        start: 'top 90%',
        once: true,
        onEnter: function onEnter(self) {
          new SplitText(content.querySelectorAll('.title-list'), {
            type: 'lines, words',
            linesClass: 'line-inner'
          });
          new SplitText(content.querySelectorAll('.title-list'), {
            type: 'lines, words',
            linesClass: 'line-wrap'
          });
          var tl = gsap.timeline();
          tl.addLabel('title');
          tl.to(content.querySelectorAll('.mask-item'), {
            scaleX: 0,
            duration: 0.95,
            ease: 'power2.out',
            stagger: -0.1
          }, 'title');
          tl.addLabel('banner');
        }
      });
      ScrollTrigger.create({
        trigger: '.section-index-about .text-desc',
        start: '20% 90%',
        once: true,
        onEnter: function onEnter() {
          var tl = gsap.timeline();
          tl.to(content.querySelectorAll('.line-inner'), {
            y: 0,
            duration: 0.65,
            stagger: 0.15,
            ease: 'power2.out',
            onStart: function onStart() {
              gsap.set(content.querySelectorAll('.title-list'), {
                autoAlpha: 1
              });
            }
          });
          tl.addLabel('title');
          var desc = content.querySelector('.desc-inner');
          tl.to(desc, {
            opacity: 1,
            duration: 0.7,
            ease: 'power1.inOut'
          }, 'title-=0.8');
          tl.from(desc, {
            x: 60,
            duration: 0.9,
            ease: 'power2.out',
            onComplete: function onComplete() {
              gsap.set('.d-list', {
                opacity: 1
              });
            }
          }, 'title-=0.8');
          tl.addLabel('desc');
          tl.to(content.querySelector('.button-with-arrow'), {
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'desc-=0.15');
        }
      });
    },
    // small
    '(max-width: 768px)': function maxWidth768px() {
      var content = document.querySelector('.section-index-about');
      ScrollTrigger.create({
        trigger: '.section-index-about .banner',
        start: 'top 95%',
        once: true,
        onEnter: function onEnter(self) {
          new SplitText(content.querySelectorAll('.title-list'), {
            type: 'lines, words',
            linesClass: 'line-inner'
          });
          new SplitText(content.querySelectorAll('.title-list'), {
            type: 'lines, words',
            linesClass: 'line-wrap'
          });
          var tl = gsap.timeline();
          tl.addLabel('title');
          tl.to(content.querySelectorAll('.mask-item'), {
            scaleX: 0,
            duration: 0.95,
            ease: 'power2.out',
            stagger: -0.1
          }, 'title');
          tl.addLabel('banner');
        }
      });
      ScrollTrigger.create({
        trigger: '.section-index-about .main-text-group',
        start: 'top 95%',
        once: true,
        onEnter: function onEnter() {
          var tl = gsap.timeline();
          tl.to(content.querySelectorAll('.line-inner'), {
            y: 0,
            duration: 0.65,
            stagger: 0.15,
            ease: 'power2.out',
            onStart: function onStart() {
              gsap.set(content.querySelectorAll('.title-list'), {
                autoAlpha: 1
              });
            }
          });
          var desc = content.querySelectorAll('.d-list');
          tl.to(desc, {
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power1.inOut'
          }, '<36.5%');
          tl.from(desc, {
            x: 42,
            duration: 1,
            ease: 'power2.out',
            onComplete: function onComplete() {
              gsap.set(content.querySelectorAll('.decs-inner'), {
                opacity: 1
              });
            }
          }, '<');
          tl.addLabel('desc');
          tl.to(content.querySelector('.button-with-arrow'), {
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'desc-=0.15');
        }
      });
    }
  }); // index main slider trigger animations for [mobile only]

  ScrollTrigger.matchMedia({
    // small
    '(max-width: 768px)': function maxWidth768px() {
      gsap.utils.toArray('.index-full-slide .text-group').forEach(function (slidertext, i) {
        gsap.set(slidertext.querySelectorAll('.mobile-slider-title h4 .text-item')[0], {
          x: '-100%'
        });

        if (slidertext.querySelectorAll('.mobile-slider-title h4 span')[1]) {
          gsap.set(slidertext.querySelectorAll('.mobile-slider-title h4 .text-item ')[1], {
            x: '-120%'
          });
        }

        gsap.set(slidertext.querySelector('.flex-wrap'), {
          opacity: 0
        });
        ScrollTrigger.create({
          trigger: slidertext,
          start: 'top 95%',
          once: true,
          onEnter: function onEnter() {
            gsap.to(slidertext.querySelectorAll('.mobile-slider-title h4 .text-item'), {
              x: 0,
              duration: 1.1,
              stagger: 0.25,
              ease: 'power2.out'
            });
            gsap.to(slidertext.querySelector('.flex-wrap'), {
              opacity: 1,
              duration: 0.8,
              delay: 0.4,
              ease: 'power1.inOut'
            });
          }
        });
      });
    }
  });
}

function initSectionNews() {
  ScrollTrigger.create({
    trigger: '.section-index-news',
    start: isMobile ? 'top 95%' : 'top 80%',
    once: true,
    onEnter: function onEnter(self) {
      var tl_indexnews = gsap.timeline({});
      tl_indexnews.addLabel('start');
      tl_indexnews.to('.section-index-news .bt-0 span', {
        x: 0,
        duration: 1.1,
        ease: 'power2.inOut'
      }, 'start');
      tl_indexnews.addLabel('title');
      tl_indexnews.to('.section-index-news .c-tofade', {
        opacity: 1,
        duration: 0.65,
        ease: 'power1.inOut',
        stagger: 0.15
      }, 'title-=0.8');
    }
  });
}

function initSectionCareers() {
  gsap.set('.placement-slide .slide-nav-wrap', {
    opacity: 0
  });
  gsap.set('.section-index-careers .bt-0 span', {
    opacity: 1
  });
  var section = document.querySelector('.section-index-careers');
  ScrollTrigger.matchMedia({
    // large
    '(min-width: 769px)': function minWidth769px() {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        once: true,
        label: 'careers',
        onEnter: function onEnter(self) {
          gsap.set('.career-slide-ul .slide-0  .banner', {
            opacity: 1
          });
          var mask = section.querySelectorAll('.slide-0 .mask-item');
          var banner = section.querySelectorAll('.bt-0 .text-item');
          var tl = gsap.timeline();
          tl.addLabel('title');
          tl.to(mask, {
            scaleX: 0,
            duration: 0.95,
            ease: 'power2.out',
            stagger: -0.1,
            onComplete: function onComplete() {}
          }, 'title');
          tl.addLabel('banner');
          tl.to(banner, {
            x: 0,
            duration: 1.3,
            ease: 'power2.inOut'
          }, 'banner-=0.6');
          tl.addLabel('etc');
          tl.to('.career-slide-ul .slide-0 .slider-fadegroup', {
            opacity: 1,
            duration: 0.7,
            ease: 'power1.inOut'
          }, 'etc-=1.4');
          tl.to('.slide-nav-wrap', {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'etc-=1.4');
        }
      });
    },
    // small
    '(max-width: 768px)': function maxWidth768px() {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 95%',
        once: true,
        label: 'careers 1',
        onEnter: function onEnter(self) {
          gsap.set('.career-slide-ul .slide-0  .banner', {
            opacity: 1
          });
          var mask = section.querySelectorAll('.slide-0 .mask-item.v-mb');
          var banner = section.querySelectorAll('.bt-0 .text-item');
          var tl = gsap.timeline();
          tl.addLabel('title');
          tl.to(mask, {
            scaleX: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: -0.1,
            onComplete: function onComplete() {}
          }, 'title');
          tl.addLabel('banner');
          tl.to(banner, {
            x: 0,
            duration: 1.4,
            ease: 'power2.out'
          }, 'banner-=0.3');
          tl.addLabel('etc');
          tl.to('.career-slide-ul .slide-0 .slider-fadegroup', {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'etc-=0.7');
        }
      });
      ScrollTrigger.create({
        trigger: '.career-slide-ul .slide-0 .slider-fadegroup',
        start: 'top 35%',
        once: true,
        label: ' text careers',
        onEnter: function onEnter(self) {
          gsap.set('.career-slide-ul .slide-0  .banner', {
            opacity: 1
          });
          var tl = gsap.timeline();
          tl.addLabel('start');
          tl.to('.career-slide-ul .slide-0 .slider-fadegroup', {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'start');
          tl.to('.slide-nav-wrap', {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'start');
        }
      });
    }
  });
}

function initSectionStock() {
  gsap.set('.section-index-stock .row', {
    opacity: 0
  });
  ScrollTrigger.create({
    trigger: '.section-index-stock',
    start: isMobile ? 'top 95%' : 'top 75%',
    once: true,
    label: 'stock',
    onEnter: function onEnter(self) {
      gsap.to('.section-index-stock .row', {
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power1.inOut'
      });
      var counter_items = document.querySelector('.section-index-stock .stock-number');
      gsap.from(counter_items, {
        textContent: 1,
        duration: 1.5,
        delay: 0.6,
        ease: 'power2.inOut',
        snap: {
          textContent: 1
        },
        onUpdate: function onUpdate() {
          this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        }
      });
    }
  });
}