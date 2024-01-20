module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
}
