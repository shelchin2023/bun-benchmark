```
git clone https://github.com/shelchin2023/bun-benchmark.git
docker compose up --build -d
curl -fsSL https://bun.sh/install | bash
bun install
bun run cluster.ts

# Native 模式
wrk -t4 -c200 -d30s http://localhost:5000
wrk -t4 -c200 -d30s http://localhost:5000/insert
wrk -t4 -c200 -d30s http://localhost:5000/count
wrk -t4 -c200 -d30s http://localhost:5000/query

# docker 桥接网络模式
wrk -t4 -c200 -d30s http://localhost:15000
wrk -t4 -c200 -d30s http://localhost:15000/insert
wrk -t4 -c200 -d30s http://localhost:15000/count
wrk -t4 -c200 -d30s http://localhost:15000/query

# docker host 网络模式
wrk -t4 -c200 -d30s http://localhost:16000
wrk -t4 -c200 -d30s http://localhost:16000/insert
wrk -t4 -c200 -d30s http://localhost:16000/count
wrk -t4 -c200 -d30s http://localhost:16000/query

```

bun drizzle-kit generate
bun drizzle-kit migrate
