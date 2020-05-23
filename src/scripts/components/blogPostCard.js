export function makeBlogPostCard(data) {
  return `
    <li class="blogPostCard">
      <a href="#!/blog/detail/${data.id}" data-navigo>
        <div class="outer-div">
          <div class="blogPostCard__thumbnail inner-div" style="background-image: url(${data.thumbnail})";></div>
        </div>
        <div class="blogPostCard__text">
          <p class="blogPostCard__title">${data.title}</p>
          <p class="blogPostCard__subtitle">${data.subtitle}</p>
        </div>
      </a>
    </li>
  `;
}