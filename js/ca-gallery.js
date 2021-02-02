(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    renderProtfolio()
    renderModal()
  });

})(jQuery); // End of use strict

function renderProtfolio() {
  var protfolios = getProtfolios()
  var $elPortfoliosList = $('.portfolios-list')

  var strHTMLs = protfolios.map(function (protfolio) {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal-${protfolio.id}">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src=${protfolio.imgUrl} alt="">
    </a>
    <div class="portfolio-caption">
    <h4>${protfolio.name}</h4>
    <p class="text-muted">${protfolio.category}</p>
    </div>
    </div>`
  })
  // console.log('strHTML:', strHTML)

  $elPortfoliosList.html(strHTMLs)
}

function renderModal() {
  var protfolios = getProtfolios()
  var $elModal = $('.protfolio-modal')

  var strHTML = protfolios.map(function (protfolio) {
    return `  
    <div class="portfolio-modal modal fade" id="portfolioModal-${protfolio.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${protfolio.name}</h2>
                  <p class="item-intro text-muted">${protfolio.title}</p>
                  <img class="img-fluid d-block mx-auto" src=${protfolio.imgUrl} alt="">
                  <p>${protfolio.desc}</p>
                  <ul class="list-inline">
                    <li>Date: ${protfolio.publishedAt}</li>
                    <li>Category: ${protfolio.category}</li>
                    <li>link: <a href ="${protfolio.url}">${protfolio.url}</a></a></li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>`
  })

  $elModal.html(strHTML)
}

function onSendMail(){

  var $elEmail = $('input[name=email')
  var $elSubject = $('input[name=subject]')
  var $elMassege = $('input[name=massege]')

  var mail = $elEmail.val()
  var subject = $elSubject.val()
  var massege = $elMassege.val()

  window.open (`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${massege}`)
}
