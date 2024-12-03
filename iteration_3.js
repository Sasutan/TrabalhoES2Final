async function* async_range(start, end) {
    for (let i = start; i <= end; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      yield i;
    }
  }
  
  (async () => {
    for await (const num of async_range(1, 5)) {
      console.log(num); 
    }
  })();
  