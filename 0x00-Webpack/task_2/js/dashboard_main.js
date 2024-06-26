import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

let counter = 0;

$(document).ready(function() {
    // Add elements to the DOM
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    function updateCounter() {
      counter++;
      $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
});
