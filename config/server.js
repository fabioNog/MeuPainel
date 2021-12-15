module.exports = ({ env }) => ({
  host: env('https://mypainel.netlify.app', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
