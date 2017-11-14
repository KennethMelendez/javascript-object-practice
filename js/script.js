var computer = {
  brand: ['Apple','Asus','HP', 'Microsoft'],
  name: 'programming computer',
  harddrivespace: [256, 512, 1000],
  ram: 8,
  dedicatedgraphics: false,
  priceRange: function(price){
    if (price < 2000) {
      console.log('GOOD PRICE!!!!!');
    } else if (price > 2000) {
      console.log('DAMN THATS EXPENSIVE');
    } else {
      console.log('PERFECTION YO');
    }
  }
}
