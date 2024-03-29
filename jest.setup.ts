module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  "jest": {
    "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
  }
};
