// <!-- Scroll To Top  Button -->
// Get the button
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollTopButtonFunction()};

function scrollTopButtonFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// <!-- preloader -->
document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading process (you can replace this with actual content loading)
    setTimeout(function() {
        document.getElementById('ctn-preloader').style.display = 'none';
        document.getElementById('full-body').style.display = 'block';
    }, 1000); // 3 seconds delay for demonstration
});


//<!-- scroll header -->
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-header").style.top = "0";
  } else {
    document.getElementById("scroll-header").style.top = "-150px";
  }
}


let swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    loop: true,
    // effect:"fade",
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    }
});


$(document).ready(function () {

    // owl-carousel-one slider heading//
    // $('.owl-carousel-one').owlCarousel({
    var owlOne = $('.owl-carousel-one');
    owlOne.owlCarousel({
        loop: true,
        // nav:true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        stagePadding: 10,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // owlOne Custom Button
    $('.right-button').click(function () {
        owlOne.trigger('next.owl.carousel');
    });
    $('.left-button').click(function () {
        owlOne.trigger('prev.owl.carousel');
    });

    // owl-carousel-two slider heading//
    $('.owl-carousel-two').owlCarousel({
        loop: true,
        // nav: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        stagePadding: 0,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // owl-carousel-three slider heading//
    // $('.owl-carousel-three').owlCarousel({
    var owlThree = $('.owl-carousel-three');
    owlThree.owlCarousel({
        loop: true,
        // nav:true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        stagePadding: 50,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    // owlThree Custom Button
    $('.side-right-button').click(function () {
        owlThree.trigger('next.owl.carousel');
    });
    $('.side-left-button').click(function () {
        owlThree.trigger('prev.owl.carousel');
    });

    // counter Up number
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1200
    //   });
});

// (function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);    jQuery(document).ready(function($) {
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1200
//     });
// });


// const number = document.getElementById('number');

// const updateCount = () => {
//     const value = parseInt(number.dataset.value);
//     let initialValue = 0;

//     const increaseCount = setInterval(() => {
//         initialValue += 1;

//         if (initialValue > value) {
//             number.textContent = `${value}`;
//             clearInterval(increaseCount);
//             return;
//         }

//         number.textContent = `${initialValue}`;
//     }, 5);
// };

// updateCount();

// <!-- scroll counter -->
let section_counter = document.querySelector('#part-4');
let counters = document.querySelectorAll('.projects .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;
  
      let speed = 200;
      counters.forEach((counter, index) => {
        function UpdateCounter() {
          const targetNumber = +counter.dataset.target;
          const initialNumber = +counter.innerText;
          const incPerCount = targetNumber / speed;
          if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter, 40);
          }
        }
        UpdateCounter();
  
        if (counter.parentElement.style.animation) {
          counter.parentElement.style.animation = '';
        } else {
          counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
            index / counters.length + 0.5
          }s`;
        }
      });
      observer.unobserve(section_counter);
    },
    {
      root: null,
      threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
  );
  
  CounterObserver.observe(section_counter);
/* ===================================
     services js section start
==================================== */
//=====   services page filter section   =====//
/* ===================================
     services js section end
==================================== */



/* ===================================
     portfolio js section start
==================================== */
//=====   portfolio page filter section   =====//
/* ===================================
     portfolio js section end
==================================== */




/* ===================================
     enquiry js section start
==================================== */
//=====   enquiry page validation section and Email sendind   =====//
// (function(){
//     emailjs.init("RN6idf31YnOJkAQOT");
//    })();
  
//   function validateEnquiryForm() {
//       // Clear previous error messages
//       document.getElementById('dateError').textContent = '';
//       document.getElementById('fullnameError').textContent = '';
//       document.getElementById('fulladdressError').textContent = '';
//       document.getElementById('jobsitenumberError').textContent = '';
//       document.getElementById('phonenumberError').textContent = '';
//       document.getElementById('emailError').textContent = '';
//       document.getElementById('checkboxError').textContent = '';
//       document.getElementById('notesError').textContent = '';
  
//       let isValid = true;
  
//       // Regular expression for a number with at least 10 digits
//       let numberPattern = /^[0-9]{10,}$/;
  
//       // Regular expression for a valid email address
//       let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//       // Validate Date
//       let date = document.getElementById('date').value;
//       if (!date) {
//           document.getElementById('dateError').textContent = "Date is required.";
//           isValid = false;
//       }
  
//       // Validate Full Name
//       let fullname = document.getElementById('fullname').value;
//       if (!fullname) {
//           document.getElementById('fullnameError').textContent = "Full name is required.";
//           isValid = false;
//       } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
//           document.getElementById('fullnameError').textContent = "Full name can only contain letters and spaces.";
//           isValid = false;
//       }
  
//       // Validate Full Address
//       let address = document.getElementById('fulladdress').value;
//       if (!address) {
//           document.getElementById('fulladdressError').textContent = "Full address is required.";
//           isValid = false;
//       }
  
//       // Validate Jobsite Number
//       let jobsitenumber = document.getElementById('jobsitenumber').value;
//       if (!jobsitenumber) {
//           document.getElementById('jobsitenumberError').textContent = "Jobsite Number is required.";
//           isValid = false;
//       } else if (!numberPattern.test(jobsitenumber)) {
//           document.getElementById('jobsitenumberError').textContent = "Input must be a valid number with at least 10 digits.";
//           isValid = false;
//       }
  
//        // Validate phone Number
//        let phonenumber = document.getElementById('phonenumber').value;
//        if (!phonenumber) {
//            document.getElementById('phonenumberError').textContent = "Phone Number is required.";
//            isValid = false;
//        } else if (!numberPattern.test(phonenumber)) {
//            document.getElementById('phonenumberError').textContent = "Input must be a valid number with at least 10 digits.";
//            isValid = false;
//        }
  
//         // Validate Email
//         let email = document.getElementById('email').value;
//         if (!email) {
//             document.getElementById('emailError').textContent = "Email is required.";
//             isValid = false;
//         } else if (!emailPattern.test(email)) {
//             document.getElementById('emailError').textContent = "Invalid email address.";
//             isValid = false;
//         }
  
//         // Validate Checkboxes
//         const checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
//         if (checkboxes.length === 0) {
//           document.getElementById('checkboxError').textContent = "Please select at least one option.";
//           isValid = false;
//         }
  
//       // Validate Notes 
//       let notes = document.getElementById('notes').value;
//       if (!notes) {
//           document.getElementById('notesError').textContent = "Notes is required.";
//           isValid = false;
//       }
  
  
//       if (isValid) {
//         //Send email via Emailjs
//         let templateParams={
//             from_name:fullname,
//             full_address:address,
//             jobsite_number:jobsitenumber,
//             phone_number:phonenumber,
//             from_email:email,
//             services:Array.from(checkboxes).map(cb => cb.value).join(', '),
//             notes:notes,
//         };
  
//         emailjs.send("service_vwbccbs","template_y74y5wa",templateParams)
//           .then((response)=>{
//               alert('Email sent successfully!', response.status, response.text);
//               // Reset the form
//               document.getElementById('enquiryForm').reset();
//           },(error)=>{
//               alert('Failed to send email. Please try again later.', error);
//           });
//       }
//   }
/* ===================================
     enquiry js section end
==================================== */



/* ===================================
     contactus js section start
==================================== */
//=====   contactus page validation section and Email sendind   =====//
/* ===================================
     contactus js section end
==================================== */