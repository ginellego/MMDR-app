module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'], // Root of the project
          alias: {
            '@': './',  // '@/' now points to MMDR-app/
          },
        },
      ],
    ],
  };
};
