import { serve } from "bun";

import insert from "./handlers/insert";
import count from "./handlers/count";
import query from "./handlers/query";
import update from "./handlers/update"
import { sqlite } from "./db";

sqlite.run('PRAGMA busy_timeout = 5000;');
sqlite.run('PRAGMA journal_mode=WAL;');

const id = Math.random().toString(36).slice(2);
console.log({ id })
serve({
    port: process.env.PORT || 5000,
    development: false,

    // Share the same port across multiple processes
    // This is the important part!
    reusePort: true,

    async fetch(request) {
        const parsedUrl = new URL(request.url);
        const path = parsedUrl.pathname;



        if (path == "/insert") {
            await insert("hi@openai.com")
            return new Response("insert ok from Bun #" + id + "!\n");
        }

        if (path == "/count") {
            const total = await count()
            return new Response(`count ${total} ok from Bun #` + id + "!\n");
        }

        if (path == "/query") {
            const result = await query()
            return new Response(`query ${result?.id} ${result?.username} ok from Bun #` + id + "!\n");
        }


        if (path == "/update") {
            await update()
            return new Response("update ok from Bun #" + id + "!\n");
        }


        console.log(id)
        return new Response("Hello from Bun #" + id + "!\n");

    }
});