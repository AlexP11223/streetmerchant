import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Skytech: Store = {
  name: 'skytech',
  currency: '€',
  labels: {
    inStock: {
      container: '.kiekis .val',
      text: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    maxPrice: {
      container: '.kaina .num',
      euroFormat: false,
    },
    outOfStock: {
      container: '.kiekis .val',
      text: ['0'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'http://www.skytech.lt/gvn2060d66gd-gigabyte-nvidia-geforce-rtx-2060-6gb-pcie-30x16-dpx3-hdmix1-p-511378.html',
    },
  ],
  linksBuilder: {
    builder: getProductLinksBuilder({
      productsSelector: 'tr.productListing',
      sitePrefix: 'http://www.skytech.lt/',
      titleSelector: '.name a',
    }),
    ttl: 1,
    urls: [
      {
        series: '3070',
        url:
          'http://www.skytech.lt/vaizdo-plokstes-priedai-vaizdo-plokstes-vga-c-86_85_197_284.html?sand=0&pav=0&sort=5a&grp=1&page=1&pagesize=100&f=s(),g(),p(3935),k(38.19,3170.00)&frag=&fragd=0',
      },
      {
        series: '3080',
        url:
          'http://www.skytech.lt/vaizdo-plokstes-priedai-vaizdo-plokstes-vga-c-86_85_197_284.html?sand=0&pav=0&sort=5a&grp=1&page=1&pagesize=100&f=s(),g(),p(3936),k(38.19,3170.00)&frag=&fragd=0',
      },
    ],
  },
};
