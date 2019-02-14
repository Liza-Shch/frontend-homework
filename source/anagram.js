'use strict';
/**
 * Возвращает отсортированный массив массивов отсортированных анарграмм
 * @param {array} words Массив слов
 * @return {array} Отсортированный массив массивов анаграмм
 */

const anagram = words => {
    if (!Array.isArray(words)) {
        console.log('Аргумент функции не является массивом!');
        return null;
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
    for (var key in anagramsGroup) {
        if (anagramsGroup[key].length < 2) {
            continue;
        } 
        anagramsGroup[key].sort();
        matrixOfAnagrams.push(anagramsGroup[key]);
    }

    matrixOfAnagrams.sort();
    
    return matrixOfAnagrams;
}