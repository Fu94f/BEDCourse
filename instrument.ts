import 'dotenv/config';
import * as Sentry from "@sentry/node";


Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: (defaults) => defaults.filter((i) => i.name !== "Dedupe"),
  
});