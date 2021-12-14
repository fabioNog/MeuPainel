module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '87c520c1d11dc36045299ab0a3e59255'),
  },
});
