// 1. Change the title of the page to `Hello AltCampus!`
let title = document.querySelector("title") ;
title.innerText = "Hello Altcampus" ;

// 2. Select the element using the children property:
let el = document.body.firstChild ;

//    - Select the `h1` element and change the value to `Learning DOM`
let h1 = document.querySelector("h1") ;
h1.innerText = "Learning DOM" ;

//  - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let li = document.querySelectorAll("li") ;
li[0].innerText = "all about document" ;

//    - Select the input element with name `email`
let input1 = document.getElementById("#email") ;


// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
console.log(li.lenght) ;

//OR//


// 4. Select the first input using the `type` selector and store them in variable named `emailInput`.
let emailInput = document.querySelector("ul").firstElementChild ;


// 5. Select the ul element using class selector and store in `topics`
let topics = document.getElementsByClassName(".topics") ;


// 6. Select the first label element and store in `label`
let level = document.querySelector('lebel') ;


// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let checkbox = document.querySelector("#inputCheckbox") ;


// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector("#passord")


// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassowrd = document.querySelector("password") ;


// 10. Select all the `li` element and store in `allTopics`
let allTopics = document.querySelectorAll("li") ;


// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll("input") ;


// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
allTopics.forEach(function(el){
    console.log(el.innerText) ;
})


// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = querySelectorAll(".list") ;


// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.querySelector("ul>li") ;


// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let img = document.querySelectorAll("img") ;


// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll("p") ;


// 17. Select all the buttons and log the count of buttons.
let buttons = document.querySelectorAll("buttons") ;
console.log(buttons.lenght) ;

// 18. Select all the `label` element and log the count.
let allLevels = document.querySelectorAll("lebel") ;


// 19. Select all the elements with `id` of `test`
let allIdElements = document.querySelectorAll(".id") ;


// 20. Select the first element with id `test` using `getElementById`
let firstIdElement = document.querySelector(".test") ;


// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
let topicsParent = document.querySelector("topics").parentElement ;


// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
let nestSiblingElement = document.querySelector("topics").nextElementSibling ;


// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
let previousElementSibling = document.querySelector("topics").previousElementSibling ;


// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
let firstElementChild = document.querySelector("topics").firstElementChild ;

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
let lastChildElement = document.querySelector("topics").lastElementChild ;
typeof(lastChildElement) ;


// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldsetElm = document.querySelector("fieldset") ;

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
fieldsetElm.parentElement ;