module.exports = {
    transform: {
        '^.+\\.[tj]sx?$': ['babel-jest', {configFile: './babel.config.cjs'}],
    },
    testEnvironment: "jsdom"
};