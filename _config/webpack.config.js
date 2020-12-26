const webpack = require( "webpack" );
const path = require( 'path' );

const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

// SW
const { GenerateSW } = require( 'workbox-webpack-plugin' );

const CONFIG = {
  PROJECT: path.resolve( __dirname, '../' ),
  PUBLIC: path.resolve( __dirname, '../public' ),
  DIST: path.resolve( __dirname, '../public/asset' ),
  SRC: path.resolve( __dirname, '../src' ),
  BrowserSync: {
    proxy: 'http://sensai.komori.com/',
    port: 2223,
    notify: false,
    open: false
  }
};

module.exports = env => {
  const PRODUCTION = JSON.stringify( process.env.NODE_ENV === "production" );

  // Ssss
  const scssBuildConfig = {
    cache: true,
    context: CONFIG.SRC,
    entry: [CONFIG.SRC + '/scss/index.scss'],
    output: {
      path: CONFIG.DIST + '/css',
      filename: 'bundle.css'
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract( {
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              root: CONFIG.PROJECT,
            }
          }, {
            loader: 'postcss-loader',
            options: {
              config: {
                path: CONFIG.PROJECT + '/_config/postcss.config.js'
              }
            }
          }, {
            loader: "sass-loader",
            options: {
              outputStyle: 'compressed',
            }
          },],
        } )
      }, {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name( file ) {
              return file.replace( CONFIG.PROJECT, '' ).replace( '/public/asset', '..' );
            },
            emitFile: false
          }
        }]
      }, {
        test: /\.(woff|woff2|otf|OTF)$/,
        use: [{
          loader: 'url-loader',
        }]
      }]
    },
    plugins: [
      new ExtractTextPlugin( {
        filename: "bundle.css",
        disable: false,
        allChunks: true
      } ),
      new BrowserSyncPlugin( {
        proxy: CONFIG.BrowserSync.proxy,
        port: CONFIG.BrowserSync.port,
        notify: CONFIG.BrowserSync.notify,
        open: CONFIG.BrowserSync.open,
        files: [
          CONFIG.PROJECT + '/**/*.html',
          CONFIG.PROJECT + '/**/*.php',
          CONFIG.DIST + '/**/*.sass',
          CONFIG.DIST + '/**/*.js'
        ]
      } )
    ]
  };

  // JavaScript
  const jsBuildConfig = {
    context: CONFIG.SRC,
    entry: {
      app: CONFIG.SRC + '/js/index.js'
    },
    output: {
      path: CONFIG.DIST + '/js/',
      filename: '[name].bundle.js',
      publicPath: "/asset/js/"
    },
    resolve: {
      alias: {
        'js': path.join( __dirname, '../src/js/' ),
        'utility': path.join( __dirname, '../src/js/utils/Utility.js' )
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: CONFIG.SRC + '/js',
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }]
              ]
            }
          }]
        }, {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          include: CONFIG.SRC + '/js',
          use: [
            'raw-loader', {
              loader: 'glslify-loader',
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {}
            }
          ]
        }, {
          test: /\.css$/,
          use: [
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin( {} ),
      new webpack.DefinePlugin( {
        'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV ),
        'process.env.TIME_STAMP': JSON.stringify( Date.now() ),
        'PRODUCTION': PRODUCTION,
      } ),
      new UglifyJsPlugin( {
        sourceMap: !PRODUCTION,
        uglifyOptions: {
          warnings: false
        }
      } ),
      // new GenerateSW( {
      //   cacheId: '',
      //   swDest: CONFIG.PUBLIC + '/_sw.js',
      //   runtimeCaching: [
      //     {
      //       urlPattern: /.+(\/|.html|.php)$/,
      //       handler: "NetworkFirst",
      //       options: {
      //         cacheName: '' + "-html-cache",
      //         expiration: {
      //           maxAgeSeconds: 60 * 60 * 24 * 1,
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /.+\.(js|css|json)$/,
      //       handler: "CacheFirst",
      //       options: {
      //         cacheName: '' + "-dependent-cache",
      //         expiration: {
      //           maxAgeSeconds: 60 * 60 * 24 * 1,
      //         },
      //       },
      //     },{
      //       urlPattern: /.+\.(woff|woff2|otf|OTF|svg)$/,
      //       handler: "CacheFirst",
      //       options: {
      //         cacheName: '' + "-font-cache",
      //         expiration: {
      //           maxAgeSeconds: 60 * 60 * 24 * 30,
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /.+\.(webp|jpg|jpeg|png|ico|mp4)$/,
      //       handler: "CacheFirst",
      //       options: {
      //         cacheName: '' + "-image-cache",
      //         expiration: {
      //           maxAgeSeconds: 60 * 60 * 24 * 1,
      //         },
      //       },
      //     },
      //   ]
      // } ),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      }
    },
    devtool: PRODUCTION ? '' : 'source-map'
  };

  return [scssBuildConfig, jsBuildConfig];
};