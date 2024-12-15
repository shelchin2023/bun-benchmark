Bun.serve({
    port:6890,
    fetch(req) {
      return new Response("Bun!");
    },
  });
console.log("http://localhost:6890")