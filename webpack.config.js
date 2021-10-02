const path = require("path");

module.exports = {
  entry: "./src/aos.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "aos.js",
    library: "aos",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
