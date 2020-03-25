const nums = [1, 2, 3, 4, 5, 6, 7];


let rotate = function(nums,k) {
let result = [];

nums.forEach((num, index) => {
    let newIndex = index + k;
    if(newIndex > nums.length - 1) {
        newIndex = newIndex - (nums.length - 1) - 1;
    }
    result[newIndex] = num;
})
return result;
}

console.log(rotate(3));

