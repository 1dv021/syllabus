Detta är en snabbguide över det som vi går igenom i ["Demo 6 - Hello World"](https://youtu.be/yFzyCLC53iA) i Kom igång-guiden.

## Förberedelse inför laboration
Kursens laborationsuppgifter hittar du här: [https://github.com/1dv021/laborationer](https://github.com/1dv021/laborationer)

1. Klona ditt laborationsrepo från organisationen 1DV021 
* `git clone https://github.com/1dv021/DITTANVÄNDARNAMN-laborationer.git`
2. Lägg en genväg till kursens laborationsrepo:
* `git remote add https://github.com/1dv021/laborationer.git`
3. Hämta ner laborationerna till ditt lokala repo:
* `git pull 1dv021`
4. Merga `1dv021/master` med `master`
* `git merge 1dv021/master`
5. Installera alla yttre beroenden. (Mocha, JSCS, JSHint...)
* `npm install`

Du är nu redoa att ta dig an din första uppgift.

## Dagligt arbete, laborationer

1. Uppdatera för att se om några nya uppgifter tillkommit i 1DV021
* `git pull 1dv021`
2. Växla till den laborationsuppgift du vill arbeta med.
* `git checkout part1-hello-world`
3. Arbeta med uppgiften, kör tester etc. Gör regelbundna commits:
* `git add .`, `git commit -m "Implements solution for the task"`
4. När uppgiften är löst, merga den med master-branchen
* `git checkout master`
* `git merge part1-hello-world`
5. Skicka förändringar till github
* `git push`
6. Börja om på steg 2 med nästa uppgift i ordningen.