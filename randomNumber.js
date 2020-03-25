
const randomNumberGenerator = (n) => {
    // This question was asked by Google.

    // Given an integer n and a list of integers l, write a
    // function that randomly generates a number from 0 to n - 1 that isn 't in l (uniform).

    // 1. generate random number between 0 to n-1. 
    // 2. check if the number is in list    
    // 3. if number in list, repeat step 1 to 2.
    // 4. if number not in list, return number. 
    let randomNumber = getRandomInt(n);

    const listNumbers = [1,5,7,8];

    while(listNumbers.includes(randomNumber)) {
        randomNumber = getRandomInt(n);
    }

    return randomNumber;

};

const getRandomInt = (n) => {
    return Math.floor(Math.random() * Math.floor(n));
}

console.log(randomNumberGenerator(10));