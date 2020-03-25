const nums1 = [-2147483648, 1, 2, 3];

const nums2 = [1, -2147483648, -2147483648];

const intersect = (nums1, nums2) => {


     let shortestArray = [];
     let longestArray = [];

     const result1 = [];
   

     let lengthshortestArray = 0;
     //let longestArrayIndexStart = 0;


     nums1.length < nums2.length ? lengthshortestArray = nums1.length : lengthshortestArray = nums2.length

     if (lengthshortestArray == nums2.length) {
         longestArray = [...nums1];
         shortestArray = [...nums2];
     } else {
         longestArray = [...nums2];
         shortestArray = [...nums1];
     }

     for (let i = 0; i < lengthshortestArray; i++) {
         let num = shortestArray[i];
        
         if(longestArray.includes(num)) {
             result1.push(num);
             longestArray.splice(longestArray.indexOf(num),1);
             //console.log(longestArray);
         }
    }

    return result1;
}
console.log(intersect(nums1, nums2));