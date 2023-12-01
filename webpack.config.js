const path = require("path");

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            favicon: path.resolve(__dirname, "public/favicon.ico"),
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new CleanWebpackPlugin(),
        new CssMinimizerPlugin(),
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    // Svgo configuration here https://github.com/svg/svgo#configuration
                    [
                        "svgo",
                        {
                        plugins: [
                            {
                                name: "preset-default",
                                params: {
                                    overrides: {
                                        removeViewBox: false,
                                        addAttributesToSVGElement: {
                                            params: {
                                                attributes: [
                                                    { xmlns: "http://www.w3.org/2000/svg" },
                                                ],
                                            },
                                        },
                                    },
                                },
                            },
                        ],
                        },
                    ],
                    ],
                },
            },
        }),
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new MiniCssExtractPlugin(), new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(webp|png|jpe?g|gif)$/i,
                type: 'asset/resource',
                use: [
                    {
                      loader: ImageMinimizerPlugin.loader,
                      options: {
                        severityError: 'warning', // Ignore errors on corrupted images
                        minimizerOptions: {
                          plugins: ['gifsicle'],
                        },
                      },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};