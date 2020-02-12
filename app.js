let fruits = [
  { name: "banana", count: 10 },
  { name: "apple", count: 20 },
  { name: "orange", count: 5 },
  { name: "pear", count: 1 },
  { name: "pineapple", count: 6 }
];

function output(arr, paramName) {
  return arr.map(function(element) {
    return element[paramName];
  });
}

console.log(output(fruits, "name"));

let book = [
  { name: "Anna", books: ["Harry Potter", "War and Peace"] },
  { name: "Dasha", books: ["The Witcher", "Alice in Wonderland"] },
  { name: "Ivan", books: ["The Idiot", "Love"] },
  { name: "Anastasia", books: ["The Odyssey", "The Prince"] },
  { name: "Pasha", books: ["The Republic", "Paradise lost"] }
];

function selection(arr) {
  return arr.reduce(function(previousValue, currentItem) {
    return previousValue.concat(currentItem.books);
  }, []);
}

console.log(selection(book));
