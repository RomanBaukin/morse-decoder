const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = expr.match(/.{1,10}/g);
    const resultArr = [];

    arr.forEach((item) => {
        const tempArr = item.match(/.{1,2}/g);
        const tempArr2 = [];
        let flag = false;

        tempArr.forEach((elem) => {
            if (elem === '**' && !flag) {
                resultArr.push(' ');
                flag = true;
            } else if (elem === '10') {
                tempArr2.push('.');
            } else if (elem === '11') {
                tempArr2.push('-');
            } else {
                return;
            }
        });

        resultArr.push(MORSE_TABLE[tempArr2.join('')]);
    })

    return resultArr.join('');
}

module.exports = {
    decode
}