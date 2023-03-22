module.exports = [{
    mode: 'production',
    entry: './dist/src/background/index.js',
    target: 'node',
    output: {
      filename: 'index.js',
      path: __dirname + '/dist/packed',
      libraryTarget: 'commonjs2',
    },
    externals: ['electron'],
}, {
    mode: 'production',
    entry: './dist/src/background/renderer/preload.js',
    output: {
      filename: 'preload.js',
      path: __dirname + '/dist/packed',
      libraryTarget: 'commonjs',
    },
    externals: ['electron'],
}]