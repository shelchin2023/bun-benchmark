FROM oven/bun
WORKDIR /app

COPY . .
 
RUN ls -al -h
RUN bun install
CMD bun run ./cluster.ts
EXPOSE 5000