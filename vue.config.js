
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

// vue.config.js
module.exports = {
    configureWebpack: {
      plugins: [

        new HtmlWebpackExternalsPlugin({
            externals: [
              {
                module: 'materialize-js',
                entry: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js',
              },
              {
                module: 'jquery-js',
                entry: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js'

              },
              {
              module: 'materialize-css',
                entry:{
                  path: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css',
                  type: 'css'
                },
              },
              { 
              module: 'materialize-icons',
                entry:{
                  path: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                  type: 'css'
                }
              }
            ],
          }),
    ]
  }
}

//https://fonts.googleapis.com/icon?family=Material+Icons"

