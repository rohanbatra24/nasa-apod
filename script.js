const resultsNav = document.getElementById("resultsNav");
const favoritesNav = document.getElementById("favoritesNav");
const imagesContainer = document.querySelector(".images-container");
const saveConfirmed = document.querySelector("save-confirmed");
const loader = document.querySelector(".loader");

// NASA API
const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// update DOM
const updateDOM = (params) => {
  resultsArray.forEach((img) => {
    // card container
    const card = document.createElement("div");
    card.classList.add("card");

    // link
    const link = document.createElement("a");
    link.href = img.hdurl;
    link.title = "View full image";
    link.target = "_blank";
    // image
    const image = document.createElement("img");
    image.src = img.hdurl;
    image.loading = "lazy";
    image.classList.add("card-img-top");
    // card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //card title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = img.title;
    //save text
    const saveText = document.createElement("p");
    saveText.classList.add("clickable");
    saveText.textContent = "Add to favourites";
    // card text
    const cardText = document.createElement("p");
    cardText.textContent = img.explanation;
    // footer
    const footer = document.createElement("small");
    footer.classList.add("text-muted");
    // date
    const date = document.createElement("span");
    date.textContent = img.date;
    // copyright
    const copyright = document.createElement("span");
    copyright.textContent = ` ${img.copyright}`;

    // append
    footer.append(date, copyright);
    cardBody.append(cardTitle, saveText, cardText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    imagesContainer.appendChild(card);
  });
};

// Get 10 images from NASA API
const getNASAPictures = async (params) => {
  try {
    const response = await fetch(apiUrl);
    responseArray = await response.json();
    resultsArray = responseArray;
    console.log(`resultsArray`, resultsArray);
    updateDOM();
  } catch (error) {
    console.log(`error`, error);
  }
};

// on load
getNASAPictures();
