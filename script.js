// your code here
document.getElementById('button').addEventListener('click', function() {
            // Get the values from the input fields
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Construct the URL based on the input values
            let baseUrl = 'https://localhost:8080/';
            let queryString = [];

            if (name) {
                queryString.push(`name=${encodeURIComponent(name)}`);
            }

            if (year) {
                queryString.push(`year=${encodeURIComponent(year)}`);
            }

            // If there are any query parameters, append them to the base URL
            if (queryString.length > 0) {
                baseUrl += '?' + queryString.join('&');
            }

            // Update the URL displayed in the h3 element
            document.getElementById('url').textContent = baseUrl;
        });