import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
};

export default config;
