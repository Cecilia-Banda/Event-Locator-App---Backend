import redis
def test_redis_connection():
    try:
        r = redis.Redis(host='localhost', port=6379, decode_responses=True)
        if r.ping():
            print("Yes! Successfully connected to Redis!")
        else:
            print("Oh no Redis connection failed.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_redis_connection()
