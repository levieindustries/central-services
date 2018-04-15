const {env} = process;
const url = require('url');

const ONLY_FINAL = env.ONLY_FINAL === '1';
const WATCH = env.WATCH === '1';

const {URL} = env;

const HOSTNAME = url.parse(URL).hostname;

const FINAL = {
  transformers: {
    name: 'underscore-template',
    options: {data: {URL, WATCH, HOSTNAME}}
  },
  builds: {
    'etc/nginx.conf': {base: 'etc', dir: '/etc/nginx'}
  }
};

const FULL = {
  transformers: [].concat(
    {name: 'eslint', only: 'src/**/*.js'},
    {
      name: 'babel',
      only: ['src/**/*.+(js|scss)', '**/*.+(css|json)'],
      options: {
        plugins: ['transform-runtime', 'transform-decorators-legacy'],
        presets: ['env', 'stage-0']
      }
    }
  ),
  builds: {
    'src/**/*': {base: 'src', dir: 'dist'}
  },
  manifestPath: 'dist/manifest.json'
};

module.exports = ONLY_FINAL ? FINAL : FULL;
