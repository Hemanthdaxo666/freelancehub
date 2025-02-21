export default {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    ['@babel/plugin-transform-runtime', {
      regenerator: true
    }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  env: {
    test: {
      plugins: [
        'babel-plugin-dynamic-import-node',
        '@babel/plugin-transform-modules-commonjs'
      ]
    },
    development: {
      plugins: [
        'react-refresh/babel'
      ]
    }
  }
}
