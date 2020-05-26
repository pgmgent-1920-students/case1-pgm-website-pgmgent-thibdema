// Import css
import '../styles/app.scss';

// Importing npm's
import Navigo from 'navigo';
import nunjucks from 'nunjucks';

// Import general functions & variables
import { appContent } from "./services/config";
import { makeSiteUnique } from "./services/unique";


// Import specific functions for each page
import { mainHome, mainBlog, mainBlogDetail, mainStudentDetail, mainWieZijnWe, mainStudents, mainTeachers, mainTeacherDetail, mainWerkplekLeren } from './pages';

// Import components
import { displaySocialMedia } from './components';

// Import layout
import {toggleMenu, mainNavigation, activeNavigation, footer } from './layout';

// Configuration nunjucks
nunjucks.configure('templates', {autoescape: true});

// Configuration navigo router
let router = new Navigo(document.location.origin, true, '#!');
router.updatePageLinks();


let template = '';
// Navigo routering pages
router.on({
  '/': () => {
    template = nunjucks.render('home.html',{});
    appContent.innerHTML = template;
    mainHome();
  },
  '/opleidingsinfo': () => {
    template = nunjucks.render('opleidingsinfo.html',{});
    appContent.innerHTML = template;
  },
  '/blog': () => {
    template = nunjucks.render('blog.html',{});
    appContent.innerHTML = template;
    mainBlog();
  },
  '/blog/detail/:id': (params) => {
    template = nunjucks.render('blogdetail.html',{});
    appContent.innerHTML = template;
    mainBlogDetail(params);
  },
  '/students': () => {
    template = nunjucks.render('students.html',{});
    appContent.innerHTML = template;
    mainStudents();
  },
  '/students/detail/:id': (params) => {
    template = nunjucks.render('studentdetail.html',{});
    appContent.innerHTML = template;
    mainStudentDetail(params);
  },
  '/teachers': () => {
    template = nunjucks.render('teachers.html',{});
    appContent.innerHTML = template;
    mainTeachers();
  },
  '/teachers/detail/:id': (params) => {
    template = nunjucks.render('teacherdetail.html',{});
    appContent.innerHTML = template;
    mainTeacherDetail(params);
  },
  '/wiezijnwe': () => {
    template = nunjucks.render('wiezijnwe.html',{});
    appContent.innerHTML = template;
    mainWieZijnWe();
  },
  '/werkplekleren': () => {
    template = nunjucks.render('werkplekleren.html',{});
    appContent.innerHTML = template;
    mainWerkplekLeren();
  },
  '/contact': () => {
    template = nunjucks.render('contact.html',{});
    appContent.innerHTML = template;
  },
}).resolve();

// Main data that is needed on all the pages of the app
const app =  {
  init(){
    toggleMenu();
    displaySocialMedia();
    makeSiteUnique.main();
    mainNavigation();
    activeNavigation();
    footer();
  },
};

// Initialize app
app.init();