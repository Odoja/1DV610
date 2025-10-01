# Reflektion över egen kodkvalitet

Jag skulle nog klassa min namngivning i mitten, vissa är jag nöjd med medans andra vill jag ändra. Jag har undvikit förkortningar och "cute" namn. Metodnamn som **ratingSetup()**, **displayReviews()**, och **renderReviews()** är tydliga och intention reavling. Jag är dock inte konsekvent med alla review metoder då jag har döpt vissa till "comment", vilket bryter mot **Pick One Word per Concept**. Detta kommer jag åtgärda till L3.

Mina "filter" metoder är jag mer okej med då jag kan göra kopplingen filter-sortering, för mig är det i princip samma sak. Jag filtrerar efter en parameter vilket är sortering i min värld. Men **commentFilter()** som sorterar reviews kan dock vara ett namn som kräver mental mapping för andra som inte det på samma sätt som jag.

Många av mina metoder kan förbättras, särskilt när det komemr till **Do One Thing**. Även om jag gillar att ha lite längre metoder för understandability känner jag att jag kan göra hjälpmetoder med bra nog namngivning för att riskera kodens förståelighet. I **renderReviews()** kan jag t.ex. hjälpmetoder som **createUsername()**, eller **createReview()**. och kalla på dem istället för att skapa elementen och sätta textcontent. Detta öppnar upp för att jag kan använda dessa hjälpmetoder på andra ställen om det skulle behövas, vilket är att jobba med **DRY**. Jag skulle dessutom vilja göra min fetch request till en egen metod också i **DRY** syfte, då jag gör samma request på flera ställen.

Jag har redan placerat querySelectors i constructorn för att minska upprepning då jag kallar dessa på flera olika ställen, vilket redan är ett steg i rätt riktning. Men det finns som smagt mycket mer att göra.

