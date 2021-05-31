// NASA API
const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA API
const getNASAPictures = async (params) => {
  try {
    const response = await fetch(apiUrl);
    responseArray = await response.json();
    console.log(`images`, responseArray);
  } catch (error) {
    console.log(`error`, error);
  }
};

// on load
getNASAPictures();
