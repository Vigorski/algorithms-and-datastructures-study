class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    const index = this._hash(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, val]);
  }

  get(key) {
    const index = this._hash(key);
    if(!this.keyMap[index]) return false;
    for (const item of this.keyMap[index]) {
      if(item[0] === key) return item[1];
    }
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if(!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if(!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

}

const HT = new HashTable();
HT.set('darkblue', '#00008b');
HT.set('salmon', '#fa8072');
HT.set('violet', '#fa8072');
HT.set('yellow', '#ffff00');
HT.set('black', '#000');
HT.set('white', '#fff');
HT.set('turquoise', '#40e0d0');

// console.log(HT.keyMap)
HT.keys();
console.log(HT.keys());
console.log(HT.values());