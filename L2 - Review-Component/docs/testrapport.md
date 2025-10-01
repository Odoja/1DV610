# Testrapport - Review Component

## Testmetod

Komponenten har testats manuellt genom att integrera den i en TestApp med backend och databas.

### Testmiljö
- **Webbläsare:** Chrome

### Testförfarande
1. Starta TestApp med `npm run dev`
2. Öppna localhost
3. Utför testfall enligt tabellen nedan
4. Verifiera utdata visuellt i webbläsaren och i MongoDB-databasen

## Testresultat

| Vad som testats | Hur det testats | Testresultat |
|----------------|-----------------|--------------|
| **Komponentinitialisering** | Ladda sidan och se så att komponenten renderas korrekt med formulär, ( + kommentatorsfält om recensioner har lags till) | ✅ |
| **Stjärnbetyg - Klick** | Klicka på varje stjärna (1-5) och verifiera att rätt antal stjärnor fylls i | ✅ |
| **Stjärnbetyg - Hover** | För muspekaren över stjärnorna och se så att de temporärt fylls när musen är över dem | ✅ |
| **Stjärnbetyg - Mouse leave** | För musen över stjärnor och sedan bort, se så att endast de klickade stjärnorna förblir ifyllda | ✅ |
| **Formulärvalidering - Tomma fält** | Försök skicka formulär utan att fylla i namn | ✅ |
| **Formulärvalidering - Tom recension** | Försök skicka formulär utan att fylla i recensionstext | ✅ |
| **Formulärvalidering - Inget betyg** | Försök skicka formulär utan att fylla i stjärnbetyg | ✅ |
| **Skapa recension** | Fyll i namn "Test User", recension "Great product", välj 5 stjärnor och klicka "Send" | ✅ |
| **Formulärrensning** | Tryck på submit, se så att formulärfält töms och stjärnbetyg nollställs | ✅ |
| **Visa recensioner** | Ladda sidan och se så att befintliga recensioner från databasen visas | ✅ |
| **Sorterings alternativ - Dölj när tom** | När du startar sidan eller har tömt databasen på recensioner och laddat om sidan ska soretingen inte synas | ✅ |
| **Sorterings alternativ - Visa med data** | Skriv en recension | ✅ |
| **Sortering - Newest Reviews** | Skapa 3 recensioner, välj "Newest Reviews", se så att den första recensionen du skrev är längst ner | ✅ |
| **Sortering - Oldest Reviews** | Välj "Oldest Reviews", se så att recensionerna hamnar i omvänd ordning, se så att den du skrev först är lägnst upp | ✅ |
| **Sortering - Highest Rating** | Skapa recensioner med olika betyg (1-5 stjärnor), välj "Highest Rating", se så att posterna med högst rating hamnar högst upp | ✅ |
| **Sortering - Lowest Rating** | Välj "Lowest Rating", se så att posterna med lägst rating hamnar högst upp| ✅ |
| **API-felhantering - GET** | Stoppa kopplingen till mongoDB/databasen, öppna eller ladda om sidan om den redan är öppen, inga recensioner ska visas | ✅ |
| **API-felhantering - POST** | Stoppa kopplingen till mongoDB/databasen, försök skicka recension, formulär ska inte rensas samt Error-meddelande i consolen efter ett tag  | ✅ |
| **Whitespace-hantering** | Skicka recension med extra mellanslag före/efter text i namn och recensionsfält | ✅ |
| **Multipla recensioner** | Skapa 10+ recensioner och se så att alla finns där genom att scrolla ner | ✅ |