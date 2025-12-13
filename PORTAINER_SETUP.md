# Konfiguracja w Portainerze - Pobieranie z GitHub

## Sposób 1: Stack z Git Repository (Zalecane)

1. **W Portainerze:**
   - Przejdź do **Stacks** → **Add stack**
   - Nazwa: `areklamowa`
   - **Build method**: Wybierz **Repository**
   - **Repository URL**: `https://github.com/TWOJE_USERNAME/TWOJE_REPO.git`
   - **Repository reference**: `main` (lub `master`)
   - **Compose path**: `docker-compose.yml`
   - Kliknij **Deploy the stack**

2. **Zaktualizuj docker-compose.yml w GitHub:**
   - Zmień `TWOJE_USERNAME` i `TWOJE_REPO` na rzeczywiste wartości
   - Lub użyj poniższego przykładu bezpośrednio w Portainerze

## Sposób 2: Webhook do automatycznej aktualizacji

1. **W Portainerze:**
   - Przejdź do **Stacks** → wybierz swój stack
   - Kliknij **Editor** → **Webhook**
   - Skopiuj **Webhook URL**

2. **W GitHub:**
   - Przejdź do: **Settings** → **Webhooks** → **Add webhook**
   - **Payload URL**: Wklej URL z Portainera
   - **Content type**: `application/json`
   - **Events**: Wybierz **Just the push event**
   - Kliknij **Add webhook**

Teraz przy każdym pushu do GitHub, Portainer automatycznie:
- Pobierze najnowsze zmiany
- Przebuduje obraz
- Zrestartuje kontener

## Przykładowy docker-compose.yml dla Portainera

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: https://github.com/TWOJE_USERNAME/TWOJE_REPO.git#main
      dockerfile: Dockerfile
    
    container_name: areklamowa-prod
    ports:
      - "8080:80" 
    restart: unless-stopped
```

**WAŻNE:** Zamień `TWOJE_USERNAME` i `TWOJE_REPO` na rzeczywiste wartości!

