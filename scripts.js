/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á
/**
 * Fallið finnur og skilar lengsta orði í streng
 * @param {string} str strengur af orðum sem skipt er niður með bilum.
 * @returns {string} strengur sem er lengsta orðið í str. Ef fleiri en eitt orð
 *  hafa lengstu lengd skilar fallið fyrsta orðinu sem kemur fyrir
 */
function longest(str) {
  let splitted = split(str);
  let longest = "";
  let max_length = 0;
  for (let i = 0; i < splitted.length; i++) {
      if (splitted[i].length > max_length) {
        max_length = splitted[i].length;
        longest = splitted[i];
      }
  }
  return longest;
}

console.assert(longest("þetta er strengurinn minn") === "strengurinn", 'longest: skilar lengsta orðinu í streng');
console.assert(longest("halló hafnarfjörður") === "hafnarfjörður", 'longest: skilar lengsta orðinu í streng');

/**
 * Fallið finnur og skilar stysta orði í streng
 * @param {string} str strengur af orðum skipt niður með bilum.
 * @returns {string} strengur sem er stysta orðið í str. Ef fleiri en einn sem eru af
 * minnstu lengd skilar fallið fyrsta orðinu af stystu lengd
 */
function shortest(str) {
  let splitted = split(str);
  let shortest = "";
  let min_length = Infinity;
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length < min_length) {
      min_length = splitted[i].length;
      shortest = splitted[i];
    }
  }
  return shortest;
}

console.assert(shortest("þetta er strengurinn minn") === "er", 'longest: skilar stysta orðinu í streng');
console.assert(shortest("halló hafnarfjörður") === "halló", 'longest: skilar stysta orðinu í streng');

/**
 * Fallið skilar streng í öfugri röð
 * @param {string} str strengur sem á að snúa við
 * @returns {string} strengurinn str í öfugri röð
 */
function reverse(str) {
  let reversed = "";
  for (let i = 0; i < str.length ; i++){
    reversed += str[str.length - 1 - i];
  }
  return reversed;
}

console.assert(reverse("hallo") === "ollah", 'reverse: skrifar streng í öfugri röð');
console.assert(reverse("búið") === "ðiúb", 'reverse: skrifar streng í öfugri röð');

/**
 * Fallið athugar hvort strengur sé palindrome þ.e. hvort hann sé eins þegar
 * hann er lesinn afturábak og áfram.
 * @param {string} str strengurinn sem á að athuga hvort sé palindrome
 * @returns true ef str er palindrome strengur, annars false
 */
function palindrome(str) {
  if (str == reverse(str)) {
    return true;
  }
  return false;
}

console.assert(palindrome("abba") === true, 'palindrome: athugar hvort strengur sé palindrome, ef svo er skilar true, annars false');
console.assert(palindrome("búið") === false, 'palindrome: athugar hvort strengur sé palindrome, ef svo er skilar true, annars false');

/**
 * Fallið athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng
 * @param {string} str strengurinn sem á að finna fjölda sérhljóða í 
 * @returns fjöldi sérhljóða í str
 */
function vowels(str) {
  let nmbr = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      nmbr += 1;
    }
  }
  return nmbr;
}

console.assert(vowels("hallo") === 2, 'vowels: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');
console.assert(vowels("hallooo") === 4, 'vowels: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');

/**
 * Fallið athugar hve margir samhljóðar úr íslenska stafrófinu eru í streng
 * @param {string} str strengurinn sem á að finna fjölda samhljóða í
 * @returns  fjöldi samhljóða í str
 */
function consonants(str) {
  let nmbr = 0;
  for (let i = 0; i < str.length; i++) {
    if (CONSONANTS.includes(str[i])){
      nmbr += 1;
    }
  }
  return nmbr
}


console.assert(consonants("hallo") === 3, 'consonants: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');
console.assert(consonants("hallooo halloo") === 6, 'consonants: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Forrit þetta getur athugað hvað er lengsta orð og stysta orð í streng. Einnig skrifað út streng í öfugri röð og hvort hann sé palindrome. Þá getur forritið líka athugað hversu marga sam- og sérhljóða strengur inniheldur.");
  
  let input = prompt("Sláðu inn streng:");

  if (input !== null && typeof input==='string') {

    let longestWord = longest(input);
    let shortestWord = shortest(input);
    let reversedString = reverse(input);
    let isPalindrome = palindrome(input);
    let vowelCount = vowels(input);
    let consonantCount = consonants(input);

    alert(
      `Niðurstöður fyrir strenginn   ${input}\n` +
      `Lengsta orðið:   ${longestWord}\n` +
      `Stysta orðið:   ${shortestWord}\n` +
      `Er palindrome:   ${isPalindrome}\n` +
      `Öfugt orð:   ${reversedString}\n` +
      `Fjöldi sérhljóða:   ${vowelCount}\n` +
      `Fjöldi samhljóða:   ${consonantCount}\n`
    );

    if (confirm("smelltu á ok til að byrja upp á nýtt eða smelltu á cancel til að hætta")) {
      start()
    }
  }
}
