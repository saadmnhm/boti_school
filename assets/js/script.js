let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    dots[index].classList.remove('active');
    
    if (index === currentIndex) {
      card.classList.add('active');
      dots[index].classList.add('active');
    }
  });
}

function jumpTo(index) {
  currentIndex = index;
  updateCarousel();
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
}, 5000);




document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.btn_tab');
  const tabContents = document.querySelectorAll('.tab-content-item');
  
  if (tabContents.length > 0) {
    tabContents[0].classList.add('active');
  }
  
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      this.classList.add('active');
      
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      if (tabContents[index]) {
        tabContents[index].classList.add('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const engagementItems = document.querySelectorAll('.engagement-item');
  
  if (engagementItems.length === 0) return;
  
  let currentIndex = 0;
  let autoPlayInterval;
  
  function cycleEngagements() {
    engagementItems[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + 1) % engagementItems.length;
    
    engagementItems[currentIndex].classList.add('active');
  }
  
  function setActiveEngagement(index) {
    engagementItems.forEach(item => item.classList.remove('active'));
    
    currentIndex = index;
    engagementItems[currentIndex].classList.add('active');
    
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(cycleEngagements, 5000);
  }
  
  // Add click event to each engagement item
  engagementItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      setActiveEngagement(index);
    });
  });
  
  // Start auto-play
  autoPlayInterval = setInterval(cycleEngagements, 5000);
});



document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const cards = document.querySelectorAll('.card-stack .card');
  const dots = document.querySelectorAll('.dots .dot');

  if (cards.length === 0 || dots.length === 0) {
    console.warn('Carousel elements not found');
    return;
  }

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (dots[index]) {
        dots[index].classList.remove('active');
      }
      
      if (index === currentIndex) {
        card.classList.add('active');
        if (dots[index]) {
          dots[index].classList.add('active');
        }
      }
    });
  }

  window.jumpTo = function(index) {
    currentIndex = index;
    updateCarousel();
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 5000);

  // Initialize
  updateCarousel();
});

$(document).ready(function(){
    $('.related-articles-carousel').each(function(){
        $(this).owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ['<span>‹</span>', '<span>›</span>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 2,
                    nav: true,
                    dots: false,
                },
                992: {
                    items: 3,
                    nav: true,
                    dots: false,
                }
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
  const chiffreSection = document.querySelector('.chiffre');
  const counters = document.querySelectorAll('.item-chiffre h3');
  let hasAnimated = false;

  function animateCounter(element) {
    const target = element.textContent;
    
    const match = target.match(/([+]?)(\d+(?:\.\d+)?)\s*([KMk]*)/);
    
    if (!match) return;
    
    const prefix = match[1] || '';
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || '';
    const duration = 2000; 
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= targetNumber) {
        element.textContent = `${prefix}${targetNumber}${suffix}`;
        clearInterval(timer);
      } else {
        // Format the number based on its size
        let displayNumber = Math.floor(current);
        if (targetNumber >= 1000) {
          displayNumber = Math.floor(current);
        }
        element.textContent = `${prefix}${displayNumber}${suffix}`;
      }
    }, stepDuration);
  }

  function checkScroll() {
    if (hasAnimated) return;
    
    const sectionPosition = chiffreSection.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    
    // Trigger when section is 70% visible
    if (sectionPosition.top < screenHeight * 0.7 && sectionPosition.bottom > 0) {
      hasAnimated = true;
      counters.forEach((counter, index) => {
        setTimeout(() => {
          animateCounter(counter);
        }, index * 100); // Stagger the animations
      });
    }
  }

  // Check on scroll
  window.addEventListener('scroll', checkScroll);
  
  // Check on page load (in case section is already visible)
  checkScroll();
});
