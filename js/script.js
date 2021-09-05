var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

/* var onlyS = [];

for (let item of stuff) {
  if (item.includes("s")) {
    onlyS.push(item);
  }
}
console.log(onlyS); */

var filteredOnlyS = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(filteredOnlyS);
