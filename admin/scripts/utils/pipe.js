export default (arg) =>
  (...funcs) =>
    funcs.reduce((x, f) => f(x), arg);
