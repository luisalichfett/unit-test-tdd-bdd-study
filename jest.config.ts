import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['./src/components/**'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageThreshold: {
        global: {
            lines: 70,
        },
    },
    moduleNameMapper: {
        '^@/(.*)': '<rootDir>/src/$1',
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'jest-transform-stub',
    },
};

export default config;
