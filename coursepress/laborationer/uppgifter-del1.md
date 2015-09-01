## Innan du startar
Se till att du studerat de demofilmer och instruktioner som finns INNAN du sätter igång med de andra laborationsuppgifterna:
- [Kom igång med kursen](https://coursepress.lnu.se/kurs/grundlaggande-programmering/kom-igang-med-kursen/)
- [Dagligt arbetsflöde](https://coursepress.lnu.se/kurs/grundlaggande-programmering/workflow-laborationer/)


## Laborationsuppgifterna
Dessa laborationsuppgifter kan utföras under kursens första del. Alla laborationsuppgifter tillhörande del 1 finns i olika branches som börjar med namnet "part1-". Följande laborationsuppgifter finns idagsläget och de är placerade i en ordning vi tycker man bör ta sig an dem:

####Hello World  (part1-hello-world)
Denna laborationsuppgift gås igenom i demonstrationsuppgifterna

####Simple Sum (part1-simple-sum)
En enklare uppgift där du ska returnera summan av två tal

####Tiny Tunes (part1-tiny-tunes)
Denna branch (part1-tiny-tunes) består av ett antal mindre uppgifter. Du hittar dem i tiny-tunes.js och bör lösa dem i den ordning de kommer. Nästan alla uppgifter har tester knutna till sig och vill man kan man kommentera fram endast de tester som gäller den miniuppgift man arbetar med för stunden. Testerna finns i /test/part-1/tiny-tunes ifall man vill undersöka dessa.

####Check values (part1-check-values)
Denna uppgift går ut på att undersöka vad för datatyp en given parameter/variabel har.
Uppgiften har en färdig funktion som tar en parameter(value) och beroende på vad man skickar in
ska en textsträng returneras med en text som beskriver vad det är för datatyp. Se exemplen nedan.

* Skickas en primitiv datatyp ska du identifiera och skriva ut vilken t.ex. "You send me a number" eller "You send me a string"
* Skickas ett objekt in ska strängen "You send me an object"
* Skickas en array in ska strängen "You send me an array"
* Skickas ingen parameter in ska strängen "You send me an undefined value" returneras
* Skickas en funtion in som parameter ska strängen "You send me a function" returneras
* Skickas null in som parameter ska strängen "You send me null" returneras

**Kodexempel**
```
var vc = require(......);

console.log(vc.check("Detta är en sträng")); // outputs "You send me a string"
console.log(vc.check(true)); // outputs "You send me a primitive"
console.log(vc.check({})); // outputs "You send me an object"
console.log(vc.check([])); // outputs "You send me an array"
console.log(vc.check(function(){})); // outputs "You send me a function"
...
```
Se testerna för mer information om hur modulen ska fungera

####Black Adder (part1-black-adder)
Denna uppgift går ut på att skapa en mycket enkel räkneapplikation.
Den ska klara av att addera att fritt antal parametrar i form av nummer (heltal som decimaltal)

```
var calc = require(......);
var sum = calc.add(2, 5, 19);
console.log(sum); // output 26

```
Dock ska modulen kunna avgöra att den verkligen anropas med riktiga tal/nummer
eller åtminstone tal i form av textsträngar typ "12"


```
var calc = require(......);
var sum = calc.add(2, "5", 19);
console.log(sum); // output 26

sum = calc.add(2.5, "5", "3,5", "1.2"); // obs både kommatecken(,) och punkt(.) ska fungera att använda i strängar
console.log(sum); // output 12.2

```
####Bugsy (part1-bugsy)
I denna uppgiften får du kod i form av dels en modul (helper) innehållande en del hjälpfunktioner
för uppgiften. Dessa fungerar och ska inte ändras.

Din uppgift blir att rätta koden i funktionen "getGangster". Denna funktion tar en sträng i form av initsialer
på en misstänkt gangster. Metoden getGangster har till uppgift att undersöka dessa initsialer och para ihop dessa
med rätt gangsternamn. Till sin hjälp kan funktionen använda två hjälpfunktioner som laddas in via modulen "helper".
Dessa beskrivs nedan.

##### Funktionen getNext()
Denna funktion går igenom en lista med namn på kända gangsters. För varje gång man anropar getNext() får man ett nytt
namn tills det inte finns flera. Då returneras en tom sträng. Metoden passar bra att anropa i någon form av while-loop.

```
var helper = require("helper"); // laddar in modulen helper
var name = getNext(); // första namnet laddas in => "Bugsy Malone"

....

name = getNext(); // nu uppdateras variabeln "name" med nästa namn i listan => "Frank Nitti"

```

##### Funktionen getInitials(name)
Funktionen tar ett namn som parameter och returnerar detta namns Initsialer (tittar på mellanslagen mellan namnen)

```
var helper = require("helper"); // laddar in modulen helper

var name = "Al Capone";

var initials = helper.getInitials(name); // Al Capone blir "AC" vilket nu är värdet på variabeln  "initials"

```
För mer information se testfilen
####Logger (part1-logger)
Denna uppgift går ut på att fortsätta utveckla befintlig kod för att färdigställa en enklare
logg-modul, dvs. en applikationer som loggar olika typer av meddelandenobjekt i en array.
Modulen har en array (_log) där meddelandeobjekt kan sparas och läsas ifrån.

Modulen har tre publika metoder (se kod för mer kommentarer kring dess):
* write(message, typeNumber) - skriver meddelande till loggen
* read(typeNumber) - läser(returnerar) meddelanden
* clear() - Tömmer loggen


Dessa är från början tomma och tanken är att du ska fylla dessa med kod som får modulen  att
klara de tester som finns skrivna.

typeNumber är ett nummer som representerar en viss typ av meddelande (t.ex. 'info', 'debug' osv.)
Detta nummer används när man anropar modulen men i själva loggen sparas meddelandetypen

##Kodexempel

```
var simpleLogger = require(......);

simpleLogger.clear();
console.log(simpleLogger.read()); // outputs "[]"

simpleLogger.write("TestMessage", 0); //
console.log(simpleLogger.read()); // outputs  "[{info: "TestMessage"}]"
simpleLogger.clear();

simpleLogger.write("TestMessage2"); //
console.log(simpleLogger.read()); // outputs  "[{info: "TestMessage2"}]"
simpleLogger.clear();

simpleLogger.write("TestMessage", 1); //
console.log(simpleLogger.read()); // outputs  "[{warning: "TestMessage"}]"
simpleLogger.clear();

simpleLogger.write("TestMessage1", 0);
simpleLogger.write("TestMessage2", 1);
simpleLogger.write("TestMessage3", 4);
simpleLogger.write("TestMessage4", 0);
console.log(simpleLogger.read(0)); // outputs  "[{info: "TestMessage1"}, {info: "TestMessage4"}]"
simpleLogger.clear();
```
####Parse QuerySTring (part1-parse-querystring)
Denna uppgift går ut på att parsa en så kallad querystring och plocka ut värden från denna. En querystring används som påbyggnad på en vanlig URL för att skicka med extra data till servern. Exempelvis kan en URL se ut såhär:
http://lnu.se?name=Stina&age=24

http://lnu.se - är själva URL:en till webbservern och den behöver vi inte bry oss om i denna uppgift men det som kommer efter tecknet '?', det är själva querystringen och den ska vi försöka bena ut i vår kod. En querystring består av ett eller flera värdepar. Vi ser dem i exemplet som name=Stina och age=24, name och age är nyklar (liknande variabler) och Stina och 24 är dess värden. Din uppgift blir att skriva en funktion som tar in en URL och parsar/arbetar om dessa till JavaScript-objekt som sedan blir enklare att hantera i kod. 

#####Kodexempel 

```
qsParser.parse("http://lnu.se?key1=value1&key2=value2"); // returns { key1: "value1", key2: "value2" }
qsParser.parse("http://lnu.se"); // returns {}
qsParser.parse("http://lnu.se?key"); // returns {key: ""}
qsParser.parse("http://lnu.se?key1=value1&key2="); // returns  { key1: "value1", key2: "" }
// more tests in testfile  
```
