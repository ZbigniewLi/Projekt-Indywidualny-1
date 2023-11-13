import { select, settings, templates } from './settings.js';
import utils from './utils.js';

class Products {
  constructor() {
    this.getData();
  }

  getData() {
    const thisProducts = this;
    const url =  settings.db.url + '/' + settings.db.data;

    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        const serverData = data;
        thisProducts.initProductView(serverData);
      });
  }

  initProductView(thisData) {

    const thisProduct = this;
    const generatedHTML = templates.productList({data:thisData});
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelectorAll(select.productsContainer);

    for (const containers of productsContainer) {
      containers.appendChild(thisProduct.element.cloneNode(true));
    }
  }
}

export default Products;
