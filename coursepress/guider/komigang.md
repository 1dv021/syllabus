Här beskriver vi hur du ska komma igång med laborationerna i kursen, alltså det praktiska arbetet. 

Innan du startar med detta så förutsätter vi följande:
* Du har skaffat dig ett [student-konto](https://accountcheckout.lnu.se/SelectLanguage.aspx) på LNU.
* Du har loggat in på din [student-epostadress](http://lnu.se/student/vi-hjalper-dig/it-och-support/e-post).
* Du har tittat på kursens första [introduktionsföreläsning](https://coursepress.lnu.se/kurs/grundlaggande-programmering/introduktion/).  

Guiden består av följande steg:

1. Introduktion
2. Versionshanteraren Git
 * Installation
 * Konfiguration
3. Applikationsmiljön Node.js
 * Installation av Node.js och npm
4. Webstorm IDE
 * Installation
 * Konfiguration av terminalen
 * Konfiguration av JSCS och JSHint 
5. GitHub
 * Skaffa konto
 * Ansök om GitHub Education
 * Bekanta dig med kursens GitHub-organisation
6. Genomför din första laboration, "Hello, World!"

### Skolans datorsalar
Om du använder skolans datorsalar så är steg 1-4 redan genomförda på de datorer som finns i salarna Ny106, Ny107, Ny108, Ny112 samt Ny113. Du kan, och ska inte installera något eget på dessa datorer utan kan börja med steg 5.

### Resurser
1. [What is VCS? (GitHub Training & Guides)](https://youtu.be/8oRjP8yj2Wo?list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH)
2. [What is Git? (GitHub Training & Guides)](https://youtu.be/uhtzxPU7Bz0?list=PLg7s6cbtAD165JTRsXh8ofwRw0PqUnkVH)
3. 

## 1. Introduktion
Inte nog med att du ska lära dig programmera i denna kurs, du kommer också att lära dig en mängd med verktyg som kommer att underlätta när vi utvecklar. I början kan detta kännas väldigt omständigt. Vi lovar dock att om tar tillfället i akt och lugnt och metodiskt arbetar igenom dessa guider och sedan följer de arbetsscheman vi satt upp för specifika uppgifter så kommer du att få en oerhört stabil grund att stå på inför dina programmeringsutmaningar. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/RyKpl19Ezis?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

## 2. Versionshantering med Git
Git är det versionshanteringssystem som vi kommer att använda för att spåra ändringar i vår kod och se till att vi alltid har möjlighet att backa tillbaka om vi gjort något fel. Att arbeta med versionshantering blir extra viktigt när du börjar arbeta i kodprojekt tillsammans med andra.

### Att göra
1. Installera git från [https://git-scm.com/](https://git-scm.com/)
2. Konfigurera git med avsenden på namn, epostadress
3. Se till att git sparar dina användaruppgifter så att du slipper logga in varje gång.

I [följande inspelning](https://youtu.be/iZYUfBR-DZM) går vi igenom ovanstående steg.
<iframe width="420" height="315" src="https://www.youtube.com/embed/iZYUfBR-DZM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

För en lite djupare genomgång av git rekommenderar vi följande resurser:
* [Try Git](https://try.github.io/levels/1/challenges/1) - GitHubs snabbgenomgång. Interaktiv träning.
* 

## 3. Applikationsmiljön Node.js
Node.js är den applikationsmiljö i vilken vi kommer att köra våra javascriptprogram. Du kanske tidigare känner till att javascript används på webbsidor och således körs i användarens webbläsare. I denna kurs kommer vi dock att exekvera våra program utanför webbläsaren och Node.js är det verktyg vi kommer att använda för att göra detta.
NPM (Node Package Manager) hjälper oss att hålla reda på yttre beroenden i våra applikationer/program. Det finns väldigt mycket moduler av färdig kod som vi kan använda oss av i våra program så att vi slipper uppfinna hjulet på nytt. Det är här npm kommer in i bilden och hjälper oss att hämta hem och underhålla dessa beroenden. 

### Att göra
1. Installera Node.js och npm

I [följande inspelning](https://youtu.be/lG-T8Ar6mDI) går vi igenom ovanstående steg.
<iframe width="420" height="315" src="https://www.youtube.com/embed/lG-T8Ar6mDI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

## 4. Webstorm IDE
Ett IDE (Integrated Developer Environment) är en utvecklingsmiljö för oss programmerare i vilken vi har tillgång till de verktyg som vi behöver när vi programmerar. Det finns mängder med olika utvecklingsmiljöer att välja på och i denna kurs har vi valt [Webstorm](https://www.jetbrains.com/webstorm/). Webstorm är en populär utvecklingsmiljö när man arbetar med javascriptapplikationer och som student har du [tillgång till miljön via ditt studentkonto hos LNU](https://www.jetbrains.com/webstorm/student).

### Att göra
1. Installera WebStorm
2. Konfigurera WebStorm terminalen så att den använder Git Bash
3. Göra inställningar för kodkvalitetsverktygen JSHint och JSCS

I [följande inspelning](https://youtu.be/WCzfV8LB6a0) går vi igenom ovanstående steg.
<iframe width="560" height="315" src="https://www.youtube.com/embed/WCzfV8LB6a0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

### Kommentarer
I klippet ovan så konfiguerar jag terminalen för att fungera i Windows. Om du sitter i OSX så kan du hoppa över detta steg eftersom bashterminalen är förvald i OSX. Mina inställningar ser ut så här om du råkat ändra:
![Terminalen i OSX](https://raw.githubusercontent.com/1dv021/syllabus/master/coursepress/guider/pic/osx_terminal.png)


## 5. Github
[Github](https://github.com) är en lagringsyta för våra applikationer som möjliggör sammarbete och ett effektivt arbetssätt. Du kommer att använda Github under stora delar av din utbildning så det är viktigt att du redan nu bekantar dig väl med tjänsten. Github erbjuder dessutom ett paket för studenter som innebär att du får tillgång till ett antal privata lagringsytor och även tillgång till externa verktyg. Har du redan ett konto på Github? Titta då på filmen nedan så beskriver vi hur du ska gå tillväga för att ansöka om GitHub Education Pack på det kontot. Du behöver inte skapa ett nytt för dina studier! 

Det finns även en [guide](https://coursepress.lnu.se/info/manual/kom-igang-med-github/) på CoursePress som kan vara vettig att läsa igenom.

### Att göra
1. Ditt konto på Github
 * Skapa ett nytt eller...
 * ...lägg till din studentepostadress till ett befintligt konto
2. Ansök om GitHub Educational Pack
3. Organisationen 1dv021
 * Bekanta dig med kursens [organisation](https://github.com/1dv021)
 * Godkänn din inbjudan till organisationen

I [följande inspelning](https://youtu.be/q058hV1sJEo) går vi igenom ovanstående steg.
<iframe width="420" height="315" src="https://www.youtube.com/embed/q058hV1sJEo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

### Resurser
Titta nu gärna igenom nedanstående föreläsning och se om du efter detta kan "forka" vårt repo 1dv021/syllabus och kanske rätta något stavfel eller bidra med något annat till kursens innehåll!
* [The Basics of Git and GitHub (Github Training)](https://youtu.be/U8GBXvdmHT4)

## 6. Hello, World!
Äntligen är det dags att skriva kod! Vi går igenom hur vi kan arbeta med laborationerna i kursen. 

### Att göra
1. Klona ditt laborationsrepo från Github
2. Kopiera in laborationsuppgifterna
3. Lös en uppgift

I [följande inspelning](https://youtu.be/yFzyCLC53iA) går vi igenom ovanstående steg.
<iframe width="420" height="315" src="https://www.youtube.com/embed/yFzyCLC53iA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
