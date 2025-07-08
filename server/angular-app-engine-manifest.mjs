
export default {
  basePath: 'https://alondracarrillocelis.github.io/proyecto',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
