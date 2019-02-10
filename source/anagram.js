'use strict';

function anagram(words) {
    var anagramsGroup = {};

    for (var i = 0; i < words.length; i++) {
        var sortedWord = words[i].toLowerCase().split('').sort().join('');
        if (anagramsGroup[sortedWord] === undefined) {
            anagramsGroup[sortedWord] = []
        }
        anagramsGroup[sortedWord].push(words[i]);
    }

    var matrixOfAnagrams = [];
    for (var key in anagramsGroup) {
        if (anagramsGroup[key].length <= 1) {
            continue;
        } 
        anagramsGroup[key].sort();
        matrixOfAnagrams.push(anagramsGroup[key]);
    }

    matrixOfAnagrams.sort();
    
    return matrixOfAnagrams;
}