### Innan du startar
Se till att du studerat de demofilmer och instruktioner som finns INNAN du sätter igång med de andra laborationsuppgifterna:
- [Kom igång med kursen]("https://coursepress.lnu.se/kurs/grundlaggande-programmering/kom-igang-med-kursen/")
- [Dagligt arbetsflöde]("https://coursepress.lnu.se/kurs/grundlaggande-programmering/workflow-laborationer/")


## Laborationsuppgifterna
Dessa laborationsuppgifter kan utföras under kursens första del. Alla laborationsuppgifter tillhörande del 1 finns i olika branches som börjar med namnet "part1-". Följande laborationsuppgifter finns idagsläget och de är placerade i en ordning vi tycker man bör ta sig an dem:

###Hello World  (part1-hello-world)
Denna laborationsuppgift gås igenom i demonstrationsuppgifterna

###Simple Sum (part1-simple-sum)
En enklare uppgift där du ska returnera summan av två tal

###Tiny Tunes (part1-tiny-tunes)
Denna branch (tiny-tunes) består av ett antal mindre uppgifter. Du hittar dem i tiny-tunes.js och bör lösa dem i den ordning de kommer. Nästan alla uppgifter har tester knutna till sig och vill man kan man kommentera fram endast de tester som gäller den miniuppgift man arbetar med för stunden. Testerna finns i /test/part-1/tiny-tunes ifall man vill undersöka dessa.

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

###More to come....
