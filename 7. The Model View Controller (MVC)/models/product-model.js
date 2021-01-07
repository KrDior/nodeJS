const fs = require('fs');
const path = require('path');
const pathUtil = require('../util/path');

const getProductFromFile = cb => {
  const savePath = path.join(
    pathUtil,
    'data',
    'products.json'
  );

  fs.readFile(savePath, (err, fileContent) => {
    if (err) {
      return cb([], savePath);
    }

    cb(JSON.parse(fileContent), savePath);
  });
}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductFromFile((products, savePath) => {
      products.push(this);
      fs.writeFile(savePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
}
