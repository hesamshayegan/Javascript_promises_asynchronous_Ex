let favNumber = 7;
let baseURL = "http://numbersapi.com"

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data)
});

// 2.
let favNumbers = [2, 7, 11];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data)
});

// 3.
// This code uses the Promise.all() method to make 4 asynchronous requests to the `baseURL`
// endpoint, with each request parametrized by the `favNumber` variable.
// The results of the requests are stored in an array called `facts`.
// The `then()` method is then used to iterate through the `facts` array and append
// each fact's `text` property to the `body` element of the HTML document.

// N.B. $.getJSON() method in jQuery is used to get JSON data using an AJAX HTTP GET request

Promise.all(
    // This function creates an array of 4 promises, each of which makes an asynchronous
    // request to the `baseURL` endpoint with the `favNumber` variable as a parameter.
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    // This function iterates through the `facts` array and appends each fact's `text` property
    // to the `body` element of the HTML document.
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
