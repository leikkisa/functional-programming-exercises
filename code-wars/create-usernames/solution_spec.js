const E = require("./solution")
const assert = require("chai").assert

describe('addUsernames', () => {
  
  it('Adds property username comprised of user\'s first name, last name, and birth year in lower case', () => {
    assert.deepEqual(E.addUsername(devList), expectedDevList)
  })

  it('Adds property username comprised of user\'s first name, last name, and birth year in lower case', () => {
    const result = E.addUsername(devList)
    assert.deepEqual(result[3].username, expectedDevList[3].username)
  })
})

let devList = [{
  firstName: "Sofia",
  lastName: "P.",
  country: "Italy",
  continent: "Europe",
  age: 41,
  language: "Clojure"
}, {
  firstName: "Kseniya",
  lastName: "T.",
  country: "Belarus",
  continent: "Europe",
  age: 29,
  language: "JavaScript"
}, {
  firstName: "Jing",
  lastName: "X.",
  country: "China",
  continent: "Asia",
  age: 39,
  language: "Ruby"
}, {
  firstName: "Noa",
  lastName: "A.",
  country: "Israel",
  continent: "Asia",
  age: 40,
  language: "Ruby"
}, {
  firstName: "Andrei",
  lastName: "E.",
  country: "Romania",
  continent: "Europe",
  age: 59,
  language: "C"
}, {
  firstName: "Maria",
  lastName: "S.",
  country: "Peru",
  continent: "Americas",
  age: 60,
  language: "C"
}, {
  firstName: "Lukas",
  lastName: "X.",
  country: "Croatia",
  continent: "Europe",
  age: 75,
  language: "Python"
}, {
  firstName: "Chloe",
  lastName: "K.",
  country: "Guernsey",
  continent: "Europe",
  age: 88,
  language: "Ruby"
}, {
  firstName: "Viktoria",
  lastName: "W.",
  country: "Bulgaria",
  continent: "Europe",
  age: 98,
  language: "PHP"
}, {
  firstName: "Piotr",
  lastName: "B.",
  country: "Poland",
  continent: "Europe",
  age: 128,
  language: "JavaScript"
}]

const expectedDevList = [{
  firstName: 'Sofia',
  lastName: 'P.',
  country: 'Italy',
  continent: 'Europe',
  age: 41,
  language: 'Clojure',
  username: 'sofiap1976'
}, {
  firstName: 'Kseniya',
  lastName: 'T.',
  country: 'Belarus',
  continent: 'Europe',
  age: 29,
  language: 'JavaScript',
  username: 'kseniyat1988'
}, {
  firstName: 'Jing',
  lastName: 'X.',
  country: 'China',
  continent: 'Asia',
  age: 39,
  language: 'Ruby',
  username: 'jingx1978'
}, {
  firstName: 'Noa',
  lastName: 'A.',
  country: 'Israel',
  continent: 'Asia',
  age: 40,
  language: 'Ruby',
  username: 'noaa1977'
}, {
  firstName: 'Andrei',
  lastName: 'E.',
  country: 'Romania',
  continent: 'Europe',
  age: 59,
  language: 'C',
  username: 'andreie1958'
}, {
  firstName: 'Maria',
  lastName: 'S.',
  country: 'Peru',
  continent: 'Americas',
  age: 60,
  language: 'C',
  username: 'marias1957'
}, {
  firstName: 'Lukas',
  lastName: 'X.',
  country: 'Croatia',
  continent: 'Europe',
  age: 75,
  language: 'Python',
  username: 'lukasx1942'
}, {
  firstName: 'Chloe',
  lastName: 'K.',
  country: 'Guernsey',
  continent: 'Europe',
  age: 88,
  language: 'Ruby',
  username: 'chloek1929'
}, {
  firstName: 'Viktoria',
  lastName: 'W.',
  country: 'Bulgaria',
  continent: 'Europe',
  age: 98,
  language: 'PHP',
  username: 'viktoriaw1919'
}, {
  firstName: 'Piotr',
  lastName: 'B.',
  country: 'Poland',
  continent: 'Europe',
  age: 128,
  language: 'JavaScript',
  username: 'piotrb1889'
}]