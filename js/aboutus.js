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


// <!-- scroll counter -->
let section_counter = document.querySelector('#aboutus-part-4');
let counters = document.querySelectorAll('.aboutus-projects .aboutus-counter');

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