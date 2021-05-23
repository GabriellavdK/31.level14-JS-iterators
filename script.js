// itereren over een while loop oude stijl
let colors = ['yellow', 'blue', 'red', 'orange'];
let run = 0;

while (run < colors.length) {
    console.log(colors[run]);
    run++;
}

//itereren over een for loop oude stijl
for (nr = 0; nr < colors.length; nr++) {
    console.log(colors[nr]);
}

//itereren met behulp van array method forEach
colors.forEach(element => console.log(element));

// Mijn while loop neemt 6 regels in beslag, en mijn for loop neemt 4 regels in beslag. 
// De forEach method neemt maar 2 regels in beslag. 
// Array methode is veel leesbaarder en ook direct duidelijk wat de bedoeling is in tegenstelling tot de loops. Daarbij is niet direct duidelijk wat ze doen. 
// Je kunt geen array method gebruiken op een object.
// Voor een object kun je daarvoor in de plaats de for..in statement gebruiken of anders de object.entries() statement. 

// Hieronder een test om te zien hoe het itereren van objecten werkt. 
let testObject = {
    name: 'gabriella',
    age: 32,
    birthplace: 'amersfoort',
    address: 'De ruyterstraat',
    place: 'ijmuiden'
}

//Deze optie print alleen de keywords van het object (name, age, birthplace etc.)
for (const item in testObject) {
    console.log(item)
}

//Deze optie print zowel de keywords als de waardes van die keywords. 
Object.entries(testObject).map(item => {
    console.log(item)
})
