const path = require("path");



module.exports = {

	entry: ["./js/index.jsx"],



	output: {

		filename: "out.js",

		path: path.resolve(__dirname, "js")

	},



	devtool: "source-map",

	watch: true,

	mode: 'development',



	module: {

		rules: [



            // JS

			{

				test: /\.jsx$/,

				exclude: /node_modules/,

				use: {

					loader: 'babel-loader',

					options: {

						presets: ['env',
								  'stage-2',
								  'react']

					}

				}

            }

        ]

	}

};

//npm run start || ./node_modules/.bin/webpack
