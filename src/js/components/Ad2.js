import {templates} from '../settings.js';


class Ad2 {
  constructor(element) {
    const thisAbout = this;

    thisAbout.render(element);
  }
  render(element) {
    const thisAbout = this;
    const generatedHTML = templates.Ad2();

    console.log(generatedHTML);

    thisAbout.dom = {};
    thisAbout.dom.wrapper = element;
    thisAbout.dom.wrapper.innerHTML = generatedHTML;

  }
}

export default Ad2;