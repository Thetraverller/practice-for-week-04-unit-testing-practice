const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  let word;
  let word2;

  beforeEach(() => {
    word = new Word('Appletini');
    word2 = new Word('Crazytown');
  });

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.all.keys('word');
      expect(word2).to.have.all.keys('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word).to.have.property('word', 'Appletini');
      expect(word2).to.have.property('word', 'Crazytown');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const consonantWord = word.removeVowels();
      const consonantWord2 = word2.removeVowels();

      expect(consonantWord).to.equal('ppltn');
      expect(consonantWord2).to.equal('Crzytwn');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      const vowelsWord = word.removeConsonants();
      const vowelsWord2 = word2.removeConsonants();

      expect(vowelsWord).to.equal('Aeii');
      expect(vowelsWord2).to.equal('ao');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const plWord = word.pigLatin();
      const plWord2 = word2.pigLatin();

      expect(plWord).to.equal('Appletiniyay');
      expect(plWord2).to.equal('azytownCray');
    });
  });
});
})
