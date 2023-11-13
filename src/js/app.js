import { settings, select } from './settings.js'
import  Products from './products.js'


const app = {

    init: function () {
      const thisApp = this;
  
      new Products();
      thisApp.getElement();
      thisApp.initPageListener();
    },
  
    getElement: function () {
      const thisApp = this;
  
      thisApp.dom = {},
      thisApp.dom.subPages = document.querySelectorAll(select.pages);
      thisApp.dom.contact = document.querySelector(select.contact);
      thisApp.dom.home = document.querySelector(select.home);
      thisApp.dom.product = document.querySelector(select.product);
    },
  
    initActivatePage: function (pageId) {
      const thisApp = this;
  
      for (const page of thisApp.dom.subPages) {
        page.classList.add(select.hidden);
      }
      for (const page of thisApp.dom.subPages) {
        let pageAttributes = page.getAttribute('id');
        if (pageAttributes == pageId) {
          page.classList.remove(select.hidden);
        }
      }
    },
  
    initPageListener: function () {
  
      const thisApp = this;
      const links = document.querySelectorAll(select.links);
  
      for (const link of links) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          const clickedElement = event.target.getAttribute('href').substring(1);
          thisApp.initActivatePage(clickedElement);
        });
      }
  
      const startSections = document.querySelectorAll(select.startingPages);
  
      for (const section of startSections) {
        section.classList.add(select.hidden);
      }
    }
  };

app.init();