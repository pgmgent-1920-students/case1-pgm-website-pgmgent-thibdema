import { owner } from './config';

export const makeSiteUnique = {
  init() {
    // Get DOM objects
    this.currentYear = document.querySelectorAll('#currentYear');
    this.DOMOwner = document.querySelectorAll('#owner');
  },

  updateYear() {
    const year = new Date().getFullYear();
    this.currentYear.forEach(e => {
      e.innerText = year;
    });
  },

  setOwner() {
    this.DOMOwner.forEach(e => {
      e.innerText = owner;
    });
  },

  main() {
    this.init();
    this.updateYear();
    this.setOwner();
  }
};