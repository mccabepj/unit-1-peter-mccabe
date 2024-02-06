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
        if (i == 0) {
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); // **Corrected spelling of 'insertAdjacentHTML' 
        } else {
            var citySize;
            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium'; // Corrected: Capitalized 'S'.
            } else {
                citySize = 'Large';// Corrected: Capitalized 'S'.
            }

            // **Corrected spelling of 'insertAdjacentHTML'.inserts new row and add cell for city size category. 
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

function addEvents() {
    //  function for 'mouseover' event on each cell to change color (td).
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

    // insert nested function, 
    function clickme() {
        alert('Hey, you clicked me!');
    }

    // creates event listener so when users 'click' the table contents, the clickme function above is called. 
    document.querySelectorAll("td").forEach(function (cell) {
        cell.addEventListener("click", clickme);
    });
}

// Create the table element
var table = document.createElement("table");

// Create a header row
var headerRow = document.createElement("tr");

// Add the "City" and "Population" columns to the header row
headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

// Add the row to the table
table.appendChild(headerRow);

// Loop to add a new row for each city
for (var i = 0; i < cityPop.length; i++) {
    // Assign longer HTML strings to a variable
    var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

    // Append the row to the table
    table.insertAdjacentHTML("beforeend", rowHtml);
}

// Append the table to the new div
document.querySelector("#myDiv").appendChild(table);

// Call the functions
addColumns(cityPop);
addEvents();