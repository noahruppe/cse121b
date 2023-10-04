/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Noah",
    Photo: "images/mypic.jpg",
    favoriteFoods: ["Steak","Pizza","Ice Cream","Hamburgers","Cherry Pie"],
    hobbies: ["Basketball","Eating food","Watching movies","Playing video games"],
    placesLived: ["North Carolina","Philippines"]
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Statesville, NC", 
        length1: "22 Years",
    },
    {
        place: "Naga, PH",
        length1: "2 Years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.Photo
document.querySelector("#photo").alt = myProfile.name

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});


/* Places Lived DataList */

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length1;

    document.querySelector("#places-lived").appendChild(dd);
});

/*had a hard time with this last part because I could't figure out how to append it to the dl tag but all I had to do was use appendchild*/







