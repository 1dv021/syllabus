## Innan du startar
Se till att du studerat de demofilmer och instruktioner som finns INNAN du sätter igång med de andra laborationsuppgifterna:

* [Kom igång med kursen](https://coursepress.lnu.se/kurs/grundlaggande-programmering/kom-igang-med-kursen/)
* [Dagligt arbetsflöde](https://coursepress.lnu.se/kurs/grundlaggande-programmering/workflow-laborationer/)


## Laborationsuppgifterna
Dessa laborationsuppgifter kan utföras under kursens första del. Alla laborationsuppgifter tillhörande del 1 finns i olika branches som börjar med namnet "part1-". Följande laborationsuppgifter finns idagsläget och de är placerade i en ordning vi tycker man bör ta sig an dem:

###Hello World  (part1-hello-world)
Denna laborationsuppgift gås igenom i demonstrationsuppgifterna

***

###Simple Sum (part1-simple-sum)
En enklare uppgift där du ska returnera summan av två tal

***

###Tiny Tunes (part1-tiny-tunes)
Denna branch (part1-tiny-tunes) består av ett antal mindre uppgifter. Du hittar dem i tiny-tunes.js och bör lösa dem i den ordning de kommer. Nästan alla uppgifter har tester knutna till sig och vill man kan man kommentera fram endast de tester som gäller den miniuppgift man arbetar med för stunden. Testerna finns i /test/part-1/tiny-tunes ifall man vill undersöka dessa.

***

###Check values (part1-check-values)
Denna uppgift går ut på att undersöka vad för datatyp en given parameter/variabel har.
Uppgiften har en färdig funktion som tar en parameter(value) och beroende på vad man skickar in
ska en textsträng returneras med en text som beskriver vad det är för datatyp. Se exemplen nedan.

* Skickas en primitiv datatyp ska du identifiera och skriva ut vilken t.ex. "You send me a number" eller "You send me a string"
* Skickas ett objekt in ska strängen "You send me an object"
* Skickas en array in ska strängen "You send me an array"
* Skickas ingen parameter in ska strängen "You send me an undefined value" returneras
* Skickas en funtion in som parameter ska strängen "You send me a function" returneras
* Skickas null in som parameter ska strängen "You send me null" returneras

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-check-values/src/part-1/check-values

***

###Black Adder (part1-black-adder)
Denna uppgift går ut på att skapa en mycket enkel räkneapplikation.
Den ska klara av att addera att fritt antal parametrar i form av nummer (heltal som decimaltal)

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-black-adder/src/part-1/black-adder

***

###Bugsy (part1-bugsy)
I denna uppgiften får du kod i form av dels en modul (helper) innehållande en del hjälpfunktioner
för uppgiften. Dessa fungerar och ska inte ändras.

Din uppgift blir att rätta koden i funktionen "getGangster". Denna funktion tar en sträng i form av initsialer
på en misstänkt gangster. Metoden getGangster har till uppgift att undersöka dessa initsialer och para ihop dessa
med rätt gangsternamn. Till sin hjälp kan funktionen använda två hjälpfunktioner som laddas in via modulen "helper".
Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-bugsy/src/part-1/bugsy

***

###Logger (part1-logger)
Denna uppgift går ut på att fortsätta utveckla befintlig kod för att färdigställa en enklare
logg-modul, dvs. en applikationer som loggar olika typer av meddelandenobjekt i en array.
Modulen har en array (_log) där meddelandeobjekt kan sparas och läsas ifrån.

Modulen har tre publika metoder (se kod för mer kommentarer kring dess):
* write(message, typeNumber) - skriver meddelande till loggen
* read(typeNumber) - läser(returnerar) meddelanden
* clear() - Tömmer loggen

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-logger/src/part-1/logger

***

####Parse Querystring (part1-querystring-parser)
Denna uppgift går ut på att parsa en så kallad querystring och plocka ut värden från denna. En querystring används som påbyggnad på en vanlig URL för att skicka med extra data till servern. Exempelvis kan en URL se ut såhär:
http://lnu.se?name=Stina&age=24

http://lnu.se - är själva URL:en till webbservern och den behöver vi inte bry oss om i denna uppgift men det som kommer efter tecknet '?', det är själva querystringen och den ska vi försöka bena ut i vår kod. En querystring består av ett eller flera värdepar. Vi ser dem i exemplet som name=Stina och age=24, name och age är nyklar (liknande variabler) och Stina och 24 är dess värden. Din uppgift blir att skriva en funktion som tar in en URL och parsar/arbetar om dessa till JavaScript-objekt som sedan blir enklare att hantera i kod. 

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-querystring-parser/src/part-1/parse-querystring
