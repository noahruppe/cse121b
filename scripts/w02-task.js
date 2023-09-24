/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Noah Ruppe";
const currentdate = new Date();
const currentyear = currentdate.getFullYear();
let profilePicture = 'images/mypic.jpg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName('picture')
const altText = `profile image of ${fullName}`;





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent=currentyear;
imageElement.setAttribute = ('src', imageElement);
imageElement.setAttribute= ('alt',profilePicture );




/* Step 5 - Array */
let favoriteFoods = ["Steak", "Pizza", "Burgers", "lechone", "Ice cream"]
foodElement.innerHTML = favoriteFoods.join("/")
let singleFavoriteFood = "Adobo";
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join("/")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join("/")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join("/")}`;







