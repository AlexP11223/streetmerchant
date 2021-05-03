import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Alternate: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.details-cart-button',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '.price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: 'span.d-flex > b:nth-child(1)',
        text: ['liefertermin unbekannt'],
      },
      {
        container: 'span.d-flex > b:nth-child(1)',
        text: ['Artikel kann nicht gekauft werden'],
      },
      {
        container: 'div.col-12 > div:nth-child(1)',
        text: ['Artikel kann derzeit nicht gekauft werden'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alternate.de/html/product/1679012',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725773',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1716805',
    },
    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1727976',
    },
    {
      brand: 'gainward',
      model: 'ghost',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725925',
    },
    {
      brand: 'gainward',
      model: 'ghost oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725930',
    },
    {
      brand: 'gainward',
      model: 'pegasus',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725933',
    },
    {
      brand: 'gainward',
      model: 'pegasus oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725932',
    },
    {
      brand: 'gigabyte',
      model: 'aorus elite',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1734878',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1723539',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1723538',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1726410',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3 red',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1717795',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1717794',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725916',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725915',
    },
    {
      brand: 'palit',
      model: 'stormx oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1725929',
    },
    {
      brand: 'zotac',
      model: 'amp white',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1715300',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url: 'https://www.alternate.de/html/product/1715299',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1693462',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1698594',
    },
    {
      brand: 'gainward',
      model: 'ghost',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1698655',
    },
    {
      brand: 'gainward',
      model: 'ghost oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1694300',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1698654',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1694299',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1694048',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3 red',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1696931',
    },
    {
      brand: 'inno3d',
      model: 'twin x2',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1709206',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1696932',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1714488',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1698653',
    },
    {
      brand: 'palit',
      model: 'dual oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1694308',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1698650',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1694305',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060ti',
      url: 'https://www.alternate.de/html/product/1694335',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1677326',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1677327',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1677330',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1679872',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1687863',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1687861',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684579',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684582',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684578',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1680777',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1688810',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1688819',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1681756',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1681759',
    },
    {
      brand: 'inno3d',
      model: 'twin x2',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1681760',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1681768',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684572',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684564',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684571',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1684570',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1702466',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.alternate.de/html/product/1679097',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672868',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1699867',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672867',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1699868',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672251',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672634',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673517',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673524',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673512',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673520',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1674164',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1713332',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1688597',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673443',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673442',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1680168',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1694051',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1692001',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672756',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672753',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1681134',
    },
    {
      brand: 'inno3d',
      model: 'ichill frostbite',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1693867',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673136',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673134',
    },
    {
      brand: 'inno3d',
      model: 'twin x2 oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673137',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672343',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672345',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1688679',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1688594',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673437',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1673431',
    },
    {
      brand: 'zotac',
      model: 'amp extreme holo',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1677982',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1677985',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1677989',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.alternate.de/html/product/1672612',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672870',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672872',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1701891',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672259',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672629',
    },
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673530',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673531',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673521',
    },
    {
      brand: 'evga',
      model: 'xc3',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673525',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673529',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra hybrid',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1703237',
    },
    {
      brand: 'gainward',
      model: 'phantom',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1688769',
    },
    {
      brand: 'gainward',
      model: 'phantom gs',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1688598',
    },
    {
      brand: 'gainward',
      model: 'phoenix',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673441',
    },
    {
      brand: 'gainward',
      model: 'phoenix gs',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673440',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1687793',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1680670',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1694043',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1694045',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672744',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672749',
    },
    {
      brand: 'gigabyte',
      model: 'turbo',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1687703',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1691159',
    },
    {
      brand: 'inno3d',
      model: 'gaming x3',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673131',
    },
    {
      brand: 'inno3d',
      model: 'ichill frostbite',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1693868',
    },
    {
      brand: 'inno3d',
      model: 'ichill x3',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673135',
    },
    {
      brand: 'inno3d',
      model: 'ichill x4',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673129',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1688672',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672341',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1689857',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672346',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673432',
    },
    {
      brand: 'palit',
      model: 'gaming pro oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1673434',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1688678',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1672611',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3090',
      url: 'https://www.alternate.de/html/product/1712450',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.alternate.de/html/product/1685588',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.alternate.de/html/product/1685585',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.alternate.de/html/product/1685590',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.alternate.de/html/product/1685584',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6800',
      url: 'https://www.alternate.de/html/product/1697045',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800',
      url: 'https://www.alternate.de/html/product/1702966',
    },
    {
      brand: 'sapphire',
      model: 'nitro+ oc',
      series: 'rx6800',
      url: 'https://www.alternate.de/html/product/1696483',
    },
    {
      brand: 'sapphire',
      model: 'pulse oc',
      series: 'rx6800',
      url: 'https://www.alternate.de/html/product/1702008',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800',
      url: 'https://www.alternate.de/html/product/1698793',
    },
    {
      brand: 'xfx',
      model: 'qick',
      series: 'rx6800',
      url: 'https://www.alternate.de/html/product/1716091',
    },
    {
      brand: 'asrock',
      model: 'phantom gaming',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1705279',
    },
    {
      brand: 'asrock',
      model: 'taichi x oc',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1704005',
    },
    {
      brand: 'asus',
      model: 'strix lc',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1695392',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1696417',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1705712',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master type-c',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1705710',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1697044',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1702969',
    },
    {
      brand: 'sapphire',
      model: 'nitro oc',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1696482',
    },
    {
      brand: 'sapphire',
      model: 'nitro+ oc se',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1696478',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1698792',
    },
    {
      brand: 'xfx',
      model: 'merc core',
      series: 'rx6800xt',
      url: 'https://www.alternate.de/html/product/1716084',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1702773',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1723388',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1713711',
    },
    {
      brand: 'msi',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1700508',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1712555',
    },
    {
      brand: 'sapphire',
      model: 'nitro+ oc',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1704994',
    },
    {
      brand: 'xfx',
      model: 'merc',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1713052',
    },
    {
      brand: 'xfx',
      model: 'merc ultra',
      series: 'rx6900xt',
      url: 'https://www.alternate.de/html/product/1704614',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.alternate.de/html/product/1675117',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.alternate.de/html/product/1675115',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.alternate.de/html/product/1651220',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5de',
      url: 'https://www.alternate.de/html/product/1651221',
    },
  ],
  name: 'alternate',
  linksBuilder: {
    builder: (docElement: cheerio.Cheerio, series) => {
      
      const productElements = docElement.find('.productBox');
      const links: Link[] = [];
      for (let i = 0; i < productElements.length; i++) {
        const productElement = productElements.eq(i);
        const titleElement = productElement.find('.product-name').first();
        const title = titleElement.text()?.replace(/\n/g, ' ').trim();
        const url = productElement.attr()?.href.replace(/\.de\/.+\/html\/product/, '.de/html/product');

        if (!title || !url) {
          continue;
        }

        const card = parseCard(title);

        if (card) {
          links.push({
            brand: card.brand as any,
            model: card.model,
            series,
            url,
          });
        } else {
          logger.error(`Failed to parse card: ${title}`, {url});
        }
      }

      return links;
    },
    waitForSelector: '.productBox',
    urls: [
      {
        series: '3060',
        url:
          'https://www.alternate.de/Grafikkarten/RTX-3060?lpf=2',
      },
      {
        series: '3060ti',
        url:
          'https://www.alternate.de/Grafikkarten/RTX-3060-Ti?lpf=2',
      },
      {
        series: '3070',
        url:
          'https://www.alternate.de/Grafikkarten/RTX-3070?lpf=2',
      },
      {
        series: '3080',
        url:
          'https://www.alternate.de/Grafikkarten/RTX-3080?lpf=2',
      },
      {
        series: '3090',
        url:
          'https://www.alternate.de/Grafikkarten/RTX-3090?lpf=2',
      },
    ],
  },
};
