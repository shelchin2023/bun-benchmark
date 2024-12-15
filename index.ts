const port = 6891
Bun.serve({
    port: port,
    fetch(req) {
        // console.log(req)
        return new Response("Bun!");
    },
});
console.log(`http://localhost:${port}`)