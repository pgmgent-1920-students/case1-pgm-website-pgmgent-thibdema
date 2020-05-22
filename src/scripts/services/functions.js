// Wait x milliseconds function
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Shuffling array
export function shuffle(array) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray;
}