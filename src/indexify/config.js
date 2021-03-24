const createJSIndex = {
  cmd: 'npx create-index',
  path: '',
  flags: [' --extensions js jsx'], // indexes JS and JSX files
  extension: "js"
};

const createTSIndex = {
  cmd: 'npx cti create -w',
  path: '',
  flags: [], // indexes TS and TSX files
  extension: "ts"
};

export { createJSIndex, createTSIndex }