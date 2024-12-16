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
    console.log(search)
    debugger
    const url = "https://countriesnow.space/api/v0.1/countries/population";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json
    } catch (error) {
        console.error(error.message);
    }
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
    const data = getData(query)
    const items = ['Country', 'City', 'Location', 'Population', 'Date', 'Weather', 'Flag'];
    debugger
    // Filter items based on the query
    const results = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    // Display results
    const resultsContainer = document.getElementById('results');
    if (results.length > 0) {
        resultsContainer.innerHTML = `<strong>Results:</strong> ${results.join(', ')}`;
    } else {
        resultsContainer.innerText = 'No results found.';
    }
}

