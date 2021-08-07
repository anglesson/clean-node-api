export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  trandform: {
    '.+\\.ts$': 'ts-jest'
  }
}
