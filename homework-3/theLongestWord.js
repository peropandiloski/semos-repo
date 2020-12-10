let sentence = 'Напишете фунција која што треба да прима array of strings како single argument и вратете (returns) го најдолгиот стринг (string) во низата. Фунцијата треба да го врати првиот најден од најдолгите стрингови';

function longestWord (text) {
    let niza = text.split(" ");
    let longestWord = niza[0];

    for(let i = 0; i < niza.length; i++){
        if(longestWord.length < niza[i].length){
            longestWord = niza[i];
        } 
    }
    console.log(`Najgolem e zborot  ${longestWord}`);
}
longestWord(sentence);

