module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb', 'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
  },
  parser : "babel-eslint",
  parserOptions : {
    sourceType: "module",
    allowImportExportEverywhere : true
  }
};
