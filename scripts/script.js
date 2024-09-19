// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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