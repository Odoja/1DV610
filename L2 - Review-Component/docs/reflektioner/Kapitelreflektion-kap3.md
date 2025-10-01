# Kapitelreflektion kap 3

Som föregående kapitel finns det saker jag håller med om men inte i närheten av lika mycket. Jag förstår logiken i att dela upp koden så mycket som möjligt så att varje metod bara gör en sak och man har flera små byggstenar som går ihop till något större.

Problemet för mig är att läsförståelsen av koden minskas när en metod består av t.ex. 4 andra metoder som initieras, och dessa metoder består av ytterligare metoder som sedan innehåller själva koden. Det är lite som inception, "A dream, within a dream, within a dream" och blir snabbt väldigt komplext. Det är i viss mån lättare att läsa en metod med kod som gör flera saker, så länge koden inte är alldeles för lång! En metod på t.ex. 30 rader där man ser hela flödet kan ha bättre understandability än samma logik fördelad på åtta tvåradiga funktioner spridda över flera filer.

Men till varje scenario finns alltid undantag, det är alltid en balansgång då människor är olika. Det finns flera frågor jag tror man måste ställa sig själv, men några är; "Vem ska läsa det här?", "Vad vill jag prioritera med min kod att förstå eller underhålla?", och kanske "Gör denna uppdelning koden bättre, eller följer jag bara en regel?" Svaren varierar nog beroende på situation, teamet och projekt, och det är kanske just den insikten som är mest värdefull att ta med sig från kapitlet.
