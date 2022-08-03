// this property helps us to create new element removing elements.
// how to create element in DOM?? here is the syntax of creating an element in DOM.
// Document.createElement();

// appendChild appears your created elemnt in the bottom of your body .
// example.

 const newh3 = document.createElemrnt('h3');
 newh3.innerText = 'Hello Im am new here';
 document.body.appendChild(newh3);


// append on the other hand is the new method and its not avalible in enternet explorer.
//  append can take string or it can take more then one element at a time.

p.append("Hello im a new line in this paragraph","so what we can doooooooooooo?????????");


// append works for the palcemnet of last child now to put thing on the first child we need.
// prepand

p.prepand("Hello im here in the top of this para.........");

// to insert some elemnet between two elements we need the method called.
// insertadjacentElement(psoition,element);

// the following postion are used:
// beforebegin.
// afterbegin.
// beforeend.
// afterend.



