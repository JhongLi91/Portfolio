module.exports = {
  webpack: (config, { isServer }) => {
    // Add file-loader for PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: `/_next/static/files`,
          outputPath: `${isServer ? '../' : ''}static/files`,
        },
      },
    });

    return config;
  },
};