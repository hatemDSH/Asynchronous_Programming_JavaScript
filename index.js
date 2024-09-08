
// Task 01: Iterating with Async/Await 

async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

//Task 02: Awaiting a Call 
async function awaitCall() {
    try {
        const data = await new Promise(resolve => 
            setTimeout(() => resolve('Fetched data from API'), 2000)
        );
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

// Example usage
awaitCall();

// Task 03: Handling Errors with Async/Await

async function awaitCallWithErrorHandling() {
    try {
        const data = await new Promise((resolve, reject) => 
            setTimeout(() => reject(new Error('API call failed')), 2000)
        );
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Example usage
awaitCallWithErrorHandling();



// Task 04: Awaiting Concurrent Requests

async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve('Data from API 1'), 2000)),
            new Promise(resolve => setTimeout(() => resolve('Data from API 2'), 3000))
        ]);

        console.log('Response 1:', response1);
        console.log('Response 2:', response2);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Example usage
concurrentRequests();

// Task 05: Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        // Use Promise.all to make parallel API calls
        const responses = await Promise.all(urls.map(url => fetch(url)));

        // Convert all responses to JSON
        const data = await Promise.all(responses.map(response => response.json()));

        // Log the data from all API calls
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('An error occurred during parallel calls:', error.message);
    }
}

// Example usage
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

parallelCalls(urls);
