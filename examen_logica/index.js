function hasUniqueCharacters(inputString) {
  const uniqueCharacters = new Set();

  for (const element of inputString) {
    const character = element;

    if (uniqueCharacters.has(character)) {
      return false;
    }

    uniqueCharacters.add(character);
  }

  return true;
}

// Ejemplo
const string1 = "String";
const string2 = "Some String";

console.log(hasUniqueCharacters(string1)); // Returns true
console.log(hasUniqueCharacters(string2)); // Returns false
