import '@/containerRegistrations'
import * as Sentry from "@sentry/node";

import type { Express } from 'express';

import express from 'express';
import dotenv from 'dotenv';

import billRouter from "@/routes/bill"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({tracing: true}),
    new Sentry.Integrations.Express({app}),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(billRouter)

app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
