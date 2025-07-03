// sentry.client.config.ts
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a88dc300dbc377449e4d3ed2eb4356b8@o4509603650863104.ingest.us.sentry.io/4509603659776000",
  sendDefaultPii: true, // optional but useful in debugging
  tracesSampleRate: 1.0, // captures 100% of performance traces — adjust for production
});
