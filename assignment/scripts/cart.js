console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Question 1: Create a global variable named `basket` and set it to an empty array.
let basket = [];


// Question 2: Create a function called `addItem`. It should:
function addItem(item){
// Shouldn't the it be example: if(item === '') instead ? Although it works!
 if(item){
    //  Push to empty Array and return true
    basket.push(item);
    return true;
 } else {
     return false;
 }
}

// Question 3:Create a function called `listItems`. It should:
function listItems(){
   for(let cartItem of basket){
    // List all the items from basket
       console.log(`List the items: ${cartItem}`)
   } 
}

// Question 4: Create a function called `empty`. It should:
function empty(){
    // Empty the Array 
    basket = [];
    console.log(`Reset Basket: ${basket}`);
}
// Console log the Answers:
console.log(addItem(1,2,3,4));
console.log(empty());



// ********************
//    Stretch Goals
// ********************

// Question 1: Added a global const named `maxItems` and set it to 5
const maxItems = 5;

// Question 2:
function isFull(){
    // If Basket less than maxItems return false
    if(basket < maxItems){
        return false;   
    } else if(basket >= maxItems || basket){
        // if basket more than or equal to maxItems OR basket full return true
        return true;
    } 
}
// basket = ['Cat','Dog','Shark','Fish','Test'];

// Question 4:

// console.log(`Test ${basket}`);
function removeItem(item){
   console.log(basket.indexOf(item));
    // Only looking  first index and above   
   if(basket.indexOf(item) >= 0){
    // Remove the first item   
    let removeFirstItem = basket.indexOf(item);
       basket.splice(removeFirstItem, 1);
       return item;
   }else {
    // Return undefined if not found   
       return null;
   }
}
console.log(`Test ${basket}`);

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
