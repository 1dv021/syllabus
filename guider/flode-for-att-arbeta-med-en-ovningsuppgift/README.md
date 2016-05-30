# Flöde för att arbeta med en övningsuppgift

...

> För att kunna följa denna guide behöver du ha följt giuden ["Så kommer du igång med ditt repo för övningsuppgifterna"](../sa-kommer-du-igang-med-ditt-repo-for-kursens-ovningsuppgifter). 

## Steg 1. Byt till katalogen för dina övningsuppgifter

Se till att du befinner dig i katalogen för dina övningsuppgifter. 

`$ cd 1dv021/[your-lnu-username]-exercises` 

## Steg 2. Lägg till ett alias för källan till övningsuppgiften

...

`$ git remote add right-triangle https://github.com/1dv021/exercise-right-triangle.git`

...

`$ git remote -v`

...

## Steg 3. Lägg till en ny övningsuppgift

...

`$ git subtree add --prefix=right-triangle --squash  right-triangle master`

...

`$ cd right-triangle` 

## Steg 4. Klart!

Nu är allt klart för att du ska kunna börja arbeta med övningsuppgiften.

### Fira!

Genom att följa denna guide har du satt dig in flödet att arbeta med kursens övningsuppgifter. :tada: :octocat: :zap:

> __Tips__: Ta en titt på [andra intressanta guider](../).

 