const createJSIndex = {
  cmd: 'create-index',
  path: '',
  flags: ['--extensions js jsx'], // indexes JS and JSX files
  extension: "js"
};

const createTSIndex = {
  cmd: 'create-ts-index create -w -b',  // * cti create does not work with npx
  path: '',
  flags: [], // indexes TS and TSX files
  extension: "ts"
};

export { createJSIndex, createTSIndex }