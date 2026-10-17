import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

// jsdom enforces CORS on mocked cross-origin responses, so test handlers must send these
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
};

export const server = setupServer(
  // Answer CORS preflights, e.g. for requests sending an Authorization header
  http.options("*", () => {
    return new HttpResponse(null, { status: 204, headers: corsHeaders });
  })
);
