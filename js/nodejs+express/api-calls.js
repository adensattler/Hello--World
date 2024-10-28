/*
You can make api calls in NodeJS in 5 MAIN ways (there are many other ways with a bajillion 3rd party libraries)
1. fetch                (native in Node v18+)
2. node-fetch           (external library)
3. axios                (really awesome! but external library)
4. https/http           (native but use if you hate yourself)
5. request              (super old!!! dont use!! callbacks boooo)
*/

// fetch 
// *** Same as js implementation ***
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// node-fetch
// *** Same as fetch js implementation just add dependency***
const fetch = require('node-fetch');


// axios
const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// https
const https = require('https');

https.get('https://api.example.com/data', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.error(err);
});


// request
// whatever im not even going to include this its old and uses callbacks
request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
            refresh_token = body.refresh_token;
        res.send({
            'access_token': access_token,
            'refresh_token': refresh_token
        });
    }
});