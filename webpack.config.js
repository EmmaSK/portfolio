"use strict";

const { resolve } = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./app/main"],
  output: {
    // path: resolve( __dirname,)
    // path: "/public",
    // publicPath: "/",
    // filename: "bundle.js",
    path: __dirname,
    publicPath: "/",
    filename: "./public/bundle.js",
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./app"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //   loader: require.resolve("url-loader"),
      //   options: {
      //     limit: 10000,
      //     name: "static/media/[name].[hash:8].[ext]",
      //   },
      // },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "./assets/[path][name].[hash].[ext]",
      //     },
      //   },
      // },
      { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" },
    ],
  },
};
