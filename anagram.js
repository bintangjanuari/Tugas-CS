var anagram = function(a, b){
    //sebagai security jika ada kata yang panjangnya tidak sama
    if(a.length != b.length){
        return false;
    }

    //Sorting huruf dalam kata menurut abjad
    let SortingA = a.toLowerCase().split('').sort().join('');
    let SortingB = b.toLowerCase().split('').sort().join('');

    //membandingkan setiap huruf yang disorting
    if(SortingA === SortingB){
        return true;
    } else {
        return false;
    }
};
console.log(anagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log(anagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(anagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

console.log(anagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log(anagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log(anagram("apple", "pale"), false, 'Same letters, but different count')