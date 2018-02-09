export const resolveEventHandler = parser => callback => event => {
  if (callback) {
    if (parser) {
      callback(parser(event));
    } else {
      callback(event);
    }
  }
};
