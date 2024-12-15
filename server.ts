import { serve } from "bun";

const id = Math.random().toString(36).slice(2);

serve({
  port: process.env.PORT || 28080,
  development: false,

  // Share the same port across multiple processes
  // This is the important part!
  reusePort: true,

  async fetch(request) {
    return new Response("Hello from Bun #" + id + "!\n");
  }
});