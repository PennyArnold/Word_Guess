// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
var Letter = require("./letter.js");

// This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

function Word(word) {
    // An array of new Letter objects representing the letters of the underlying word
    this.word = [];
    for (i = 0; i < word.length; i++) {
        this.word.push(new Letter(word.charAt(i)));
    }


    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.string = function () {
        var string = "";
        this.arr.forEach(function (e) {
            string += e.blank();
        });
        return string;
    };

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.checkLetter = function(GuessedLetter) {
        this.arr.forEach(function(e) {
          e.letterCorrect(GuessedLetter);
        });
      };
    }
    
    module.exports = Word;