const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    entry: './src/index.js',
    output: {    
        path: __dirname + '/dist',      
        filename:  'bundle.js'  
    },
    devServer: {
        contentBase: __dirname + '\\dist',
        hot: true,
        port: 9000
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
          })
    ],  
    module: {    
        rules: [    
            {      
                test: /\.(js|jsx)$/,      
                exclude: /node_modules/,     
                use: [
                    'babel-loader', 
                    'eslint-loader'
                ]    
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {      
                test: /\.svg$/,
                loader: 'svg-inline-loader'  
            }, 
            {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }   
        ]  
    },
};