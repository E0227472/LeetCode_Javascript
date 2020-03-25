const nums = [4,1,2,1,2];

const singleNumber = (nums) => {
let countNums = new Map();
let result = 0;

    nums.forEach((key) => {  
        console.log(`key: ${key} and value ${countNums.get(key)} `)
        countNums.set(key, countNums.get(key) === undefined ? 1 : countNums.get(key) + 1);
    })

countNums.forEach((value, key) => {
    if(value === 1) {
        result = key;
    }
})


return result;
}

console.log(singleNumber(nums));