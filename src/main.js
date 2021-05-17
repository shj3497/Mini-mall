// Fetch the items from the JSON file
function loadItems(){
  return fetch('./data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items){
  const container = document.querySelector('.dress_lists');
  container.innerHTML = items.map(item => createHTMLString(item)).join('')
}

// Create HTML list item from the given data item
function createHTMLString(item){
  return `
    <li class="dress_list">
      <img src="${item.image}" alt="${item.type}" class="dress__thumbnail" />
      <span class="dress__description">${item.gender}, ${item.size}</span>
    </li>`;
}

function setEventListeners(items){
  const home = document.querySelector('.home');
  const buttons = document.querySelector('.buttons');
  
  home.addEventListener('click', () => {
    displayItems(items);
  });
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

function onButtonClick(event, items){
  // console.log(event.target.dataset.key);
  // console.log(event.target.dataset.value);
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null){
    return;
  }
  
  displayItems(items.filter(item => item[key] === value))
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);