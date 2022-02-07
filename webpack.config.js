const path = require("path");

module.exports = {
    resolve: {
      extensions: ['js', 'tsx', 'ts', 'jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@hoc': path.resolve(__dirname, 'src/hoc'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@redux': path.resolve(__dirname, 'src/redux'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@views': path.resolve(__dirname, 'src/views'),
      },
    },
  }