
const arr = [3, 2, 1, 0, 4];

const canJump = (arr) => {
   // const arr = [2,3,1,1,4];

    let canReach = false;

    let i = 0;

    let lastIndex = arr.length - 1;

    while(i < arr.length - 1) {
        i += arr[i];

        if(arr[i] === 0) {
            break;
        }
    }

    if(i === arr.length - 1) {
        canReach = true;
    }

    return canReach;
}

console.log(canJump(arr));