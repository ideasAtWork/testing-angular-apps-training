# Webpack Intro Tutorial

1. Clone the project and inspect the files. Observe `app.js`, `mailOperations.js`.

2. Install Babel and Webpack through npm.
```
npm install babel-loader @babel/core @babel/preset-env webpack -—save-dev
```
3. Take a look at `webpack.config.js` (notice how `entry`, `output` and `loaders` are configured).
4. Run `npm init` in order to install dependencies.
5. Run `webpack`, notice the output and the files it produces.
6. What about `index.html`?
Let's use a Webpack Plugin for auto-generating it.

``` ```

Also add the new plugin to the webpack config file.

```
...
plugins: [new HtmlWebpackPlugin()],
```

7. Open index.html in a browser.

8. Development Server? Enter: Webpack Dev Server.

```
npm install -g webpack-dev-server --save-dev
```

Configure the Dev Server in `webpack.config.js`.
```
...
devServer: {  contentBase: path.join(__dirname, "dist") }
```

9. Start Webpack Dev Server by running this command in the terminal:

```
webpack-dev-server --progress --debug --inline --host 0.0.0.0
```

10. Open http://localhost:8080
    (Bonus: page reloads on changes)
11. add webpack-dev-server-command as a npm script
