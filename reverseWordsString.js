
let sentence = " hello world!  ";

const reverseWord = (sentence) => {
    
    const words = sentence.split(' ');
    const reverseSentence = [];
    words.forEach((word) => {
        if(word !== " ") {
        reverseSentence.push(word);
        }
    });

    let reversedSentence = '';

    //console.log(`the reverse array is: ${reverseSentence}`);
       
        for(let i = reverseSentence.length -1; i >= 0; i--) {
          
        if(reversedSentence === '') {
            reversedSentence = reverseSentence[i];
        } else {
            reversedSentence += ' ' + reverseSentence[i];
            //console.log(reversedSentence);
        }
    }
    return reversedSentence.trim();
};

console.log(reverseWord(sentence));

//reverseWord(sentence);