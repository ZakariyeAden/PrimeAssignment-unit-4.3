console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Question 1: Create a global variable named `basket` and set it to an empty array.
let basket = [];


// Question 2: Create a function called `addItem`. It should:
function addItem(item){
// Shouldn't the it be example: if(item === '') instead ? Although it works!
 if(item){
    basket.push(item);
    return true;
 }
}

// Question 3:Create a function called `listItems`. It should:
function listItems(){
   for(let cartItem of basket){
       console.log(`List the items: ${cartItem}`)
   } 
}

// Question 4: Create a function called `empty`. It should:
function empty(){
    basket = [];
    console.log(`Reset Basket: ${basket}`);
}
// Console log the Answers:
console.log(addItem(1,2,3,4));
console.log(empty());





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
