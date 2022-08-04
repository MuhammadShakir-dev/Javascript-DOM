// removeChild() is old method 
// remove is a new method


// i want to remove an image from a html page.

const img = document.querySelector('img');
img.remove();


//and boonmmm the image is removed.


//using removeChild();

const img = document.querySelector('img');
img.parentElement.removeChild(img);


