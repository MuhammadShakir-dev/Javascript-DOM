// leta talk about creating new element in html and place them by using javascript.

//js

const h2 = document.createElement('h2');
h2.innerText = 'Developer,Designer,Content Creator & Community Builder';
document.body.appendChild('h2');
doucment.body.append('h2');

h2.insertadjacentElement('beforebegin',h1);
h2.insertadjacentElement('afterbegin',h1);
h2.insertadjacentElement('beforeend',h1);
h2.insertadjacentElement('afterend',h1);



