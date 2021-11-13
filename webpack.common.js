const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;
module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
    new ModuleFederationPlugin({
      name: 'Host',
      filename: 'main.bundle.js',
      remotes: {
        layouts: 'Layouts@http://localhost:3001/main.bundle.js',
        auth: 'Auth@http://localhost:3002/main.bundle.js',
        meetings: 'Meetings@http://localhost:3003/main.bundle.js',
        landing: 'Landing@http://localhost:3004/main.bundle.js',
        messages: 'Messages@http://localhost:3005/main.bundle.js',
        profile: 'Profile@http://localhost:3008/main.bundle.js',
        search: 'Search@http://localhost:3006/main.bundle.js',
      },
      exposes: {},
      shared: [{
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        }
      },
      {
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        }
      },
      { "react-router-dom": { requiredVersion: deps["react-router-dom"], singleton: true } }
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      utils: path.resolve(__dirname, 'src/utils/'),
      shared: path.resolve(__dirname, 'src/components/shared/'),
    },
  },
};
