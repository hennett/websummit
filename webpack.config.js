var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),

    config = {
        entry: {
            app: './storage/app/public/app.js'
        },
        output: {
            path: path.resolve(__dirname, './public'),
            filename: 'js/app.bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    loader: 'babel?{"presets":["es2015"]}',
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, './storage/app/public')]
                },
                { test: /\.vue$/, loader: 'vue-loader' },
                { test: /\.html$/, loader: 'raw' },
                {
                    test: /\.(ico)|(jpe?g)|(png)|(gif)$/,
                    loaders: ['file-loader?publicPath=../&name=images/[hash].[ext]', 'image-webpack?optimizationLevel=7&interlaced=false']
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
                },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?publicPath=../&name=fonts/[hash].[ext]' },
                { test: /\.(woff2?)$/, loader:'url?prefix=font/&limit=5000&publicPath=../&name=fonts/[hash].[ext]' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&publicPath=../&name=fonts/[hash].[ext]' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&publicPath=../&name=fonts/[hash].[ext]' }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.vue'],
            fallback: [path.join(__dirname, './node_modules')],
            alias: {
                src: path.resolve(__dirname, './storage/app/public'),
                // vue: 'vue/dist/vue.js'
            }
        },
        resolveLoader: {
            fallback: [path.join(__dirname, './node_modules')]
        },
        plugins: [
			new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin('css/app.css', { allChunks: true }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
			// new webpack.optimize.DedupePlugin(),
			// new webpack.optimize.UglifyJsPlugin(),
			// new webpack.optimize.OccurenceOrderPlugin()
        ]
    };

module.exports = config;
