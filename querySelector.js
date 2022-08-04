// query Selector is new method of selecting and htmk tag clas or an id .
// query Selector select the first matching element in an html.
// vs
// query Selector all select all matching element in an html.


HTML

/*
    <h1>Welcome Muhammad Shakir dev</h1>
    <img src="https://images.unsplash.com/photo-1659542216885-dcce5ca1de92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" class="square">
    <img src="https://images.unsplash.com/photo-1659586554861-4d3f759c3f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" class="square">
    <img src="https://images.unsplash.com/photo-1659444003277-6cb0a5ffc8bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" class="square">
    <img src="https://images.unsplash.com/photo-1659425191734-773850835dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" class="square">

    <p>
      <b id="bold">Lorem ipsum dolor sit amet consectetur,</b> adipisicing elit. Cumque facere
      iure optio atque! Omnis quam amet totam aliquam magnam, ad iusto. Facilis,
      tempora nam? Laborum ipsa quos ratione sint odit.
    </p>
    <button>Say Hi</button>

*/


JS

 cost img = document.querySelector('img');
 img.src = 'www.google.com';


// it will select the first image from the html and change its tag.
// in order to select all images.


cont allImg = document.querySelectorAll('img');
img.src = 'www.muhammadshakirdev.com/png';

// it will change all the images.

