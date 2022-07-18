module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
            },
        ],
    },

    devServer: {
        static: __dirname + "/dist/",
        port: 8080,


    },
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',

    }
};