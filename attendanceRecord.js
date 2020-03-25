
const s = "PPALLL";


const checkRecord = (s) => {

    let countA = 0;

    let result = true;

    if(s[0] === 'A') {
        countA++;
    }



    for(let i = 1; i < s.length; i++) {

        if(s[i] === 'A') {
            countA++;
        }

           if (countA === 2) {
               result = false;
               break;
           }

           if(s[i-1] === s[i] && s[i] === 'L') {
               if(s[i+1] === s[i] && (i+1) < s.length) {
                   result = false;
                   break;
               }
           }   
    }

    if(countA >= 2) {
        result = false;
    }

    return result;

}

console.log(checkRecord(s));