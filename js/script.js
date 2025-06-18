
                                                                       // THIS IS SCROLL DOWN 
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});

                                                                    // THIS IS DARK THEME TOGGLE 
$(document).ready(function () {
  $('#toggle-theme').click(function () {
    $('body').toggleClass('dark-theme');
  });
});
                                                                     //  CAROSEL START
$('#cakeCarousel').on('slide.bs.carousel', function () {
  $('.hero-title, .hero-subtitle').fadeOut(300);
});

$('#cakeCarousel').on('slid.bs.carousel', function () {
  $('.hero-title, .hero-subtitle').fadeIn(600);
});
                                                                      //  CAROSEL END

                                                                 //  PRODUCT SECTION START 
$('.filter-group button').on('click', function () {
  let filter = $(this).data('filter');
  $('.filter-group button').removeClass('active');
  $(this).addClass('active');

  if (filter === 'all') {
    $('.product-item').show();
  } else {
    $('.product-item').hide();
    $('.' + filter).fadeIn();
  }
});
                                                                //  PRODUCT SECTION END


                                                            //  ORDER FORM VALIDATION

$('#orderForm').on('submit', function (e) {
  e.preventDefault(); // prevent page reload
  let name = $('#name').val().trim();
  let cakeType = $('#cakeType').val();
  let quantity = $('#quantity').val();

  if (name === '' || cakeType === '' || quantity < 1) {
    alert('Please fill in all fields correctly!');
  } else {
    alert('🎉 Order placed successfully! Thank you.');
    $(this).trigger('reset'); // clear form
  }
});
                                                           //  ORDER FORM VALIDATION END

                                                        //    Popup Timing and Close START

  // Show newsletter popup after 5 seconds
setTimeout(function () {
  $('#newsletterPopup').fadeIn();
}, 10000);

// Close popup
$('.popup-close').on('click', function () {
  $('#newsletterPopup').fadeOut();
});

// Subscribe button action
$('#subscribeBtn').on('click', function () {
  let email = $('#newsletterEmail').val().trim();
  if (email === '') {
    alert('Please enter your email!');
  } else {
    alert('🎉 Subscribed successfully!');
    $('#newsletterPopup').fadeOut();
  }
});
                                                    //   SCROLL DOWN 
 // Show button when user scrolls down
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 200) {
    $('#scrollTopBtn').fadeIn();
  } else {
    $('#scrollTopBtn').fadeOut();
  }
});

// Scroll to top when clicked
$('#scrollTopBtn').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 600);
});
                                                                  //  DARK MODE   
  $('#themeToggle').on('click', function () {
  $('body').toggleClass('dark-mode');

  // Toggle emoji
  const isDark = $('body').hasClass('dark-mode');
  $(this).text(isDark ? '☀️' : '🌙');
});
                                                               //  DARK MODE  END


                                                              //  CONTACT BUTTON SECTION
 // Theme toggle
document.getElementById('themeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});



   
  $(document).ready(function() {
    $('.btn-close').click(function() {
      $('#contactModal').modal('hide');
    });
  });

                                                         



                                                                      // contact
  $(document).ready(function () {
  // Show popup when Contact link is clicked
  $('#contactNav').click(function (e) {
    e.preventDefault(); // prevent default anchor jump
    $('#contactPopup').fadeIn();
  });

  // Hide popup when close button is clicked
  $('.popup-close').click(function () {
    $('#contactPopup').fadeOut();
  });

  // Hide popup when clicking outside the box
  $('#contactPopup').click(function (e) {
    if ($(e.target).is('#contactPopup')) {
      $(this).fadeOut();
    }
  });
});
