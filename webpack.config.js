const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@common': path.resolve(__dirname, 'src/components/common'),
            '@constans': path.resolve(__dirname, 'src/constans'),
            '@fire': path.resolve(__dirname, 'src/firebase'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@routing': path.resolve(__dirname, 'src/routing'),
            '@HOC': path.resolve(__dirname, 'src/HOC'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ],
            },
            {
                test: /\.(png|jpg|svg|webp)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 5173,
        historyApiFallback: true,
        open: false,
    },
}
