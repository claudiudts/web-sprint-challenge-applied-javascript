// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const url = "https://lambda-times-api.herokuapp.com/articles";
axios
  .get(url)
  .then(({ data }) => {
    // console.log(data)
    Object.values(data.articles).forEach((topic) => cardMaker(topic));
  })
  .catch((err) => console.log(err));

  const cards = document.querySelector(".cards-container");
  
  function cardMaker(data) {
    data.forEach((article) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      var cardHeadline = document.createElement("div");
      cardHeadline.classList.add("headline");
      const author = document.createElement("div");
      author.classList.add("author");
      const imageHolder = document.createElement("div");
      imageHolder.classList.add("img-container");
      var img = document.createElement("img");
      var name = document.createElement("span");

      cardHeadline.textContent = article.headline;
      img.src = article.authorPhoto;
      name.textContent = article.authorName;

      cards.appendChild(cardDiv);
      cardDiv.appendChild(cardHeadline);
      cardDiv.appendChild(author);
      author.appendChild(imageHolder);
      imageHolder.appendChild(img);
      author.appendChild(name);

      return cards;
    })
    return;
  }