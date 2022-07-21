const inlineConsoleMethods = Object.entries(console).reduce(
  (all, next) => ({
    ...all,
    [next[0]]: (thing, ...otherThings) => (
      console[next[0]](thing, ...otherThings), thing
    ),
  }),
  {},
);

export default Object.assign(inlineConsoleMethods.log, inlineConsoleMethods);
