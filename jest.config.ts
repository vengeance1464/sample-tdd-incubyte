module.exports = {
    preset: 'ts-jest', // Use ts-jest preset to handle TypeScript files
    testEnvironment: 'node', // Use Node.js test environment
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transpile TypeScript files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'], // File extensions Jest will recognize
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.json', // Path to tsconfig.json
      },
    },
  };
  