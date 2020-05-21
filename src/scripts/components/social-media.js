import { socialMediaDATA } from '../services/fetchURL';

export const displaySocialMedia = async () => {
  const socialMediaDOM = document.querySelectorAll('#social-media');
  let tempStr = '';

  const data = await socialMediaDATA();
  data.forEach((e) => {
    console.log(e)
    tempStr += `
      <li class="social-media__item"><a href="${e.url}"><i class="${e.icon}"></i></a></li>
    `;
  });


  socialMediaDOM.forEach((e) => {
    e.innerHTML = tempStr;
  });
}

