module.exports = function toReadable (number) {
    const arr = number.toString().split('').reverse();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {return 'zero'}
            switch (arr[i]) {
                case '1':
                    result.unshift('one');
                    break;
                case '2':
                    result.unshift('two');
                    break;
                case '3':
                    result.unshift('three');
                    break;
                case '4':
                    result.unshift('four');
                    break;
                case '5':
                    result.unshift('five');
                    break;
                case '6':
                    result.unshift('six');
                    break;
                case '7':
                    result.unshift('seven');
                    break;
                case '8':
                    result.unshift('eight');
                    break;
                case '9':
                    result.unshift('nine');
                    break;
            }
        }
}
