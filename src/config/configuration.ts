export default () => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  sentry: process.env.SENTRY,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  customer_id: process.env.CUSTOMER_ID,
  twilioServiceId: process.env.TWILLIO_SERVICE_ID,
  customer_oath_credentials: process.env.CUSTOMER_OATH_CREDENTIALS,
  customer_oath_secret: process.env.CUSTOMER_OATH_SECRET,
  oath_audience: process.env.AUTH0_AUDIENCE,
  oath_issuer_url: process.env.AUTH0_ISSUER_URL,
  customer_api: process.env.CUSTOMER_SECRET
});
