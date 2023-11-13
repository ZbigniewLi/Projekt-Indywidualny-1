export const select = {
  productList : '#template-products',
  productsContainer: '[data-container="productsContainer"]',
  product: '#product',
  contact: '#contact-us',
  startingPages: '#product, #contact-us',
  home: '#home',
  footer: 'footer',
  about:'#about',
  pages: '#home, #product, #contact-us',
  links: '.nav-link',
  hidden: 'hidden',
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    data: 'products',
  }
};


export const templates = {
  productList: Handlebars.compile(document.querySelector(select.productList).innerHTML),
};
