$(document).ready(function () {
  // Sticky navigation
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction === 'down') {
        $('nav').addClass('sticky-nav');
      } else {
        $('nav').removeClass('sticky-nav');
      }
    },
    {
      offset: '60px',
    }
  );

  // Scroll on buttons
  $('.js--scroll-to-plan').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      1000
    );
  });
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      1000
    );
  });

  // Navigation scroll
  $(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
        }
      }
    });
  });

  // Animations on scroll
  $('.js--wp-1').waypoint(
    function (_) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-2').waypoint(
    function (_) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint(
    function (_) {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-4').waypoint(
    function (_) {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );

  // Mobile navigation
  $('.js--nav-icon').click(function () {
    const nav = $('.js--main-nav');
    const icon = $('.js--menu-icon');

    nav.slideToggle(200);

    // Update icons on toggle
    if (icon.attr('name') === 'menu-sharp') {
      icon.attr('name', 'close-sharp');
    } else {
      icon.attr('name', 'menu-sharp');
    }
  });
});
