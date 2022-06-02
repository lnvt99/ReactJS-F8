### Webpack
- URL: https://webpack.js.org/
- Module front-end reactjs

# Install React basic:
- npm init
- npm install webpack webpack-cli --save-dev
- npm install react@17.0.2 react-dom@17.0.2 --save
- npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
- Create folder & file: public/index.html
- Create folder & file: src/index.js

# Install Webpack:
- npm install css-loader style-loader --save-dev
- Create file: webpack.config.js
- Create file: .babelrc
- Insert 2 lines into package.json

# Install html-webpack-plugin:
-  new HtmlWebpackPlugin({
      template: "./public/index.html"
    }) into plugin block code  in webpack

# Install webpack-dev-server:
- npm install webpack-dev-server --save-dev

