import {templates, settings, classNames} from '../settings.js';


class Ad1 {
  constructor(element) {
    const thisAd1 = this;

    thisAd1.render(element);
    thisAd1.fetchData();

  }

  render(element) {
    const thisAd1 = this;
    const generatedHTML = templates.Ad1();

    console.log(generatedHTML);

    thisAd1.dom = {};
    thisAd1.dom.wrapper = element;
    thisAd1.dom.wrapper.innerHTML = generatedHTML;

  }

  fetchData() {
    const thisAd1 = this;

    const url = settings.db.url + '/' + settings.db.products;


    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisAd1.result = thisAd1.sortProducts(parsedResponse);
      })
      .then(function () {
        return thisAd1.showData(thisAd1.result);
      });
  }

  showData(data) {
    const thisAd1 = this;
    thisAd1.dom.wrapper.innerHTML = data;

  }

  sortProducts(productData) {

    let products = [];

    for(let i = 0; products.length<=3 ; i++) {

      let randomProduct = productData[Math.floor(Math.random() * productData.length)];

      if(!products.includes(randomProduct)){
        products.push(randomProduct);
      }
    }
    console.log(products);
    return products;
  }

}

export default Ad1;