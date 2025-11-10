document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('cards-track');
  const nextButton = document.getElementById('next-slide');
  const prevButton = document.getElementById('prev-slide');
  const cards = Array.from(track.children);
  const totalCards = cards.length;
  let currentCardIndex = 0;
  function getCardsToShow() {
    if (window.innerWidth < 768) {
      return 1;
    } else {
      return 3;
    }
  }
  function getMovePercent() {
    const cardsToShow = getCardsToShow();
    return 100 / cardsToShow;
  }
  function updateCarousel() {
    const movePercent = getMovePercent() * currentCardIndex;
    track.style.transform = `translateX(-${movePercent}%)`;
    prevButton.disabled = currentCardIndex === 0;
    const cardsToShow = getCardsToShow();
    const lastClickableIndex = totalCards - cardsToShow;
    nextButton.disabled = currentCardIndex > lastClickableIndex;
  }
  nextButton.addEventListener('click', () => {
    const cardsToShow = getCardsToShow();
    const lastClickableIndex = totalCards - cardsToShow;
    if (currentCardIndex < lastClickableIndex) {
      currentCardIndex++;
      updateCarousel();
    }
  });
  prevButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      updateCarousel();
    }
  });
  window.addEventListener('resize', () => {
    const cardsToShow = getCardsToShow();
    const lastClickableIndex = totalCards - cardsToShow;
    if (currentCardIndex > lastClickableIndex) {
      currentCardIndex = lastClickableIndex;
    }
    updateCarousel();
  });
  updateCarousel();
});