// traversing parent / child / siblings in javascript .

// lets have a look on traversing parent element in javascript .

//HTML
/*

<p>
<b>Hello</b> 
this is Muhammad Shakir dev<p/>

*/
                                                        PARENT TRAVERSING IN JAVASCRIPT
==============================================================================================================================================
//if i want to know the parent of the bold tag then.

const parent = document.querySelector('b');
parent.parentElement;

//and this give me the parent element of b tag that is paragraph.
//NOTE 
//  every element has one direct parent .
//   it can have more then one parent etc grand praent grand grand parent but directky it can have only one parent .


                                                        CHILDREN TRAVERSING IN JAVASCRIPT
===============================================================================================================================================
//NOTE 
//  every element has one direct parent .
//   it can have more then one parent etc grand praent grand grand parent but directky it can have only one parent .

//Note
// any element can have mutiple childrens  
// if i want to access the the childern in javascript .

const chil = document.querySelector('p');
chil.children[0];
chil.children[1];


                                            SIBLINGS (NEXT SIBLINGS AND PREVIOUS SIBLINGS) TRAVERSING  
================================================================================================================================================

// and this allow us to navigate from one element to adjacent other siblings.
// nextSibling and previousSiling give us text node nothing else.
// the main porperty here is : nextElementSibling and previousElementSibling.

const allimg = document.querySelector('img');
allimg.nextElementSibling;
allimg.previousElementSibling;




