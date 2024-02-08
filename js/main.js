// Existing code...

//create array containing two objects
var cityPop = [
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

//function declared to add column to array 'cityPop'. 
function addColumns(cityPop) {
    document.querySelectorAll("tr").forEach(function (row, i) {
        if (i === 0) {
            // Add the "City Size" column to the header row
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }

            // Add the "City Size" cell to the row
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

function addEvents() {

    // mouseover effects
    document.querySelectorAll("td").forEach(function (cell) {
        cell.addEventListener("mouseover", function () {
            var color = "rgb(";

            for (var i = 0; i < 3; i++) {
                var random = Math.round(Math.random() * 255);
                color += random;

                if (i < 2) {
                    color += ",";
                } else {
                    color += ")";
                }
            }

            // Set the color to the specific cell
            cell.style.color = color;
        });
    });
}

// Create table 
var table = document.createElement("table");

// Create header row
var headerRow = document.createElement("tr");

// Add "City", "Population" columns to the header row
headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

// Add the row to the table
table.appendChild(headerRow);

// Loop to add new row for each city
for (var i = 0; i < cityPop.length; i++) {
    // Create a new row
    var row = document.createElement("tr");

    // Add the "City" and "Population" cells to the row
    row.insertAdjacentHTML("beforeend", "<td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td>");

     // Determine the city size based on population
    var citySize;
    if (cityPop[i].population < 100000) {
        citySize = 'Small';
    } else if (cityPop[i].population < 500000) {
        citySize = 'Medium';
    } else {
        citySize = 'Large';
    }

    // Append the row to the table
    table.appendChild(row);
}

// Append the table to the new div
document.querySelector("#myDiv").appendChild(table);

// Call the functions to set up the initial table and events
addColumns(cityPop);
addEvents();

// Define debugCallback function to process the response and return GeoJSON data
function debugCallback(response) {
    //  method to parse the JSON data
    return response.json();
}

// AJAX Fetch for GeoJSON data 
async function debugAjax() {
    try {
        var myData;

        //Use the Fetch API to make an asynchronous request to the GeoJSON file
        const response = await fetch("data/MegaCities.geojson"); 

        // Call the debugCallback function to process the response and parse the JSON data
        myData = await debugCallback(response);

        // Insert GeoJSON data into the HTML element with ID "myDiv"
        document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData));
    }   catch (error) {
        console.error('Error fetching GeoJSON data:', error);
    }
}

// Call the function to fetch GeoJSON data
debugAjax();
