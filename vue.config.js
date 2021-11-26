module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  devServer: {
    overlay: {},
  },
  lintOnSave: false,
  css: {
    extract: false,
  },
};
