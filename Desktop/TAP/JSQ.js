//here is the answer to question2

function isAnagram(word1, word2) {
  // remove the white space,convert it to lowercase
  const cleanWord1 = word1.replace(/\s/g, "").toLowerCase();
  const cleanWord2 = word2.replace(/\s/g, "").toLowerCase();

  // Convert words to arrays, sort, and compare
  const sortedWord1 = cleanWord1.split("").sort().join("");
  const sortedWord2 = cleanWord2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
}

// if you find a match push it to the array
function isAnagramInArray(phrase, arr) {
  const result = [];
  arr.forEach((word) => {
    if (isAnagram(phrase, word)) {
      result.push(word);
    }
  });
  return result;
}
const anagrams = [
  "oz bilal tochberer",
  "it's razorbill beachcomber",
  "och robe tilblazer",
  "bib chorizo cellarmaster",
  "thor bble carizole",
  "zll borcht aberoie",
  "brzl orche atobile",
  "dame shelburne characterizing",
  "uber englishman characterized",
  "agnes rhumbline characterized",
  "rehab scrutinized charlemagne",
  "dreams zurich interchangeable",
  "bam hamster technocratic",
  "mechatronic masterbatch",
  "bam ratchet mechatronics",
];

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
