```
git clone https://github.com/shelchin2023/bun-benchmark.git
docker compose up --build -d 
wrk -t4 -c200 -d30s http://localhost:5000
```
