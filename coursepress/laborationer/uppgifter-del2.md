## Innan du startar
Se till att du studerat de demofilmer och instruktioner som finns INNAN du sätter igång med de andra laborationsuppgifterna:

* [Kom igång med kursen](https://coursepress.lnu.se/kurs/grundlaggande-programmering/kom-igang-med-kursen/)
* [Dagligt arbetsflöde](https://coursepress.lnu.se/kurs/grundlaggande-programmering/workflow-laborationer/)

Observera att du fortsätter arbeta i samma laborationsrepo som i del 1av kursen men att uppgifterna nu hamnar i katalogen "part-2" under src.

## Laborationsuppgifterna
Dessa laborationsuppgifter kan utföras under kursens andra del. Alla laborationsuppgifter tillhörande del 2 finns i olika branches som börjar med namnet "part2-". Varje branch-namn står inom paratens till uppgiften och det är viktigt att du använder just detta namn. Det kan finnas ytterligare branches i din lista. Det kan vara så att det är några tidigare felaktiga branches. För att rensa bort gamla och borttagna branches du kan se i din lista kan du köra kommandot:

```
git remote update 1dv021 --prune
```
Uppgifterna är uppdelade i olika svårighetsnivåer från A till C, där C är den svåraste nivån.

Lösningsförslag finns att studera på: https://github.com/1dv021/part2-solutions/tree/master/src/part-2. Dessa kommer fyllas på allt eftersom.

***

##Simple Lego Builder

|  |  |
| ------------- | ------------- |
|  branch | [part2-simple-lego-builder](https://github.com/1dv021/laborationer/tree/part2-simple-lego-builder) |
| Svårighetsnivå  | A  |
| Kursvecka  | 5  |
| Föreläsningar| F05|
| Nyckelord| Factory pattern, Constructor pattern, Constructor/Prototype pattern.|

I denna uppgift ska du skapa enklare legobits-objekt. Du hittar en beskrivning för detta här:

[README.md](https://github.com/1dv021/laborationer/tree/part2-simple-lego-builder/src/part-2/simple-lego-builder)
[Inspelad lösningsfilm](https://youtu.be/FbCjUOXtVkg)

## Episk ellips
|  |  |
| ------------- | ------------- |
|  branch | [part2-epic-ellipse](https://github.com/1dv021/laborationer/tree/part2-epic-ellipse) |
| Svårighetsnivå  | A  |
| Kursvecka  | 5  |
| Föreläsningar| F05|
| Nyckelord| Constructor/Prototype pattern|

"Du ska skriva en konstruktorfunktion som skapar ett objekt av typen Ellipse där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjlight att ange halva storaxelns längd, som betecknas a, och halva lillaxelns längd, som betecknas b." [Läs mer..](https://github.com/1dv021/laborationer/tree/part2-epic-ellipse/src/part-2/epic-ellipse)

## Skrotbilen
|  |  |
| ------------- | ------------- |
|  branch | [part2-scrap-car](https://github.com/1dv021/laborationer/tree/part2-scrap-car) |
| Svårighetsnivå  | A  |
| Kursvecka  | 5  |
| Föreläsningar| F05|
| Nyckelord| Constructor/Prototype pattern|

"Din uppgift är att skriva kod som efterliknar en enkel bil. Bilen ska kunna starta, stanna, svänga till höger, svänga till vänster och accelerera. Det ska vara möjligt att ge bilen ett smeknamn och dessutom nåste bilen själv hålla ordning på dess hastighet." [Läs mer..](https://github.com/1dv021/laborationer/tree/part2-scrap-car/src/part-2/scrap-car)

## Monumental ellips
|  |  |
| ------------- | ------------- |
|  branch | [part2-monumental-ellipse](https://github.com/1dv021/laborationer/tree/part2-monumental-ellipse) |
| Svårighetsnivå  | B |
| Kursvecka  | 6  |
| Föreläsningar| F05, F06|
| Nyckelord| "Constructor/Prototype pattern", "getters", "setters"|

"Du ska skriva en konstruktorfunktion som skapar ett objekt av typen Ellipse där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjlight att ange halva storaxelns längd, som betecknas a, och halva lillaxelns längd, som betecknas b." [Läs mer..](https://github.com/1dv021/laborationer/tree/part2-monumental-ellipse/src/part-2/monumental-ellipse)

## The leauge
|  |  |
| ------------- | ------------- |
|  branch | [part2-the-leauge](https://github.com/1dv021/laborationer/tree/part2-the-leauge) |
| Svårighetsnivå  | C |
| Kursvecka  | 5 - 6 |
| Föreläsningar| F05|
| Nyckelord| "Constructor/Prototype pattern", "shallow-copy"|

Du ska skriva en mindre applikation som simulerar ett ligaspel. En liga kan innehålla många lag och ett lag kan vara med i 
många ligor. Uppgiften har inga tester på getters/setters utan bygger främst på konstruktionerna från föreläsning F05. [Läs mer..](https://github.com/1dv021/laborationer/tree/part2-the-leauge/src/part-2/the-leauge)

