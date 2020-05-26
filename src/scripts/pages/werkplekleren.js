import { werkpleklerenDATA } from '../services/fetchURL';


export const mainWerkplekLeren = async () => {
  const data = await werkpleklerenDATA();
  showRows(data);
}

const showRows = (data) => {
  const DOMWerkplekleren = document.querySelector('#werkplekleren');
  let direction = '', tempStr = '';
  data.forEach((e, index) => {
    (index % 2 == 1) ? direction = 'reverse' : direction = '';
    tempStr += row(direction, e);
  });
  DOMWerkplekleren.innerHTML = tempStr;
}

const row = (direction,data) => {
  const content = `<section class="container intro row ${direction}">
    <div>
      <div class="outer-div">
        <div class="inner-div" style="background-image: url(${data.thumbnail})"></div>
      </div>      
    </div>
    <article>
        <h1>${data.title}</h1>
        <p class="context">
            ${data.text}
        </p>
        <a href="${data.href}">
            <button class="btn-1">
                ${data.button_text}
            </button>
        </a>
    </article>
  </section>
  `;
  return content;
};