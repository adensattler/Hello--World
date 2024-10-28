/*
You can make api calls in JavaScript in four ways (im only including two here for brevity)
1. fetch
2. axios                (Actually uses 4. behind the scenes!!!)
3. jQuery               ($.ajax)
4. XMLHttpRequest
*/

// Q: WHICH ONE DO I USE??
// A: Use fetch. If you have a good reason to then use axios.
//      - Axios is awesome and almost objectively better than fetch but...
//          1. fetch is native
//          2. reduces dependencies & bloat



// 1. fetch
// --------------------------------------
// (Async + Await)
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);  // Handle the response data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// (Promise Handling)
function fetchData() {
    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();  // Convert to JSON
        })
        .then(data => {
            console.log(data);  // Handle the response data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



// 2. Axios
// --------------------------------------
// (Async + Await)
async function fetchDataWithAxios() {
    try {
        const response = await axios.get('https://api.example.com/data');
        console.log(response.data);  // Axios automatically transforms JSON data
    } catch (error) {
        console.error('Error fetching data with Axios:', error);
    }
}

// (Promise Handling)
function fetchDataWithAxios() {
    axios.get('https://api.example.com/data')
        .then(response => {
            console.log(response.data);  // Axios automatically handles JSON
        })
        .catch(error => {
            console.error('Error fetching data with Axios:', error);
        });
}
// NOTE: must add this to you html file: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>








/*
1. fetch API
    Pros:
        Native to JavaScript (no external library required).
        Supports Promises and is relatively simple to use.
        Can work with both GET and POST requests easily.
    Cons:
        Requires manual handling for errors (non-2xx HTTP responses don't automatically throw errors).
        No built-in support for request cancellation (you need AbortController).
        Limited features for advanced use cases (like request retries, interceptors).

2. Axios
    Pros:
        Simple and concise syntax for making requests.
        Automatically handles JSON responses and errors (throws errors for non-2xx HTTP status codes).
        Supports older browsers without needing polyfills.
        Built-in support for request cancellation, timeouts, and interceptors (useful for adding headers, logging requests, etc.).
        More features like automatic transformation of request and response data.
    Cons:
        It's an external library, so you need to include it in your project (though it's very lightweight).
        ***NOTE***
        Must add this to you html file: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        Or use a webpack and import it as normal



Key Notes:
    - fetch needs manual response.json() to parse the JSON body, while Axios does it automatically.
    - Both approaches (async/await and promise handling) work similarly, but async/await provides a cleaner, more synchronous-looking code.
    - Error handling: For fetch, you need to manually check response.ok since it won’t throw an error for 
      non-200 responses, unlike Axios, which automatically throws an error for non-2xx responses.
*/