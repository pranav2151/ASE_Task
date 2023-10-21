function reverseWordsInSentence(sentence) {
  const words = sentence.split(" ");

  function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    return reversed;
  }

  const reversedSentence = words.map(reverseWord).join(" ");
  return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversed = reverseWordsInSentence(inputSentence);
console.log(reversed);
