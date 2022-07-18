// Write your solution here!
 const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
   };
// //    destructivelyAppendCat();
// //    console.log(cats);
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
// destructivelyPrependCat();
// console.log(cats);
function destructivelyRemoveLastCat() {
    cats.pop();
}
// destructivelyRemoveLastCat();
// console.log(cats);
function destructivelyRemoveFirstCat() {
    cats.shift();
}
// destructivelyRemoveFirstCat();
// console.log(cats);

function appendCat(name) {
 const newCatsArr = [...cats, 'Broom'];
//  console.log(newCatsArr);
// console.log(cats);
return newCatsArr;
}
// appendCat();
function prependCat(name) {
    const newCatsArr2 = ['Arnold', ...cats];
    // console.log(newCatsArr2);
    // console.log(cats);
    return newCatsArr2;
}
// prependCat();

function removeLastCat() {
    const newCatsArr3 = cats.slice(0, cats.length -1);
    // console.log(newCatsArr3);
    // console.log(cats);
  return newCatsArr3
}
// removeLastCat();
function removeFirstCat() {
    const newCatsArr4 = cats.slice(1, cats.length);
    // console.log(newCatsArr4);
    // console.log(cats);
    return newCatsArr4;
}
//  removeFirstCat();

