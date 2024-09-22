// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];



let mainEl = document.querySelector('main')
// console.log(mainEl)

mainEl.style.backgroundColor = 'var(--main-bg'
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
mainEl.classList.add('flex-ctr')

let topMenuEl = document.getElementById(`top-menu`)

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

//   Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link)=> {
    // console.log(link)
    let newLink = document.createElement('a');

//   Create an <a> element.
//   On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute('href', link.href);
    // console.log(href)
//   Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text;
//   Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink)
});







//Part Two Below


//Part 3: Creating the Submenu:
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';




//Part 4: Adding Menu Interaction
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll('a')

// Attach a delegated 'click' event listener to topMenuEl.
// topMenuEl.addEventListener('click', checkA);
topMenuEl.addEventListener('click', checkA);

// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code of the function should immediately return if the element clicked was not an <a> element.
// Log the content of the <a> to verify the handler is working.

// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!

function checkA(event){
    event.preventDefault();
    const isA = event.target;
    if (isA.tagName == 'A') {
      console.log(event.target.textContent); 
    } if (isA == 'A')
      topMenuLinks.forEach((button) => {
        button.classList.remove('active');        
      });
      else{
      isA.classList.toggle('active');
    }
    }
  

// Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.


let subLinks;


