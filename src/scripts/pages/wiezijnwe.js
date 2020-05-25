import { bannersDATA } from '../services/fetchURL';
import { banner } from '../components';

export const mainWieZijnWe = async () => {
  const DOMWieZijnWe = document.querySelector('#wie-zijn-we') 
  let tempStr = '', direction = '';
  const data = await bannersDATA();
  data.map((e, index) => {
    if(e.wiezijnwe == true) {
      (index % 2 == 1) ? direction = 'reverse' : direction = '';
      tempStr += `
        <section>
          ${banner(direction, e)}
        </section>`;
      index++;
    }
  });
  DOMWieZijnWe.innerHTML = tempStr;
}