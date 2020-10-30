// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const header = document.querySelector('.header-container');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  let headerDate = document.createElement('span');
  headerDate.classList.add('date');
  let headerH1 = document.createElement('h1');
  let headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');


  headerDate.textContent = 'March 28, 2020';
  headerH1.textContent = 'Lambda Times';
  headerTemp.textContent = '98°';


  header.appendChild(headerDiv);
  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerTemp);
  headerDiv.appendChild(headerH1);

  return header;
}

Header();