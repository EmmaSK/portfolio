"use strict";

const { resolve } = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./app/main"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    // alias: {
    //   ...
    //   'pg-native': ./dummy,
    //   'dns': path-to-dummy-js-file
    // }
  },

  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./app"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
