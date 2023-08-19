// Get the dropdown elements
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");

// Add an event listener to the second dropdown
dropdown2.addEventListener("click", function() {
  // Check if the first dropdown is open
  if (dropdown1.classList.contains("open")) {
    // Close the first dropdown
    dropdown1.classList.remove("open");
  }
});

// Add an event listener to the document to close the first dropdown if clicked outside
document.addEventListener("click", function(event) {
  // Check if the click was outside both dropdowns
  if (!dropdown1.contains(event.target) && !dropdown2.contains(event.target)) {
    // Close the first dropdown
    dropdown1.classList.remove("open");
  }
});

// Add an event listener to the first dropdown to toggle its state
dropdown1.addEventListener("click", function() {
  // Toggle the "open" class to show/hide the dropdown options
  dropdown1.classList.toggle("open");
});
