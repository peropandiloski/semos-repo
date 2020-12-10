let words = ['Македонија','анаволимилована','дај ми една чаша полна со вино','радар','кајак', 'калабалак','нели не си ти сенилен','јадење и пиење дај','слушател','фудбал','музика'];

function palindromeCheck(words) {
    let palindromes = [];

    for (let i = 0; i < words.length; i++) {
        let p = words[i].split("").reverse().join("");
        // let mergeEmptySpaces = words[i].replaceALL(" ", "")
        if (p.replaceAll(" ", "") === words[i].replaceAll(" ", "")) {
            palindromes.push(words[i]);
        }
    }
    console.log(palindromes);
}
palindromeCheck(words);