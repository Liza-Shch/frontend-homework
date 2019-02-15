'use strict';
/**
 * Возвращает отсортированный массив массивов отсортированных анарграмм
 * @param {array} words Массив слов
 * @return {array} Отсортированный массив массивов анаграмм
 */

const anagram = words => {
    if (!Array.isArray(words)) {
        console.log('Аргумент функции не является массивом!');
        return;
    }

    const anagramsGroup = {};
    words.forEach(word => {
        const sortedWord = word.toLowerCase().split('').sort().join('');
        if (!anagramsGroup[sortedWord]) {
            anagramsGroup[sortedWord] = []
        }
        anagramsGroup[sortedWord].push(word);
    });

    const matrixOfAnagrams = [];
    const keysOfAnagramsGroup = Object.keys(anagramsGroup);
    const anagrams = keysOfAnagramsGroup.filter(key => {
        return anagramsGroup[key].length > 1;
    });
    anagrams.forEach(key => {
        anagramsGroup[key].sort();
        matrixOfAnagrams.push(anagramsGroup[key]);
    });

    matrixOfAnagrams.sort();
    
    return matrixOfAnagrams;
}