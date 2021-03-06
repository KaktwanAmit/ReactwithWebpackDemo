const path= require('path');
const autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
    mode:'development',
    devtool:'cheap-module-eval-source-map', 
    entry:'./index.js',
    output:{
        //path:path.resolve(__dirname,'/'),
        filename:'bundle.js',
        publicPath:'/'
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase:path.join(__dirname, './src')
     },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',  
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,   
                use:[
                     {loader:'style-loader'},
                     {loader:'css-loader',
                        options:{
                            importLoaders:1,
                            modules:true,
                            localIdentName:'[name]_[local]_[hash:base64:5]'
                        }                   
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:()=>[
                                autoprefixer({
                                    browsers:[
                                        ">5%"
                                        
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                 test:/\.(png|jpe?g|gif)$/,
                 loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    }
}