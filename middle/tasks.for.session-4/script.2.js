let longText = 'Loremmm Ipsum is simply dummy text of the printing and typesetting industry.';
let shortText = 'Lorem Ipsum';

function cutString(string) {
    if (string.length >= 15) {
        string = string.substring(0, 15);
        return `${string}...`;
    }
    return string;
}

console.log(cutString(longText));
console.log(cutString(shortText));