var sayHello = name => `Hello ${name}`;
var printHello = (name) => {
    console.log(`Hey ${name}`);
};
var getSiblings = n => ({previous: n -1, next: n + 1});


console.log(sayHello);
console.log(sayHello('fool'));
printHello('matherfucker');
console.log(getSiblings());