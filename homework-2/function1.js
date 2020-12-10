let string = 'I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that, so I am working toward it right now';

function countWord (text){
    // convert string to array 
    let wordsOfSentence = text.split(" "); 
    
    // loop the array (ja broi nizata se pominuva sekoj element)
    for(let i = 0; i < wordsOfSentence.length; i++){
      // go zema zborot od celata recenica i na sekoe mesto kaj sto ima . zamenuva so prazno mesto. .lenght ja dava celata dolzina od zborot 
      let word = wordsOfSentence[i].replace('.','').length;
      if(word % 2 == 0){
        console.log(wordsOfSentence[i]);
        let duplicates = 0;
        for(let c = 0; c < wordsOfSentence.length; c++){
            if(wordsOfSentence[i] == wordsOfSentence[c]){
                duplicates++;
            }
        }
        console.log(wordsOfSentence[i] + ' Se povtoruva ' + duplicates + ' pat(i)');
      }

    }
}

countWord(string);
