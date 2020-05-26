// Wait x milliseconds function
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Shuffling array
export function shuffle(array) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray;
}

// Random number between min and max
export function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

// Remove double values in array
export const removeDoublesInArray = (array) => {
  array.filter((item, index) => array.indexOf(item) === index);
  return array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
}

// Scroll to top of the page
export const scrollToTop = (e) => {
  e.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
  });
}
