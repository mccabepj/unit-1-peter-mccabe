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

function addColumns(cityPop) {
    document.querySelectorAll("tr").forEach(function (row, i) {
        if (i === 0) {
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
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

function addEvents() {
    document.querySelector("table").addEventListener("mouseover", function () {
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
        document.querySelector("table").style.color = color;
    });

    function clickme() {
        alert('Hey, you clicked me!');
    }

    document.querySelector("table").addEventListener("click", clickme);
}

// create the table element
var table = document.createElement("table");

// create a header row
var headerRow = document.createElement("tr");

// add the "City" and "Population" columns to the header row
headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

// add the row to the table
table.appendChild(headerRow);

// loop to add a new row for each city
for (var i = 0; i < cityPop.length; i++) {
    // assign longer HTML strings to a variable
    var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

    // append the row to the table
    table.insertAdjacentHTML("beforeend", rowHtml);
}

// get the div id
var theid = document.querySelector('#myDiv').id;

// set the id to newdiv
document.querySelector('#myDiv').id = "newDiv";

// set the class
document.querySelector('#newDiv').className = "foo";

// Added below Example 3.6...
// change the text color
document.querySelector('#newDiv').style.color = 'red'; // Corrected from 'myDiv' to 'newDiv'

// change the text size and alignment
document.querySelector('#newDiv').style.fontSize = '2em'; // Corrected from 'myDiv' to 'newDiv'
document.querySelector('#newDiv').style.textAlign = 'left'; // Corrected from 'myDiv' to 'newDiv'

// get the text color and add it as text to the div
var thecolor = document.querySelector('#newDiv').style.color;
document.querySelector('#newDiv').insertAdjacentHTML('beforeend', thecolor);


// append the table to the new div
document.querySelector("#newDiv").appendChild(table);


// Call the functions
addColumns(cityPop);
addEvents();
