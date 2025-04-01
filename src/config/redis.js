const { Queue, Worker } = require("bullmq");

const redisOptions = { connection: { host: "127.0.0.1", port: 6379 } };

// Test Redis Connection
const Redis = require("ioredis");
const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
  retryStrategy: times => Math.min(times * 50, 2000), // Adjust retry logic
});

redis.ping((err, result) => {
  if (err) {
    console.error("❌ Redis connection failed:", err);
  } else {
    console.log("✅ Redis is connected:", result); // Should print "PONG"
  }
});

// Create a job queue
const eventQueue = new Queue("eventQueue", redisOptions);

module.exports = { eventQueue, Worker, redisOptions };
