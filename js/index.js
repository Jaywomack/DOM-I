const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//NavLink Array
let aLinksArr = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
//Foreach that inserts text into every NavLink
let navLinkALinks = document.querySelectorAll('a');
navLinkALinks.forEach(function (element, index) {
  element.textContent = aLinksArr[index];
});

//Insert Dom is awesome and style
let mainh1 = document.querySelector('h1');
mainh1.textContent = 'Dom Is Awesome';
mainh1.style.flexDirection = 'column';
mainh1.style.display = 'flex';
mainh1.style.flexWrap = 'wrap';
mainh1.style.alignContent = 'center';
mainh1.style.height = '241px';
mainh1.style.width = '216px';
mainh1.style.textAlign = 'center'

//Insert circular code snippet image and style
let codeSnippetImg = document.getElementById('cta-img');
codeSnippetImg.src = 'img/header-img.png';
codeSnippetImg.style.width = '379px';
codeSnippetImg.style.height = '379px';

//Insert button text and style button
let getStartedBtn = document.querySelector('button');
getStartedBtn.textContent = 'Get Started'

//Add h4 titles with array and foreach

let h4Array = ['Features', 'About', 'Services', 'Product', 'Vision', 'Contact'];
let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(function (element, index) {
  element.textContent = h4Array[index];
});

//Insert image of code snippet that spans screen
let imgThatSpans = document.getElementById('middle-img');
imgThatSpans.src = 'img/mid-page-accent.jpg';

//Insert paragraph text for all the paragraphs except the contact
let allParagraphsWithoutContact = document.querySelectorAll('.main-content p');
allParagraphsWithoutContact.forEach(function (element) {
  element.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
});



// Inser Contact
let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

// Insert Footer
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];


// New Elements
let newItems = document.querySelector(".container header nav")
let newItem = document.createElement("a");
newItem.innerText = "Guitar Lessons";
newItem.style.color = "green";
newItem.href = "#";
newItems.prepend(newItem);

let newItem1 = document.createElement("a");
newItem1.innerText = "Music Videos";
newItem1.style.color = "green";
newItem1.href = "#";
newItems.appendChild(newItem1);