// Initialize an empty array to store GIF filenames
var gifFilenames = [];

// Loop through numbers from 1 to 103
for (var i = 1; i <= 103; i++) {
  // Create a filename for each number, ensuring it has two digits
  var filename = "plant" + (i < 10 ? "0" : "") + i + ".gif";

  // Push the filename into the array 12 times
  for (var j = 0; j < 12; j++) {
    gifFilenames.push(filename);
  }
}

// Function to randomly place GIFs on the web page
function placeRandomGIFs() {
  // Get the container element by its ID
  var container = document.getElementById("gif-container");

  // Loop through the array of GIF filenames
  for (var i = 0; i < gifFilenames.length; i++) {
    // Create an image element
    var gif = document.createElement("img");

    // Set the source of the image to a GIF file
    gif.src = "gifs/" + gifFilenames[i];

    // Generate random coordinates for the GIF's position
    var left = Math.random() * (4000 - 200);
    var top = Math.random() * (4000 - 200);

    // Set the position of the GIF to absolute and its left and top positions
    gif.style.position = "absolute";
    gif.style.left = left + "px";
    gif.style.top = top + "px";

    // Append the GIF to the container
    container.appendChild(gif);
  }
}

// Add an event listener to execute placeRandomGIFs function when the window loads
window.addEventListener("load", placeRandomGIFs);
