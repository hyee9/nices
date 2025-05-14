function initFadeWithMask() {
  if (document.querySelector('.mobile-scroll-wrapper')) {
    gsap.to('.mobile-scroll-wrapper', {
      autoAlpha: 1,
      duration: 0.2,
      ease: 'power1.inOut'
    });
  }

  if (!isMobile) {
    gsap.utils.toArray('.intro-grid').forEach(function (content) {
      if (content.classList.contains('intro-grid-single')) return;
      ScrollTrigger.create({
        trigger: content.querySelector('.banner'),
        start: 'top 85%',
        once: true,
        fastScrollEnd: true,
        onEnter: function onEnter(self) {
          var maskDuration = 1;
          var maskItem = content.querySelectorAll('.mask-item');

          if (content.querySelector('.banner-title-text')) {
            var length = content.querySelector('.banner-title-text').innerHTML.length - 2;
            maskDuration += Math.floor(length / 2) * 0.08;

            if (length >= 4) {
              maskDuration = 1.3;
            }
          }

          if (content.classList.contains('big-title')) {
            maskDuration = 1.35;
          }

          if (content.querySelector('.title-list')) {
            new SplitText(content.querySelectorAll('.title-list'), {
              type: 'lines, words',
              linesClass: 'line-inner'
            });
            new SplitText(content.querySelectorAll('.title-list'), {
              type: 'lines, words',
              linesClass: 'line-wrap'
            });
          }

          var dt = 0;

          if (content.hasAttribute('data-tl-delay')) {
            dt = content.getAttribute('data-tl-delay');
          }

          var tl = gsap.timeline({
            delay: dt
          });

          if (content.classList.contains('intro-grid-title')) {
            tl.addLabel('start');
            tl.to(content.querySelectorAll('.line-inner'), {
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              onStart: function onStart() {
                gsap.set(content.querySelectorAll('.title-list'), {
                  autoAlpha: 1
                });
                gsap.set(content.querySelectorAll('.text-title'), {
                  autoAlpha: 1
                });
              }
            }, 'start');
            tl.addLabel('title');
            tl.to(maskItem, {
              scaleX: 0,
              duration: 0.95,
              ease: 'power2.out',
              stagger: -0.1,
              onComplete: function onComplete() {
                if (document.querySelector('.mobile-scroll-wrapper')) {
                  mobileScrollText();
                }
              }
            }, '<20%');
          } else {
            tl.addLabel('title');
            tl.to(content.querySelectorAll('.mask-item'), {
              scaleX: 0,
              duration: 0.95,
              ease: 'power2.out',
              stagger: -0.1,
              onComplete: function onComplete() {
                if (document.querySelector('.mobile-scroll-wrapper')) {
                  mobileScrollText();
                }
              }
            }, 'title');
            tl.addLabel('banner');
            tl.to(content.querySelectorAll('.banner-title-text'), {
              x: 0,
              duration: maskDuration,
              ease: 'power2.out',
              stagger: 0.25
            }, '<75%');
            tl.addLabel('title2');
            tl.to(content.querySelectorAll('.line-inner'), {
              y: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: 'power2.out',
              onStart: function onStart() {
                gsap.set(content.querySelectorAll('.title-list'), {
                  autoAlpha: 1
                });
                gsap.set(content.querySelectorAll('.text-title'), {
                  autoAlpha: 1
                });
              }
            }, '<33%');
            tl.addLabel('desc');

            if (content.querySelector('.intro-next-content.section-table')) {
              tl.to(content.querySelectorAll('.intro-next-content.section-table .tr-item'), {
                autoAlpha: 1,
                duration: 0.7,
                ease: 'power1.inOut',
                stagger: 0.15,
                onComplete: function onComplete() {},
                onStart: function onStart() {
                  if (!document.querySelector('#stock-current-value')) return;

                  if (document.querySelector('#stock-current-value')) {
                    var counter = document.getElementById('stock-current-value');
                    if (counter.classList.contains('is-load')) return;
                    counter.classList.add('is-load');
                    gsap.delayedCall(0.75, function () {
                      countEvent(counter, 0, counter.getAttribute('data-value'));
                    });
                  }
                }
              }, 'desc-=0.8');
            }

            if (content.querySelector('.tr-group-custom')) {
              tl.to(content.querySelectorAll('.tr-group-custom'), {
                autoAlpha: 1,
                duration: 0.7,
                ease: 'power1.inOut'
              }, 'desc-=0.8');
            }

            if (content.querySelector('.desc-inner')) {
              var desc = content.querySelector('.desc-inner');
              if (desc.classList.contains('custom-override')) return;
              var el = content.querySelectorAll('.desc-inner');

              if (desc.classList.contains('d-list-wrap')) {
                el = content.querySelectorAll('.d-list');
              }

              tl.to(el, {
                opacity: 1,
                duration: 0.7,
                ease: 'power1.inOut',
                stagger: 0.25
              }, '<36.5%');
              tl.from(el, {
                x: 60,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.25
              }, '<');
              tl.addLabel('etc');
            }

            if (content.querySelector('.tr-item')) {
              tl.to(content.querySelector('.tr-item'), {
                autoAlpha: 1,
                duration: 0.7,
                ease: 'power1.inOut '
              }, 'etc-=0.2');
            }
          }

          if (content.querySelector('.banner-visual')) {
            var banner = content.querySelector('.banner-visual');
            var bannerimage = banner.querySelector('img');
            gsap.to(bannerimage, {
              scrollTrigger: {
                trigger: banner,
                start: 'top-=100px 245px',
                end: "+=".concat(window.innerWidth * 0.15 + 100, "px"),
                scrub: 1
              },
              y: '-20%',
              ease: 'power2.out'
            });
          }
        }
      });
    });
  } else {
    gsap.utils.toArray('.intro-grid').forEach(function (content) {
      if (content.classList.contains('intro-grid-single')) return;
      ScrollTrigger.create({
        trigger: content.querySelector('.banner'),
        start: 'top 95%',
        once: true,
        onEnter: function onEnter(self) {
          var maskDuration = 1;
          var maskItem = content.querySelectorAll('.mask-item');

          if (content.querySelector('.banner-title-text')) {
            var length = content.querySelector('.banner-title-text').innerHTML.length - 2;
            maskDuration += Math.floor(length / 2) * 0.045;

            if (lang == 'ko') {
              maskDuration = 0.9;

              if (length >= 4) {
                maskDuration = 1;
              }
            }
          }

          if (content.classList.contains('big-title')) {
            maskDuration = 1.15;
          }

          var tl = gsap.timeline();
          tl.to(content.querySelectorAll('.mask-item'), {
            scaleX: 0,
            duration: 0.95,
            ease: 'power2.out',
            stagger: -0.1,
            onComplete: function onComplete() {
              if (document.querySelector('.mobile-scroll-wrapper')) {
                mobileScrollText();
              }
            }
          }, 'title');
          tl.addLabel('banner');
          tl.to(content.querySelectorAll('.banner-title-text'), {
            x: 0,
            duration: maskDuration,
            ease: 'power2.out',
            stagger: 0.25
          }, '<75%');
        }
      });

      if (content.querySelector('.title-list')) {
        new SplitText(content.querySelectorAll('.title-list'), {
          type: 'lines, words',
          linesClass: 'line-inner'
        });
        new SplitText(content.querySelectorAll('.title-list'), {
          type: 'lines, words',
          linesClass: 'line-wrap'
        });
      }

      ScrollTrigger.create({
        trigger: content.querySelector('.title-list'),
        start: isMobile ? 'top 95%' : 'top 90%',
        once: true,
        id: 'banner title',
        onEnter: function onEnter(self) {
          var maskDuration = 1;
          var maskItem = content.querySelectorAll('.mask-item');

          if (content.querySelector('.banner-title-text')) {
            var length = content.querySelector('.banner-title-text').innerHTML.length - 2;
            maskDuration += Math.floor(length / 2) * 0.08;

            if (length >= 4) {
              maskDuration = 1.3;
            }
          }

          if (content.classList.contains('big-title')) {
            maskDuration = 1.35;
          }

          var tl = gsap.timeline();

          if (content.classList.contains('intro-grid-title')) {
            tl.addLabel('start');
            tl.to(content.querySelectorAll('.line-inner'), {
              y: '0',
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
              onStart: function onStart() {
                gsap.set(content.querySelectorAll('.title-list'), {
                  autoAlpha: 1
                });
                gsap.set(content.querySelectorAll('.text-title'), {
                  autoAlpha: 1
                });
              }
            }, 'start');
            tl.addLabel('title');
            tl.to(maskItem, {
              scaleX: 0,
              duration: 0.95,
              ease: 'power2.out',
              stagger: -0.1,
              onComplete: function onComplete() {
                if (document.querySelector('.mobile-scroll-wrapper')) {
                  mobileScrollText();
                }
              }
            }, '<20%');
          } else {
            tl.addLabel('title');
            tl.to(content.querySelectorAll('.line-inner'), {
              y: '0%',
              duration: 0.65,
              stagger: 0.1,
              ease: 'power2.out',
              onStart: function onStart() {
                gsap.set(content.querySelectorAll('.title-list'), {
                  autoAlpha: 1
                });
                gsap.set(content.querySelectorAll('.text-title'), {
                  autoAlpha: 1
                });
              }
            }, 'title');
            tl.addLabel('desc');

            if (content.querySelector('.desc-inner')) {
              var desc = content.querySelector('.desc-inner');
              if (desc.classList.contains('custom-override')) return;
              var el = content.querySelectorAll('.desc-inner');

              if (desc.classList.contains('d-list-wrap')) {
                el = content.querySelectorAll('.d-list');
              }

              tl.to(el, {
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: 'power1.inOut'
              }, 'desc-=0.6');
              tl.from(el, {
                x: 30,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
              }, 'desc-=0.6');
              tl.addLabel('etc');
            }

            if (content.querySelector('.tr-item')) {
              tl.to(content.querySelector('.tr-item'), {
                autoAlpha: 1,
                duration: 0.7,
                ease: 'power1.inOut '
              }, 'etc-=0.2');
            }
          }
        }
      });
    });
  }
}

function initTableContentTranistion() {
  gsap.utils.toArray('.section-table').forEach(function (table) {
    if (table.classList.contains('tr-custom')) return;
    if (table.classList.contains('custom-override')) return;
    var dtTime = table.classList.contains('intro-next-content') ? 0.9 : 0;

    if (isMobile) {
      dtTime = 0;
    }

    ScrollTrigger.create({
      trigger: table.querySelector('.tr-item'),
      start: isMobile ? 'top 95%' : 'top 90%',
      once: true,
      id: "table",
      onEnter: function onEnter(self) {
        var arr = ['.tr-item', '.tr-item2'];
        gsap.to(arr, {
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power1.inOut',
          stagger: 0.25,
          delay: dtTime,
          onComplete: function onComplete() {}
        });
      }
    });
  });

  if (document.querySelector('.tr-group-custom')) {
    var custom = document.querySelector('.tr-group-custom');
    gsap.to(custom, {
      scrollTrigger: {
        trigger: custom,
        start: isMobile ? 'top 95%' : 'top 90%',
        once: true
      },
      autoAlpha: 1,
      duration: 0.6,
      delay: 0.4
    });
  }

  gsap.utils.toArray('.tr-group').forEach(function (table) {
    ScrollTrigger.create({
      trigger: table.querySelector('.tr-item'),
      start: isMobile ? 'top 95%' : 'top 90%',
      once: true,
      id: "table",
      onEnter: function onEnter(self) {
        var arr = ['.tr-item', '.tr-item2'];
        gsap.to(arr, {
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power1.inOut',
          stagger: 0.15
        });
      }
    });
  });
}

function initListTranstion(p, d) {
  var items = p.querySelectorAll('.tr2-item');
  gsap.utils.toArray(items).forEach(function (item, i) {
    ScrollTrigger.create({
      trigger: item,
      start: isMobile ? 'top 98%' : 'top 80%',
      once: true,
      id: "tr group 2".concat(i),
      onEnter: function onEnter(self) {
        var tl = gsap.timeline({
          delay: i * 0.12
        });

        if (item.querySelector('.tr-item0')) {
          var tr3 = item.querySelectorAll('.tr-item0');
          gsap.to(tr3, {
            opacity: 1,
            duration: 0.45,
            ease: 'power1.inOut',
            stagger: 0.1,
            delay: i * 0.03
          });
          gsap.from(tr3, {
            y: 20,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.1,
            delay: i * 0.03
          });
        }

        if (item.querySelector('.tr-item4')) {
          new SplitText(item.querySelectorAll('.tr-item4'), {
            type: 'lines, words',
            linesClass: 'line-inner'
          });
          new SplitText(item.querySelectorAll('.tr-item4'), {
            type: 'lines, words',
            linesClass: 'line-wrap'
          });
          gsap.set(item.querySelectorAll('.tr-item4'), {
            opacity: 1
          });

          var _tr = item.querySelectorAll('.line-inner');

          gsap.from(_tr, {
            opacity: 0,
            duration: 0.6,
            ease: 'power1.inOut',
            stagger: 0.06,
            delay: i * 0.08
          });
        }

        if (item.querySelector('.tr-item5')) {
          var _tr2 = item.querySelectorAll('span');

          gsap.to(_tr2, {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.inOut',
            stagger: 0.06,
            delay: i * 0.08
          });
        }

        if (p.classList.contains('slow')) {
          var _stagger = d !== null && d !== void 0 ? d : 0.2;

          var tr = item.querySelectorAll('.tr-item2');
          gsap.to(tr, {
            opacity: 1,
            duration: isMobile ? 0.6 : 0.7,
            ease: 'power1.inOut',
            stagger: _stagger,
            delay: i * (_stagger - 0.05)
          });
        } else {
          var tr2 = item.querySelector('.tr-item2');
          tl.to(tr2, {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.inOut'
          });
          tl.addLabel('title');
          tl.to(item.querySelectorAll('.tr-item3'), {
            opacity: 1,
            duration: 0.45,
            ease: 'power1.inOut',
            stagger: 0.06
          }, 'title-=0.07');
          tl.from(item.querySelectorAll('.tr-item3'), {
            y: 20,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.06
          }, 'title-=0.07');
        }
      }
    });
  });
}

gsap.utils.toArray('.more').forEach(function (a) {
  initListTranstion(a);
});

if (document.querySelector('.single-title-mask')) {
  gsap.utils.toArray('.single-title-mask').forEach(function (title) {
    new SplitText(title.querySelectorAll('.title-list'), {
      type: 'lines, words',
      linesClass: 'line-inner'
    });
    new SplitText(title.querySelectorAll('.title-list'), {
      type: 'lines, words',
      linesClass: 'line-wrap'
    });
    ScrollTrigger.create({
      trigger: title,
      start: !isMobile ? '10% 90%' : 'top 96%',
      once: true,
      id: "single title",
      onEnter: function onEnter(self) {
        var tl = gsap.timeline();
        tl.addLabel('start');
        tl.to(title.querySelectorAll('.line-inner'), {
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          onStart: function onStart() {
            gsap.set(title.querySelectorAll('.title-list'), {
              autoAlpha: 1
            });
            gsap.set(title.querySelectorAll('.text-title'), {
              autoAlpha: 1
            });
          }
        }, 'start');
        tl.addLabel('desc');

        if (title.querySelector('.text-desc')) {
          if (title.classList.contains('custom-override')) return;
          tl.to(title.querySelectorAll('.desc-inner'), {
            opacity: 1,
            duration: 0.7,
            ease: 'power1.inOut'
          }, 'desc-=0.7');
          tl.from(title.querySelectorAll('.desc-inner'), {
            x: 60,
            duration: 1,
            ease: 'power2.out'
          }, 'desc-=0.7');
          tl.addLabel('button');
          tl.to(title.querySelector('.button'), {
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power1.inOut'
          }, 'button-=0.15');
        }
      }
    });
  });
}

gsap.utils.toArray('.content-business').forEach(function (content, i) {
  initListTranstion(content);
  var visual = content.querySelector('.visual-container  img');
  gsap.set(visual, {
    scale: 1.2
  });
  ScrollTrigger.create({
    trigger: content.querySelector('.content-desc'),
    start: '80% 90%',
    once: true,
    id: "content",
    onEnter: function onEnter(self) {
      var desc = content.querySelector('.content-desc');
      var tl = gsap.timeline();
      new SplitText(desc, {
        type: 'lines, words',
        linesClass: 'line-inner'
      });
      new SplitText(desc, {
        type: 'lines, words',
        linesClass: 'line-wrap'
      });
      tl.addLabel('start');
      tl.to(content.querySelectorAll('.line-inner'), {
        y: 0,
        duration: 0.6,
        stagger: 0.25,
        ease: 'power2.out',
        onStart: function onStart() {
          gsap.set(desc, {
            opacity: 1
          });
        }
      }, 'start');
      tl.addLabel('title');

      if (!isMobile) {
        tl.to(visual, {
          scale: 1,
          duration: 1.8,
          ease: 'power2.out'
        }, 'start+=0');
      }
    }
  });
});

function singleVisualTrigger() {
  gsap.utils.toArray('.single-visual').forEach(function (v) {
    gsap.to(v, {
      scrollTrigger: {
        trigger: v,
        start: '20% 85%'
      },
      opacity: 1,
      duration: 0.6,
      ease: 'power1.inOut'
    });
  });
}

gsap.utils.toArray('.image-set').forEach(function (content, i) {
  var desc = content.querySelector('.text-desc');
  ScrollTrigger.create({
    trigger: content,
    start: isMobile ? 'top 95%' : 'top 90%',
    once: true,
    id: "content",
    onEnter: function onEnter(self) {
      var tl = gsap.timeline();
      var visual = content.querySelector('img');
      gsap.from(visual, {
        scale: 1.2,
        duration: 1.4,
        ease: 'power2.out'
      });
    }
  });
  gsap.to(desc, {
    scrollTrigger: {
      trigger: desc,
      start: '25% 90%',
      once: true
    },
    opacity: 1,
    duration: 1,
    ease: 'power1.inOut'
  });
});
gsap.utils.toArray('.single-banner-scale').forEach(function (b) {
  gsap.to(b.querySelector('img'), {
    scrollTrigger: {
      trigger: b,
      start: isMobile ? 'top-=10% 95%' : 'top-=20% 50%',
      end: '90% 30%',
      scrub: 1
    },
    scale: 1.1
  });
});

if (document.querySelector('.ir')) {
  initFadeWithMask();
}

function singleSection(section) {
  if (section.querySelector('.title-list')) {
    new SplitText(section.querySelectorAll('.title-list'), {
      type: 'lines, words',
      linesClass: 'line-inner'
    });
    new SplitText(section.querySelectorAll('.title-list'), {
      type: 'lines, words',
      linesClass: 'line-wrap'
    });
  }

  ScrollTrigger.create({
    trigger: section,
    start: isMobile ? 'top 95%' : 'top 90%',
    once: true,
    onEnter: function onEnter() {
      var tl = gsap.timeline();
      var maskItem = section.querySelectorAll('.mask-item');
      if (isMobile) maskItem = section.querySelectorAll('.mask-item.v-mb');
      tl.to(maskItem, {
        scaleX: 0,
        duration: 0.75,
        ease: 'power2.out',
        stagger: -0.1
      });
      tl.to(section.querySelectorAll('.banner-title-text'), {
        x: 0,
        duration: 1.35,
        ease: 'power2.inOut',
        stagger: 0.25
      }, '<75%');
    }
  });
  ScrollTrigger.create({
    trigger: isMobile ? section.querySelector('.text-title') : section.querySelector('.desc-inner'),
    start: isMobile ? 'top 88%' : '10% 96%',
    once: true,
    onEnter: function onEnter() {
      var tl = gsap.timeline();
      tl.to(section.querySelectorAll('.line-inner'), {
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        onStart: function onStart() {
          gsap.set(section.querySelectorAll('.title-list'), {
            autoAlpha: 1
          });
          gsap.set(section.querySelectorAll('.text-title'), {
            autoAlpha: 1
          });
        }
      });
      tl.addLabel('desc');
      var desc = section.querySelector('.desc-inner');
      var el = section.querySelectorAll('.desc-inner');

      if (desc.classList.contains('d-list-wrap')) {
        el = section.querySelectorAll('.d-list');
      }

      tl.to(el, {
        opacity: 1,
        duration: 0.7,
        ease: 'power1.inOut',
        stagger: 0.25
      }, '<36.5%');
      tl.from(el, {
        x: 40,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.25
      }, '<');
      tl.addLabel('etc');

      if (section.querySelector('.tr-item')) {
        tl.to(section.querySelector('.tr-item'), {
          autoAlpha: 1,
          duration: 0.85,
          ease: 'power1.inOut '
        }, 'etc-=0.3');
      }
    }
  });
}