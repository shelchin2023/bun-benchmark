FROM oven/bun
WORKDIR /app

COPY . .
 
RUN ls -al -h
CMD bun run ./index.ts
EXPOSE 6890