export class Cards {
  bigCard(category, data) {
    return `
      <li class="bigCard">
        <a href="#!/${category}/detail/${data.id}" data-navigo>
          <div class="outer-div">
            <div class="bigCard__thumbnail inner-div" style="background-image: url(${data.thumbnail})"></div>
          </div>
          <div class="bigCard__text">
            <p class="bigCard__title">${data.title}</p>
            <p class="bigCard__subtitle">${data.subtitle}</p>
          </div>
        </a>
      </li>
    `;
  }

  smallCard (category, id, title, vak, thumbnail) {
    return `
    <li class="smallCard">
      <a href="#!/${category}/detail/${id}" data-navigo>
        <div class="outer-div smallCard__thumbnail">
          <div class="smallCard__thumbnail__img inner-div" style="background-image: url(${thumbnail})"></div>
          <div class="smallCard__thumbnail__vak">${vak}</div>
        </div>
        <div class="smallCard__text">
          <p class="smallCard__title">${title}</p>
        </div>
      </a>
    </li>
    `;
  }

  personCard (category, id, img) {
    return `
    <li class="personCard" data-id="${id}">
      <a href="#!/${category}/detail/${id}" class="personCard__mobile__link" data-navigo>
        <div class="outer-div">
          <div class="personCard__thumbnail inner-div" style="background-image: url(${img})"></div>
        </div>
      </a>
      <div class="personCard__content">
        <a href="#!/${category}/detail/${id}" class="personCard__content__link" data-navigo>More info</a>
        <div class="personCard__content__background"></div>
      </div>
    </li>
    `;
  }
}