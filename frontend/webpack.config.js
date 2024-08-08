const path = require("path");
const webpack = require("webpack");


module.exports= {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
   
    
};
// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "./static/frontend"),
//     filename: "[name].js",
//     publicPath: "/static/frontend/"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
//   optimization: {
//     minimize: false, // Disable minimization for development
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: JSON.stringify("development"),
//       },
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "./static/frontend"),
//     },
//     compress: true,
//     port: 9000,
//     hot: true,
//   },
//   mode: "development", // Set mode to development
// };
