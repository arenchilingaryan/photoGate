module.exports = {
    preset: 'ts-jest',
    coverageReporters: ['html', 'lcov', 'text'],
    coverageDirectory: '<rootDir>/coverage',
    testEnvironment: "jsdom",
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.js',
        },
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleDirectories: [
        "node_modules",
        "bower_components",
        "shared"
    ]
}