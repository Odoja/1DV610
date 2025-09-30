# Test App

En enkel testapplikation.

## Installation och uppsättning

### Förutsättningar

- Node.js installerat
- MongoDB installerat och körande lokalt

### Steg för steg

1. **Installera beroenden**
   ```bash
   npm install
   ```

2. **Skapa miljövariabler**
   
   Skapa en `.env` fil i projektets rotmapp med följande innehåll:
   ```env
   # Databas
   DB_CONNECTION_STRING="mongodb://localhost:27017/Test"

   # Session
   SESSION_SECRET="din-hemliga-session-nyckel"

   # PORT
   PORT=8083

   # Base_URL
   BASE_URL="/"
   ```

3. **Starta applikationen**
   ```bash
   npm run dev
   ```

Applikationen körs nu på `http://localhost:8083`

## Anmärkningar

- Se till att MongoDB är igång innan du startar applikationen
- Standardporten är 8083, men kan ändras i `.env` filen