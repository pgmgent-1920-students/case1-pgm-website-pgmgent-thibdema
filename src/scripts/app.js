// Import css
import '../styles/app.scss';

// Importing npm's
import Navigo from 'navigo';
import nunjucks from 'nunjucks';

// Import general functions & variables
import { appContent } from "./services/config";
import { makeSiteUnique } from "./services/unique";


// Import specific functions for each page
import { mainHome } from './pages/home';




// Import components
import { toggleMenu } from './components/hamburgermenu';


// Configuration nunjucks
nunjucks.configure('templates', {autoescape: true});

// Configuration navigo router
let router = new Navigo(document.location.origin, true, '#!');
router.updatePageLinks();



// Navigo routering pages
router.on({
  '/': () => {
    let template = nunjucks.render('home.html',{});
    appContent.innerHTML = template;
    mainHome();
  },
  '/opleidingsinfo': () => {
    let template = nunjucks.render('opleidingsinfo.html',{});
    appContent.innerHTML = template;
  },
  '/werkplekleren': () => {
    let template = nunjucks.render('werkplekleren.html',{});
    appContent.innerHTML = template;
  },
  '/contact': () => {
    let template = nunjucks.render('contact.html',{});
    appContent.innerHTML = template;
  },
}).resolve();




// Main data that is needed on all the pages of the app
const app =  {
  init(){
    toggleMenu();
    makeSiteUnique.main();
  },
};

// Initialize app
app.init();

