// Snowpack config
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: './src',
  buildOptions: {
    out: './build'
  },
  devOptions: {
    port: 5500,
    open: 'none'
  },
  optimize: {
    minify: true
  },
  plugins: ['@snowpack/plugin-postcss']
};