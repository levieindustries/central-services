(async () => {
  try {
    require('./initializers/http').default();
  } catch (er) {
    console.error(er);
    process.exit(1);
  }
})();
