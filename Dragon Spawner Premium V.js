function render() {
    const listView = document.getElementById('dragonList');
    listView.innerHTML = '';
    dragonList.forEach(dragon => {
      let listItem = document.createElement('li');
      listItem.textContent = `${dragon.name} (${dragon.type})`;
      listView.appendChild(listItem);
    });
  }
  
  render(); // Initial rendering
  