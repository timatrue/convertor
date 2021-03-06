const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        app: "./dev/src/boot.ts",
        polyfill: "./dev/src/polyfill.ts"
    },
    output: {
        filename: "./public/app/[name].js"
    },
    module: {
		    rules: [
					{
						test: /\.css$/,
						use: [ 'style-loader', 'css-loader' ]
					},
					{
						test: /\.ts$/,
						use: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
						exclude: /node_modules/
					},
                    {
                        test: /\.html$/,
                        loader: 'raw-loader'
                    }
				]
    },
	plugins: [new UglifyJSPlugin()],
    resolve: {
        extensions: [".js", ".ts", ".css"]
    }
};