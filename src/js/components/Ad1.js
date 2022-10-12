import {templates} from '../settings.js';


class Ad1 {
  constructor(element) {
    const thisAbout = this;

    thisAbout.render(element);
  }
  render(element) {
    const thisAbout = this;
    const generatedHTML = templates.Ad1();

    console.log(generatedHTML);

    thisAbout.dom = {};
    thisAbout.dom.wrapper = element;
    thisAbout.dom.wrapper.innerHTML = generatedHTML;

  }

}

export default Ad1;