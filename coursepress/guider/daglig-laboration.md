Detta är en snabbguide över det som vi går igenom i ["Demo 6 - Hello World"](https://youtu.be/yFzyCLC53iA) i Kom igång-guiden.

## Förberedelse inför laboration
Kursens laborationsuppgifter hittar du här: [https://github.com/1dv021/laborationer](https://github.com/1dv021/laborationer)

1. Klona ditt laborationsrepo från organisationen 1DV021 
* `git clone https://github.com/1dv021/DITTANVÄNDARNAMN-laborationer.git`
2. Byt katalog till den katalog som du klonade under 1)
* `cd DITTANVÄNDARNAMN-laborationer`(Oftast räcker det att du skriver första bokstaven i ditt användarnamn och sedan trycker TAB)
3. Lägg en genväg till kursens laborationsrepo:
* `git remote add 1dv021 https://github.com/1dv021/laborationer.git`
4. Hämta ner laborationerna till ditt lokala repo:
* `git pull 1dv021`
5. Merga *1dv021/master* med *master*
* `git merge 1dv021/master`
6. Installera alla yttre beroenden. (Mocha, JSCS, JSHint...)
* `npm install`

Du är nu redoa att ta dig an din första uppgift.

## Dagligt arbete, laborationer

Börja med att updatera för att se om några nya uppgifter tillkommit i 1DV021
`git pull 1dv021`

1. Växla till den laborationsuppgift du vill arbeta med.
* `git checkout part1-hello-world`
2. Arbeta med uppgiften, kör tester etc. Gör regelbundna commits:
* `git add .`
* `git commit -m "Implements solution for the task"`
3. När uppgiften är löst, merga den med master-branchen
* `git checkout master`
* `git merge part1-hello-world`
4. Skicka förändringar till github
* `git push origin`
5. Börja om på steg 1 med nästa uppgift i ordningen.
