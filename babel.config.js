module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@api": "./src/api",
          "@store": "./src/store",
        },
      },
    ],
  ],
};
