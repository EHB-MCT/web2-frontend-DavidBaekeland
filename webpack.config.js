// npx webpack: normaal automatich -> ook aanpassen
// https://webpack.js.org/concepts/output/#multiple-entry-points


const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    login: './src/login.js',
    questions: './src/questions.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'production',
  watch: true
};
