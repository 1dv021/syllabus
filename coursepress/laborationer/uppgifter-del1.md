## Innan du startar
Se till att du studerat de demofilmer och instruktioner som finns INNAN du sätter igång med de andra laborationsuppgifterna:

* [Kom igång med kursen](https://coursepress.lnu.se/kurs/grundlaggande-programmering/kom-igang-med-kursen/)
* [Dagligt arbetsflöde](https://coursepress.lnu.se/kurs/grundlaggande-programmering/workflow-laborationer/)


## Laborationsuppgifterna
Dessa laborationsuppgifter kan utföras under kursens första del. Alla laborationsuppgifter tillhörande del 1 finns i olika branches som börjar med namnet "part1-". Varje branch-namn står inom paratens till uppgiften och det är viktigt att du använder just detta namn. Det kan finnas ytterligare branches i din lista. Det kan vara så att det är några tidigare felaktiga branches. För att rensa bort gamla och borttagna branches du kan se i din lista kan du köra kommandot:
git remote update 1dv021 --prune

Följande laborationsuppgifter finns idagsläget och de är placerade i en ordning vi tycker man bör ta sig an dem:

***

##Hello World

|  |  |
| ------------- | ------------- |
|  branch | [part1-hello-world](https://github.com/1dv021/laborationer/tree/part1-hello-world) |
| Svårighetsnivå  | Grundläggande  |
| Kursvecka  | 1  |
| Föreläsningar| F01|
| Nyckelord| Komigång, strängar|

Denna laborationsuppgift gås igenom i demonstrationsuppgifterna

##Simple Sum
|  |  |
| ------------- | ------------- |
|  branch | [part1-simple-sum](https://github.com/1dv021/laborationer/tree/part1-simple-sum) |
| Svårighetsnivå  | Grundläggande  |
| Kursvecka  | 1  |
| Föreläsningar| F01|
| Nyckelord| Komigång, number|

En enklare uppgift där du ska returnera summan av två tal

## Pre Tiny Tunes (part1-pre-tiny-tunes)
|  |  |
| ------------- | ------------- |
|  branch | [part1-pre-tiny-tunes](https://github.com/1dv021/laborationer/tree/part1-pre-tiny-tunes) |
| Svårighetsnivå  | Grundläggande  |
| Kursvecka  | 1  |
| Föreläsningar| F01, F02|
| Nyckelord| number, strängar|

Denna branch **(part1-pre-tiny-tunes)** består av ett antal mindre uppgifter som lämpar sig väl att göra efter föreläsning 2. Uppgiften är förberedande för de lite större uppgifterna i "Tiny Tunes"-uppgiften. Du kan lösa uppgifterna i vilken ordning du vill, men jag rekommenderar att beta av dem uppifrån. Det är viktigt att har konfiguerart Mocha i Webbstorm så att du kan köra testerna. 

Observera att det finns läsanvisningar som kommentarer i koden. Följ dessa länkar!

Arbetsgång:

1. Börja med att checka ut branchen part1-pre-tiny-tunes
2. Kör testerna i Webstorm. Notera att samtliga fallerar. Du kan titta på dem i fönstret i nedre vänstra hörnet.
3. Börja att skriva kod för att lösa uppgift 1. Kör testerna och ändra i koden tills de två första testerna är gröna.
4. Fortsätt med nästa funktion.
5. Upprepa tills dess att alla tester är gröna och du är klar med uppgiften.

- [Här hittar du en komigång-inspelning för just denna laborationsuppgift.](https://youtu.be/4JJlXamcgks)
- [Här hittar du en inspelning på en av lösningarna för laborationsuppgiften.](https://youtu.be/ntjmYQMYBx4)

##Tiny Tunes
|  |  |
| ------------- | ------------- |
|  branch | [part1-tiny-tunes-15](https://github.com/1dv021/laborationer/tree/part1-tiny-tunes-15) |
| Svårighetsnivå  | Grundläggande  |
| Kursvecka  | 2  |
| Föreläsningar| F01, F02, F03|
| Nyckelord| number, strängar, iterationer, selektioner, inbyggda funktioner|

Denna branch **(part1-tiny-tunes-15)** består av ett antal mindre uppgifter. Du hittar dem i tiny-tunes.js och bör lösa dem i den ordning de kommer. Nästan alla uppgifter har tester knutna till sig och vill man kan man kommentera fram endast de tester som gäller den miniuppgift man arbetar med för stunden. Testerna finns i /test/part-1/tiny-tunes ifall man vill undersöka dessa.

* Uppgift 1-3 Bör man kunna lösa efter föreläsning 1 och kapitlen 1-2 i boken
* Uppgift 4, middleCharacter - Ett tips är att kolla upp funtionen String.charAt
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
* Uppgit 5, findHash - Kolla upp funktionerna String.indexOf och String.slice 
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
* Uppgift 6, getOdd, Här bör man känna till loopar och restoperatorn, Kapitel 1-2 i boken
* Uppgift 7, gettings, Här kan det vara bra att känna till selektioner (Kapitel 2)
* Uppgift 8, simpleReplaceWithForLoop. Som namnet antyder är det bra att känna till for-loopen här (Kapitel 2)
* Uppgift 9, simpleReplaceWithWhile. Studera while-loopen (kapitel 2)
* Uppgift 10, firstThree, Tipset här är att kunna skriva nästlade loopar, dvs. en loop i en annan loop
* Uppgift 11, robberLanguage, Kolla upp switch-satsen (Kapitel 2)
* Uppgift 12, makeURL, Här kan || -operatorn fungera bra att ge variabler defaulta värden på saknade parametrar (sid 19-20, kapitel 3)

Mer information: https://github.com/1dv021/laborationer/tree/part1-tiny-tunes-15/src/part-1/tiny-tunes

## Rätvinklig triangle
|  |  |
| ------------- | ------------- |
|  branch | [part1-right-triangle](https://github.com/1dv021/laborationer/tree/part1-right-triangle) |
| Svårighetsnivå  | Grundläggande  |
| Kursvecka  | 2  |
| Föreläsningar| F01, F02, F03|
| Nyckelord| |

Komplettera funktionen `Shap.createRightTriangle(base)`, som endast får använda följande strängar, en gång vardera, 

- `"#"`
- `"\n"`

för att skapa en rätvinklig triangel i form av en enda sträng som funktionen returnerar. Vid anrop av funktionen ska det vara möjligt att bestämma hur många tecken som ska finnas i den rätvinkliga triangelns bas.

Mer information: https://github.com/1dv021/laborationer/tree/part1-right-triangle/src/part-1/right-triangle

***

##Check values
|  |  |
| ------------- | ------------- |
|  branch | [part1-check-values-15](https://github.com/1dv021/laborationer/tree/part1-check-values-15) |
| Svårighetsnivå  | Grundläggande  |
| Kursvecka  | 3  |
| Föreläsningar| F01-F04|
| Nyckelord| objekt, arrayer |

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
https://github.com/1dv021/laborationer/tree/part1-check-values-15/src/part-1/check-values

##Black Adder
|  |  |
| ------------- | ------------- |
|  branch | [part1-black-adder-15](https://github.com/1dv021/laborationer/tree/part1-black-adder-15) |
| Svårighetsnivå  | [TODO]  |
| Kursvecka  | 3  |
| Föreläsningar| F01-F04|
| Nyckelord| [TODO] |

Denna uppgift går ut på att skapa en mycket enkel räkneapplikation.
Den ska klara av att addera att fritt antal parametrar i form av nummer (heltal som decimaltal)

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-black-adder-15/src/part-1/black-adder

##Logger
|  |  |
| ------------- | ------------- |
|  branch | [part1-logger-15](https://github.com/1dv021/laborationer/tree/part1-logger-15) |
| Svårighetsnivå  | [TODO]  |
| Kursvecka  | 3  |
| Föreläsningar| F01-F04|
| Nyckelord| [TODO] |

Denna uppgift går ut på att fortsätta utveckla befintlig kod för att färdigställa en enklare
logg-modul, dvs. en applikationer som loggar olika typer av meddelandenobjekt i en array.
Modulen har en array (_log) där meddelandeobjekt kan sparas och läsas ifrån.

Modulen har tre publika metoder (se kod för mer kommentarer kring dess):
* write(message, typeNumber) - skriver meddelande till loggen
* read(typeNumber) - läser(returnerar) meddelanden
* clear() - Tömmer loggen

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-logger-15/src/part-1/logger

##Parse Querystring
|  |  |
| ------------- | ------------- |
|  branch | [part1-querystring-parser](https://github.com/1dv021/laborationer/tree/part1-querystring-parser) |
| Svårighetsnivå  | [TODO]  |
| Kursvecka  | 3  |
| Föreläsningar| F01-F04|
| Nyckelord| [TODO] |

Denna uppgift går ut på att parsa en så kallad querystring och plocka ut värden från denna. En querystring används som påbyggnad på en vanlig URL för att skicka med extra data till servern. Exempelvis kan en URL se ut såhär:
http://lnu.se?name=Stina&age=24

http://lnu.se - är själva URL:en till webbservern och den behöver vi inte bry oss om i denna uppgift men det som kommer efter tecknet '?', det är själva querystringen och den ska vi försöka bena ut i vår kod. En querystring består av ett eller flera värdepar. Vi ser dem i exemplet som name=Stina och age=24, name och age är nyklar (liknande variabler) och Stina och 24 är dess värden. Din uppgift blir att skriva en funktion som tar in en URL och parsar/arbetar om dessa till JavaScript-objekt som sedan blir enklare att hantera i kod. 

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-querystring-parser/src/part-1/parse-querystring

##Bugsy ()
|  |  |
| ------------- | ------------- |
|  branch | [part1-bugsy-15](https://github.com/1dv021/laborationer/tree/part1-bugsy-15) |
| Svårighetsnivå  | [TODO]  |
| Kursvecka  | 3  |
| Föreläsningar| F01-F04|
| Nyckelord| [TODO] |

I denna uppgiften får du kod i form av dels en modul (helper) innehållande en del hjälpfunktioner
för uppgiften. Dessa fungerar och ska inte ändras.

Din uppgift blir att rätta koden i funktionen "getGangster". Denna funktion tar en sträng i form av initsialer
på en misstänkt gangster. Metoden getGangster har till uppgift att undersöka dessa initsialer och para ihop dessa
med rätt gangsternamn. Till sin hjälp kan funktionen använda två hjälpfunktioner som laddas in via modulen "helper".
Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-bugsy-15/src/part-1/bugsy

## Harshadtal (part1-harshad-number)
|  |  |
| ------------- | ------------- |
|  branch | [part1-harshad-number](https://github.com/1dv021/laborationer/tree/part1-harshad-number) |
| Svårighetsnivå  | [TODO]  |
| Kursvecka  | 3  |
| Föreläsningar| F01-F04|
| Nyckelord| [TODO] |

Harshadtal, eller Nivental, i en given talbas, i denna uppgift talbasen 10, är ett heltal som är jämt delbart med sin siffersumma.

Exmpel på tal som är Harshadtal:

- 10, då 1 + 0 = 1 och 10 är lika med 1 * 10
- 24, då 2 + 4 = 6 och 24 är lika med 6 * 4
- 198, då 1 + 9 + 8 = 18 och 198 är lika med 18 * 11

Din uppgift är att slutföra implementationen av det påbörjade Harshad-objektet, som har tre metoder: - `isValid`, `getNext` och `getSequence`.

Mer information om uppgiften hittar du på:
https://github.com/1dv021/laborationer/tree/part1-harshad-number/src/part-1/harshad-number

