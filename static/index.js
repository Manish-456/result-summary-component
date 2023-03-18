const table = document.querySelector('.table');

async function getData() {
  return await fetch('./data.json').then(result => {
    return result.json()
  });
}

async function displayContent() {
  let items = await getData();
  return items.map(item => `
    <div class="table_content ${item.category.toLowerCase()}">
      <div class="table_left">
        <img src="${item.icon}" alt="" />
        <h4>${item.category}</h4>
      </div>
      <div class="table_right">
        <span class="score">${item.score}</span><span class="total">/100</span>
      </div>
    </div>
  `).join("");
}


async function init() {
  let tableContent = await displayContent();
  table.innerHTML = tableContent;
}

init();