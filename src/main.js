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

// main
loadItems()
  .then(items => {
    displayItems(items);
//  setEventListeners(items);
  })
  .catch(console.log);