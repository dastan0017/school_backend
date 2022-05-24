module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://fierce-temple-38026.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
