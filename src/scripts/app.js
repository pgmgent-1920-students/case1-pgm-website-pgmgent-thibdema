// Import css
import '../styles/app.scss';

// Importing npm's
import Navigo from 'navigo';
import nunjucks from 'nunjucks';

// Import general functions & variables
import { appContent } from "./services/config";
import { makeSiteUnique } from "./services/unique";


// Import specific functions for each page
import { FunctionRouter } from './pages';

// Import components
import { displaySocialMedia, arrowUp } from './components';

// Import layout
import {toggleMenu, mainNavigation, activeNavigation, footer } from './layout';

// Configuration nunjucks
nunjucks.configure('templates', {autoescape: true});

// Configuration navigo router
let router = new Navigo(document.location.origin, true, '#!');
router.updatePageLinks();

const page = new FunctionRouter;

let template = '';
// Navigo routering pages
router.on({
  '/': () => {
    template = nunjucks.render('home.html',{});
    appContent.innerHTML = template;
    page.HOME();
  },
  '/opleidingsinfo': () => {
    template = nunjucks.render('opleidingsinfo.html',{});
    appContent.innerHTML = template;
  },
  '/curriculum': () => {
    template = nunjucks.render('curriculum.html',{});
    appContent.innerHTML = template;
    page.CURRICULUM();
  },
  '/blog': () => {
    template = nunjucks.render('blog.html',{});
    appContent.innerHTML = template;
    page.BLOG();
  },
  '/blog/detail/:id': (params) => {
    template = nunjucks.render('blogdetail.html',{});
    appContent.innerHTML = template;
    page.BLOGDETAIL(params);
  },
  '/students': () => {
    template = nunjucks.render('students.html',{});
    appContent.innerHTML = template;
    page.STUDENTS();
  },
  '/students/detail/:id': (params) => {
    template = nunjucks.render('studentdetail.html',{});
    appContent.innerHTML = template;
    page.STUDENTDETAIL(params);
  },
  '/teachers': () => {
    template = nunjucks.render('teachers.html',{});
    appContent.innerHTML = template;
    page.TEACHERS();
  },
  '/teachers/detail/:id': (params) => {
    template = nunjucks.render('teacherdetail.html',{});
    appContent.innerHTML = template;
    page.TEACHERDETAIL(params);
  },
  '/wiezijnwe': () => {
    template = nunjucks.render('wiezijnwe.html',{});
    appContent.innerHTML = template;
    page.WIEZIJNWE();
  },
  '/werkplekleren': () => {
    template = nunjucks.render('werkplekleren.html',{});
    appContent.innerHTML = template;
    page.WERKPLEKLEREN();
  },
  '/contact': () => {
    template = nunjucks.render('contact.html',{});
    appContent.innerHTML = template;
  },
}).resolve();

router.notFound(() => {
  template = nunjucks.render('404.html',{});
  appContent.innerHTML = template;
  page.ERROR404();
});

// Main data that is needed on all the pages of the app
const app =  {
  init(){
    toggleMenu();
    displaySocialMedia();
    makeSiteUnique.main();
    mainNavigation();
    activeNavigation();
    footer();
    arrowUp();
  },
};

// Initialize app
app.init();