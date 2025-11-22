document.getElementById('addDragonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dragonName = event.target.elements.dragonName.value;
    const dragonType = event.target.elements.dragonType.value;
    addDragon({ id: dragonList.length + 1, name: dragonName, type: dragonType });
  });
  
  document.getElementById('removeDragonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dragonId = parseInt(event.target.elements.dragonId.value, 10);
    removeDragon(dragonId);
  });
  