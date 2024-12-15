FROM oven/bun
WORKDIR /app

COPY . .
 
RUN ls -al -h
CMD bun run ./cluster.ts
EXPOSE 6890