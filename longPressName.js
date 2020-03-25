
const name = 'pyplrz';
const typed = 'ppyypllr';

// const isLongPressedName = (name, typed) => {

//    // count the number of characters in each string, does not matter the order 

//    // remove all duplicates and check if they are exactly identical

//    // return true if 1 and 2 is correct 


//    // remove duplicate characters from from original name  
//    let outPutName = Array.from(new Set(name)).join("");

//    let outPutTyped = Array.from(new Set(typed)).join("");

//    console.log(outPutName);
//    console.log(outPutTyped);
//    let result = true;

//    if (outPutName === outPutTyped) {


//    let countsName = {};
//    let countsTyped = {};
//    let ch = '';

//    let count = 0;

//    // count the number of characters in the name
//    for(let i = 0; i < name.length; i++) {
//     ch = name[i];

//     count = countsName[ch];

//     countsName[ch] = count ? count+1 : 1;
//    }

//    // count the number of characters in the name
//    for (let i = 0; i < typed.length; i++) {
//        ch = typed[i];

//        count = countsTyped[ch];

//        countsTyped[ch] = count ? count+1 : 1;
//    }

// //    console.log(countsTyped);
// //    console.log(countsName);

// // loop through name object and check if the characters count in typed is equal or greater than name
// for (let [key, value] of Object.entries(countsName)) {
//     if(countsTyped[key] < value) {
//        // console.log(key);
//         result = false;
//         break;
//     }
// }

// } else {
//     //console.log("false here");
//     result = false;
// }

//  return result;
// }

const isLongPressedName = (name, typed) => {

    let indexName = -1;
    let indexTyped = 0;
    let result = true;

    while(indexName < name.length && indexTyped < typed.length) {
    
        if(name[indexName] === typed[indexTyped]) {
            indexName++;
            indexTyped++;
        } else if (indexName > 0 && name[indexName-1] === typed[indexTyped]) {
            indexTyped++;
        } else {
            result = false;
            break;
        }
    }

    return result;
}

console.log(isLongPressedName(name, typed));