import $ from 'jquery';

// Function to add paragraphs to the page body
function addParagraphs() {
  // Add three different paragraphs to the page body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<p>Copyright - Holberton School</p>');
}

// Calling the function to add paragraphs when the DOM is ready
$(document).ready(function() {
  addParagraphs();
});
