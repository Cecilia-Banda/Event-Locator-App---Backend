import redis

def test_redis_store():
    try:
        r = redis.Redis(host='localhost', port=6379, decode_responses=True)

        # Store a key-value pair
        r.set("greeting", "Hello, Redis!")

        # Retrieve the value
        value = r.get("greeting")

        print(f"Retrieved from Redis: {value}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_redis_store()
