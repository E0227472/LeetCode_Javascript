 
const input = [5, 4, 6, 2];

// passed sample test case. need to use recursion.
 const permute = (nums) => {
    // nums.length! == total number of permutations
    // 1. loop through array
    // 2. add element in different positions. if the subarrays are empty, add (nums.length! / nums.length) elements at the same position for the arrays
    // 3. add subsequent elements in i++ manner. if occupied, i++ until i == nums.length, then i-- until empty slot (undefined).

    let permutations = 1;
    // find the total number of combinations 
    for(let i = 1; i <= nums.length; i++) {
        permutations *= i;
    }

     // find the total number of occurance of each element in each position
     let occurance = permutations / nums.length;

     const result  = [];

     // create new empty arrays
     for(let i = 0; i < permutations; i++) {
        result.push([]);
     }
     let index = 0;
     // Loop through each element
    for(let i = 0; i < nums.length; i++) {
        let countEachPosition = 0;
        // add each element to the different positions 
        for(let j =0; j < permutations; j++) {

           if(result[j].length === 0) {
               if (countEachPosition === occurance) {
                   countEachPosition = 0;
                   index++;
               }
               result[j][index] = nums[i];
               countEachPosition++;
               
            
           } else {
               if(index === nums.length) {
                   index = 0;
               }
            while(result[j][index] !== undefined) {
                index++;
                if (index === nums.length) {
                    index = 0;
                }
            }
            result[j][index] = nums[i];
            index++;

           }
        }

    }

    return result;
 }

 console.log(permute(input));