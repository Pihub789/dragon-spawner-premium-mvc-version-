let dragonList = [
    { id: 1, name: "Fire Dragon", type: "Fire" },
    { id: 2, name: "Ice Dragon", type: "Ice" }
  ];
  
  function addDragon(dragon) {
    dragonList.push(dragon);
    render();
  }
  
  function removeDragon(id) {
    dragonList = dragonList.filter(dragon => dragon.id !== id);
    render();
  }
  