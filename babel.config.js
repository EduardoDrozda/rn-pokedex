module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@shared": "./src/shared",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
