# Instrukcja: Jak wrzucić projekt na GitHub

## Krok 1: Stwórz repozytorium na GitHub.com

1. Zaloguj się na [GitHub.com](https://github.com)
2. Kliknij przycisk **"+"** w prawym górnym rogu
3. Wybierz **"New repository"**
4. Wypełnij formularz:
   - **Repository name**: `agencja-reklamowa` (lub dowolna nazwa)
   - **Description**: "Strona internetowa agencji reklamowej - reklama w autobusach"
   - **Visibility**: Wybierz Public lub Private
   - **NIE zaznaczaj** "Initialize this repository with a README" (już mamy pliki)
   - **NIE zaznaczaj** "Add .gitignore" (już mamy)
   - **NIE zaznaczaj** "Choose a license"
5. Kliknij **"Create repository"**

## Krok 2: Połącz lokalne repozytorium z GitHubem

Po utworzeniu repozytorium, GitHub pokaże Ci instrukcje. Użyj tych komend:

```bash
# Dodaj remote (zastąp USERNAME swoją nazwą użytkownika GitHub)
git remote add origin https://github.com/USERNAME/agencja-reklamowa.git

# Zmień nazwę głównej gałęzi na main (jeśli potrzeba)
git branch -M main

# Wyślij kod na GitHub
git push -u origin main
```

## Alternatywnie: Przez SSH (jeśli masz skonfigurowany klucz SSH)

```bash
git remote add origin git@github.com:USERNAME/agencja-reklamowa.git
git branch -M main
git push -u origin main
```

## Krok 3: Weryfikacja

Po wykonaniu `git push`, odśwież stronę repozytorium na GitHubie - powinny pojawić się wszystkie pliki projektu.

## Uwagi

- Jeśli GitHub poprosi o autoryzację, użyj swojego hasła lub tokena dostępu
- Jeśli używasz 2FA, musisz użyć Personal Access Token zamiast hasła
- Folder `node_modules` i `dist` są w `.gitignore` - nie będą wrzucone (to dobrze!)

## Dodatkowe komendy Git

```bash
# Sprawdź status
git status

# Zobacz historię commitów
git log

# Dodaj zmiany i wyślij
git add .
git commit -m "Opis zmian"
git push
```

