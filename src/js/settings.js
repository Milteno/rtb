export const classNames = {
  pages: {
    active: 'active',
    finder: 'active',
  },
  nav: {
    active: 'active',
  }
};
export const select = {
  containerOf: {
    pages: '#pages',
    ad1: '.ad1-wrapper',
    ad2: '.ad2-wrapper',
    ad3: '.ad3-wrapper',
  },
  nav: {
    links: '.main-nav a',
  },
  templateOf: {
    ad1template: '#template-ad1-page',
    ad2template: '#template-ad2-page',
    ad3template: '#template-ad3-page',
  },
};
export const templates = {
  Ad1: Handlebars.compile(document.querySelector(select.templateOf.ad1template).innerHTML),
  Ad2: Handlebars.compile(document.querySelector(select.templateOf.ad2template).innerHTML),
  Ad3: Handlebars.compile(document.querySelector(select.templateOf.ad3template).innerHTML),
};