class Board {
  constructor() {
    this.grid = document.querySelector('.grid');
    this.initEvents();
  }
  
  initEvents() {
    let spaces = document.querySelectorAll('.space');
    let that = this;
    for (let i = 0; i < spaces.length; i++) {
      console.log(spaces[i]);
      spaces[i].addEventListener('click', this.handleClick.bind(this));
    }
  }
  
  handleClick(e) {  
    let space = e.target;
    let row = space.parentElement;
    let rowNumber = row.getAttribute('data-row');
    let spaceNumber = space.getAttribute('data-space');
    
    let toggles = this.getToggles(rowNumber, spaceNumber);
    toggles.push(space);
    console.log(toggles);
    toggles.forEach(toggleSpace => {
      toggleSpace.innerHTML = (toggleSpace.innerHTML === '') ? 'x' : '';
    });
  }  
  
  getToggles(rowNumber, spaceNumber) {
    console.log(rowNumber);
    console.log(spaceNumber);    
    
    let toggles = [];
    let rowsToCheck = [rowNumber - 1, rowNumber + 1];    
    let spacesToCheck = [spaceNumber - 1, spaceNumber + 1];

    rowsToCheck.forEach(num => {
      if ((num >= 0) && (num <= 4)) {
        let row = this.grid.children.item(num);
        toggles.push(row.children.item(spaceNumber));
      }
    });
    lkdlkjsdf
    
    spacesToCheck.forEach(num => {
      if ((num >= 0) && (num <= 4)) {
        toggles.push(this.grid.children.item(rowNumber).children.item(num));
      }
    });    
    
    return toggles;
  }
}

let b = new Board();