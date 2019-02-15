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

    Object.keys(anagramsGroup).filter(key => anagramsGroup[key].length > 1 ).forEach(key => { 
        matrixOfAnagrams.push(anagramsGroup[key].sort());
    });

    matrixOfAnagrams.sort();
    
    return matrixOfAnagrams;
}