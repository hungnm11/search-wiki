module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // or 'jsdom' if you're testing browser-based code
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  snapshotSerializers: [
    // Add any custom serializers here
    // 'jest-serializer-html',  // Example serializer
  ],
};
