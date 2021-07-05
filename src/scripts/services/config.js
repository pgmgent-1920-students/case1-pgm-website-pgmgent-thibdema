// DOM elements that are used on every page
export const appContent = document.querySelector('#app');

// Unique site details
export const owner = 'Thibaut De Maerteleire';
export const sitemail = 'helpdesk@pgm.gent';

// MAIN BAAS URL REPO
export const BAASURL = "https://pgmgent-1920-students.github.io/case1-pgm-website-baas-pgmgent-thibdema/";

// Repeat array for slider (loop)
export const repeatArraySlider = 20;

// Opleidingsinfo page
export const amountOfTechnologiesDisplayed = 4;

// Items showen on each page || paginering
export const displayedAmountsOnPages = {
  teachers: 5,
  students: 10,
  opleidingsinfo_technologies: 5,
  mentors: 5,
  home_blogposts: 4,
  cases: 6,
  blog: 6,
}

// Education time
export const educationDuration = [
  {
    name: "Jaar",
    amount: "2",
    DOM: "year"
  },
  {
    name: "Semester",
    amount: "4",
    DOM: "semester"
  },
  {
    name: "Periode",
    amount: "8",
    DOM: "period"
  }
];