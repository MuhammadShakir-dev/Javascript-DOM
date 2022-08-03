// HTML

/*
Egg and Chicken

    
<h4>Which Came First?</h4>
<img src="https://devsprouthosting.com/images/egg.jpg" width="200px">
<!-- image source: unsplash.com -->

<a href = "#" target = "_blank">Hello</a>
<a href = "#" target = "_blank">Hello</a>
<a href = "#" target = "_blank">Hello</a>
<a href = "#" target = "_blank">Hello</a>
<a href = "#" target = "_blank">Hello</a>
*/

// JS
const newLink = document.querySelector('img');
newLink.setAttribute('src','https://devsprouthosting.com/images/chicken.jpg');
newLink.setAttribute('alt',"chicken");


const heading = document.querySelector('h4') ;
heading.style.fontSize = '50px';
heading.style.textAlign = 'center';


const allLinks = document.querySelectorAll('a');
for(let link of allLinks){
  link.style.color = 'black';
  link.style.textDecoration = 'none';
  link.style.border = '2px solid blue';
  link.style.width = '100px';
  link.style.padding = '10px';
  link.style.textAlign = 'center';
}
