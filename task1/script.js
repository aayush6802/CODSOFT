document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


let isFlipped = false;

function flipCard() {
  const flipCardInner = document.getElementById("flip-card-inner");
  if (isFlipped) {
    flipCardInner.style.transform = "rotateY(0deg)";
  } else {
    flipCardInner.style.transform = "rotateY(180deg)";
  }
  isFlipped = !isFlipped;
}
