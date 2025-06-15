// Write your code here!// Remove the existing <main> element
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign it an id of "victory"
newHeader.id = "victory";

// Set its text content
newHeader.textContent = "Paula Musuva is the champion";

// Append it to the body
document.body.append(newHeader);
