import { postDATA, mentorsDATA } from '../services/fetchURL';
import { sitemail } from '../services/config';
import { Cards } from '../components';

export const mainContact = async () => {
  const contactsData = await mentorsDATA();
  mapbox();
  formProcessing();
  new Contactpersonen(contactsData);
}

const mapbox = () => {
  let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
  mapboxgl.accessToken = 'pk.eyJ1IjoidGhpYmF1dGRtOTgzMCIsImEiOiJjazNvZXB6aWcwa2tmM3BxZXBxZXVyam00In0.KhbUklIWzPRMVVMuJvpNzg';
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [3.668691, 51.087530],
    zoom: 8
  });
  
  let marker = new mapboxgl.Marker()
    .setLngLat([3.668691, 51.087530])
    .addTo(map);
}

const formProcessing = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData;

    const email = formData.get('email');
    const name = formData.get('name');
    const text = formData.get('text');

    const urlToSendMail = "pgm.gent/sendmail.php";

    const mailObject = {
      receiver: sitemail,
      sender: email,
      name: name,
      content: text
    };
    postDATA(urlToSendMail, mailObject);
  });
}

class Contactpersonen {
  constructor(data) {
    this.DOM = document.querySelector('#smallCardList');
    this.data = data;
    this.contacts = this.filterContacts();
    this.contacts.map((e) => this.DOM.innerHTML += this.createCards(e))
  }

  filterContacts() {
    let arr = [];
    this.data.map((e) => (e.contactpersoon) ? arr.push(e) : '');
    return arr;
  }

  createCards(data) {
    const cards = new Cards;

    return cards.smallCard('mentors', data.id, `${data.fname} ${data.lname}`, data.functie, data.thumbnail);
  }
}