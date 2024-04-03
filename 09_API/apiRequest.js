// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      // Resolve the Promise with the fetched data
      resolve(data);
      // If there was an error, reject the Promise
      reject('Error fetching data');
    }, 2000); // Simulating a 2-second delay
  });
  
  // Consuming the Promise
  fetchData.then(data => {
    console.log('Data fetched:', data);
  }).catch(error => {
    console.error('Error:', error);
  });
  