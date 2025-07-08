
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://alondracarrillocelis.github.io/proyecto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 480, hash: 'f471c695a822407aaca5239f8b61c2313635070829ced461e8db76da143dc87a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 993, hash: '91fe78d8715da8c3d44724ea1bcc9df79cf4dd62b94132eb7bd2261e7dc3d48f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21592, hash: 'a7e9865fc954590d4e47dba28db8c083f3b249340110f82df8d60c50c093b9ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
