module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2f3a62bf1455d16231756af56098141e'),
  },
});
