// Adding the API for the search
// fetch('https://countriesnow.space/api/v0.1/countries/population')
// .then(res => {
//     if (res.ok) {
//         console.log('success');
//         return res.json(); // Parse the JSON response
//     } else {
//         console.log('Not successful');
//     }
// })
// .then(data => {
//     ;
// })
// .catch(error => {
//     console.log('Error:', error);
// });

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function doSomethingPlease() {
    alert("I just did something")
}


async function getData(search) {
    // console.log(search)

    const url = "https://countriesnow.space/api/v0.1/countries/population";

    const payload = { country: search }

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(payload)
    }).then(async res => await res.json())
        .catch(error => {
            console.error(error.message);
        })

}


// Add event listener for the search button
document.getElementById('searchButton').addEventListener('click', async function () {
    const query = document.getElementById('searchInput').value.trim();

    if (query) {
        performSearch(query);
    } else {
        alert("Please Enter a search Query")
        document.getElementById('results').innerText = 'Please enter a search query.';
    }

});

// Function to simulate a search operation
async function performSearch(query) {
    // Simulate a list of items to search from
    const data = await getData(query)
    // const items = ['Country', 'City', 'Location', 'Population', 'Date', 'Weather', 'Flag'];
    // debugger
    // Filter items based on the query

    console.log(data)
    // Display results
    const resultsContainer = document.getElementById('results');
    if (data) {
        resultsContainer.innerHTML = `<strong>Results:</strong> ${data}`;
    } else {
        resultsContainer.innerText = 'No results found.';
    }
}

