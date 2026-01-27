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

// Optional: Auto-play every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
}, 5000);