import {select, classNames} from './settings.js';
import Ad1 from './components/Ad1.js';
import Ad2 from './components/Ad2.js';
import Ad3 from './components/Ad3.js';

const app = {
  initPages: function() {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages) {
      if(page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function(event){
        const clickedElement = this;

        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

      });
    }
  },
  activatePage: function(pageId) {
    const thisApp = this;
    /* add class "active */
    for(let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for(let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
    window.location.hash = '#/' + pageId;
    thisApp.currentPageId = pageId;

  },

  initAd1: function() {
    const thisApp = this;

    thisApp.Ad1 = new Ad1(document.querySelector(select.containerOf.ad1));


  },

  initAd2: function() {
    const thisApp = this;
    thisApp.Ad2 = new Ad2(document.querySelector(select.containerOf.ad2));

  },

  initAd3: function() {
    const thisApp = this;
    thisApp.Ad3 = new Ad3(document.querySelector(select.containerOf.ad3));

  },

  init: function(){
    const thisApp = this;
    thisApp.initPages();
    thisApp.initAd1();
    thisApp.initAd2();
    thisApp.initAd3();
  },
};

app.init();