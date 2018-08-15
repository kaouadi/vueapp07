
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

// vue.config.js
module.exports = {
    configureWebpack: {
      plugins: [

        new HtmlWebpackExternalsPlugin({
            externals: [
              {
                module: 'jquery',
                entry: 'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js',
              },
              {
              module: 'materialize-css',
                entry:{
                  path: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css',
                  type: 'css'
                }
              }
            ],
          }),
    ]
  }
}

