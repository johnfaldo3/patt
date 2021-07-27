module.exports = {
  preset: "ts-jest",
  // Configure code coverage collection.
  reporters: [
    "default",
    ["jest-junit", { output: "./test-results/test-results.xml" }]
  ],
  coverageDirectory: "coverage",
  collectCoverage: false,
  collectCoverageFrom: ["{lib,src}/**/*.{js,ts,jsx,tsx}"],
  coverageThreshold: {
    global: {
      functions: 90,
      branches: 90
    }
  }
};
