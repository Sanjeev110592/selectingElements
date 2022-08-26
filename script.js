// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector('h1') ;

// Check the typeof heading and log it.
typeof(heading) ;
console.log(typeof(heading)) ;


// Change the color of heading to black.
heading.style.color = 'black' ;


// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll('hr') ;


// Set the border of the all the hr elements to "1px solid tomato"
allHrs.style.border = '10px solid tomato' ;


// Change the background of all the hr to "antiquewhite" using for of loop.
allHrs.style.backgroundColor = 'antiquewhite' ;

// Change the 'border-radius' of all the hr to "5px" using array.
allHrs.style.borderRadius = '5px' ;
// Change the alignment of the heading(h1) to center.
heading.style.textAlign = 'center' ;

// Change the font size of the heading to 3rem.
heading.style.fontSize = '3rem' ;

// Change the border of hr with class 'image' to `2px solid purple`.
let imgHr = document.querySelector('.image') ;
imgHr.style.border = '2px solid purple' ;

// Change the border of all the hr element from solid to dashed type
allHrs.style.border = 'dashed' ;

// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement('p') ;

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText = "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure." ;

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm = document.createElement('img') ;
imgElm.src = 'https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'


// Select the box 7 using class seven
let seven = document.querySelector('.seven') 
// Remove all the elements form box seven
seven.children.remove ;

// Append the imgElm to the box no 7
seven.append('imgElm') ;

// Change the width and height of the image to `100%`
imgElm.style.width = '100%' ;
imgElm.style.height = '100%' ;

// Select the box 5 using class five
let five = document.querySelector('.five') ;

// Create an input element
let input = document.createElement('input') ;

// Change the placeholder property of the input element to "Enter you email!"
input.setAttribute('placeholde','enter you email') ;

// Append the input element to the box 5 you selected above
five.append(input) ;

// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a1 = document.createElement('a') ;
let b2 = document.createElement('a') ;
a1.innerText = 'Altcampus' ;
a2.innerText = 'google' ;


// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a1.href = 'https://altcampus.school' ;
a2.href = 'https://google.com' ;


// Append both the elements to box 5 you selected above.
five.append(a1,a2) ;