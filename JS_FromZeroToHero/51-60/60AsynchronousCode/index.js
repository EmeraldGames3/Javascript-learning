document.getElementById('fetchBtn').addEventListener('click', fetchData);

async function fetchData() {
  try {
    document.getElementById('result').textContent = 'Fetching data...';

    // Simulate a fetch request to a mock API
    const data = await mockApiFetch();
    
    // Simulate processing the data
    const processedData = await processData(data);
    
    document.getElementById('result').textContent = `Processed Data: ${processedData}`;
  } catch (error) {
    document.getElementById('result').textContent = `Error: ${error.message}`;
  }
}

function mockApiFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance to succeed
      if (success) {
        resolve('Mock API data');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 2000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.toUpperCase());
    }, 1000);
  });
}
