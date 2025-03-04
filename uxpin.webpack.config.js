// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        loader: require.resolve('babel-loader', {
          paths: ['./node_modules/@uxpin/merge-cli'],
        }),
        test: /\.js?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env', {
              paths: ['./node_modules/@uxpin/merge-cli'],
            }),
            require.resolve('@babel/preset-react', {
              paths: ['./node_modules/@uxpin/merge-cli'],
            }),
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: './dist',
    },
  },
};

module.exports = config;
