let word = prompt("Введите слово");
let old_word = word;
word = word.toLowerCase();
let sum = 0;
if (word.length % 2 === 0){
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] === word[word.length - 1 - i]){
            sum++;
        }
        else break;
    }
    if (sum === word.length / 2){
        alert(`${old_word} палиндром`);
    }
    else {
        alert(`${old_word} не палиндром`);
    }
}
else {
    for (let i = 0; i < (word.length - 1) / 2; i++){
        if (word[i] === word[word.length - 1 - i]){
            sum++;
        }
        else break;
    }
    if (sum === (word.length - 1) / 2){
        alert(`${old_word} палиндром`);
    }
    else {
        alert(`${old_word} не палиндром`);
    }
}

