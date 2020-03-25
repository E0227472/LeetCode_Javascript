
let nums = [1,1,2];

let removeDuplicates = function () {
    let m = 0;

    for(let i = 1; i< nums.length; i++ ){
        if(nums[i] != nums[m]) {
            m++;
            nums[m]= nums[i];
        }
    }
    let lenght = m+1;
    console.log(lenght);
};

removeDuplicates();