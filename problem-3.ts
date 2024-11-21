function countWordOccurrences (sentence: string, word: string): number {
    const words = sentence.toLocaleLowerCase().split(' ');
    let count = 0;
    for(const w of words){
        if(w === word.toLocaleLowerCase()){
            count++;
        }
    }
    return count;
}