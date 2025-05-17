// Pull two numbers from a mock API and add them
fetch('https://jsonplaceholder.typicode.com/posts/1') // Using dummy API for testing
  .then(response => response.json())
  .then(data => {
    // Pretend the data contains two numbers
    const a = 5; // Hardcoded for now
    const b = 7;

    const sum = a + b;
    console.log("The sum is:", sum);
  });
