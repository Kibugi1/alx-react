import $ from 'jquery';
import _ from 'lodash';

// Counter to track button clicks
let count = 0;

// Function to update counter and display the count
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Debounced version of updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 1000); // Adjust the debounce delay as per your requirement


$(document).ready(function() {
    // Add elements to the DOM
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});
