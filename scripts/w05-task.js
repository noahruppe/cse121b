/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];



/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });

};





/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok){
        templeList = await response.json();

        displayTemples(templeList);
    
    }else{
        console.error("Failed to fetch temple data.");

        }
    };

    getTemples();





/* reset Function */

const reset = () =>{
    const articles = templesElement.querySelectorAll("article");

    articles.forEach(article => {
        templesElement.removeChild(article);

    });
};


/* sortBy Function */

const sortBy = (temples) =>{
    reset();
    const filter = document.querySelector("#sortBy").value;

    switch (filter){

        case "utah":
            const utah = temples.filter((temple) => temple.location.toLowerCase().includes("utah"));
            displayTemples(utah);
            break

        case "nonutah":
            const nonUtah = temples.filter((temple) => !temple.location.toLowerCase().includes("utah"));
            displayTemples(nonUtah);
            break

        case "older":
            const older = temples.filter((temple) => {
                const dedicatedDate = new Date(temple.dedicated);
                return dedicatedDate < new Date(1950, 0, 1);
            });
            displayTemples(older);
            break;
        
        case "all":
            displayTemples(temples);
            break

        
    };
} ;


/* Event Listener */

document.querySelector("#sortBy").addEventListener("change",() => {sortBy(templeList)   });


getTemples();