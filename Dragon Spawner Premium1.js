// Model
let dragonList = [];

function addDragon(dragon) {
  dragonList.push(dragon);
  controller.updateView();
}

// View
function render() {
  const listView = document.getElementById('dragonList');
  listView.innerHTML = '';
  dragonList.forEach(dragon => {
    let listItem = document.createElement('li');
    listItem.textContent = `${dragon.name} (${dragon.type})`;
    listView.appendChild(listItem);
  });
}

// Controller
const controller = {
  addNewDragon: function(name, type) {
    addDragon({ id: dragonList.length + 1, name: name, type: type });
  },
  updateView: function() {
    render();
  }
};

// Example Usage
document.getElementById('addDragonForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const dragonName = event.target.elements.dragonName.value;
  const dragonType = event.target.elements.dragonType.value;
  controller.addNewDragon(dragonName, dragonType);
});
