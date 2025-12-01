# Strona Internetowa Agencji Reklamowej

Nowoczesna, responsywna strona internetowa dla agencji reklamowej specjalizującej się w reklamie w transporcie publicznym.

## 🚀 Funkcjonalności

- **Responsywny Design**: Mobile-first approach, działa na wszystkich urządzeniach
- **Animacje**: Płynne animacje przy scrollowaniu dzięki Framer Motion
- **SEO Friendly**: Zoptymalizowana pod kątem wyszukiwarek
- **Nowoczesny UI**: Profesjonalny design z Tailwind CSS
- **Formularz Kontaktowy**: Z walidacją i obsługą błędów
- **Portfolio**: Interaktywna galeria z filtrowaniem
- **FAQ**: Sekcja z najczęściej zadawanymi pytaniami

## 🛠️ Technologie

- **React 19** - Framework UI
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Stylowanie
- **Framer Motion** - Animacje
- **React Icons** - Ikony
- **Vite** - Build tool

## 📦 Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Zbuduj wersję produkcyjną
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

## 📁 Struktura Projektu

```
src/
├── components/          # Komponenty React
│   ├── Header.tsx      # Nawigacja
│   ├── Hero.tsx        # Sekcja główna
│   ├── About.tsx       # O nas
│   ├── Services.tsx    # Usługi
│   ├── Coverage.tsx    # Zasięg geograficzny
│   ├── Why.tsx         # Dlaczego reklama w autobusach
│   ├── Portfolio.tsx   # Portfolio
│   ├── HowItWorks.tsx  # Jak to działa
│   ├── Pricing.tsx     # Cennik
│   ├── Testimonials.tsx # Opinie klientów
│   ├── FAQ.tsx         # Najczęściej zadawane pytania
│   ├── Contact.tsx     # Kontakt
│   └── Footer.tsx      # Stopka
├── App.tsx             # Główny komponent
├── main.tsx            # Punkt wejścia
└── index.css           # Globalne style
```

## 🎨 Sekcje Strony

1. **Header/Navbar** - Sticky nawigacja z menu mobilnym
2. **Hero** - Efektowna sekcja główna ze statystykami
3. **O Nas** - Informacje o agencji i wartościach
4. **Usługi** - Karty z oferowanymi usługami
5. **Zasięg** - Mapa zasięgu i statystyki powiatów
6. **Dlaczego** - Argumenty za reklamą w autobusach
7. **Portfolio** - Galeria realizacji z filtrowaniem
8. **Jak to Działa** - Proces współpracy w 5 krokach
9. **Cennik** - Pakiety usług
10. **Opinie** - Testimoniale klientów
11. **FAQ** - Najczęściej zadawane pytania
12. **Kontakt** - Formularz kontaktowy i dane
13. **Footer** - Linki i informacje

## 🔧 Konfiguracja

### Zmiana kolorów

Edytuj plik `tailwind.config.js` aby zmienić paletę kolorów:

```javascript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### SEO

Meta tagi znajdują się w pliku `index.html`. Zaktualizuj:
- Title
- Description
- Keywords
- Author

## 📱 Responsywność

Strona jest w pełni responsywna z breakpointami:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Przeciągnij folder dist do Netlify
```

### Inne platformy
Zbuduj projekt i wdróż folder `dist` na wybraną platformę.

## 📝 Uwagi

- Obrazy w Portfolio są placeholderami z Unsplash - zastąp je własnymi
- Formularz kontaktowy wymaga backendu do obsługi wysyłki
- Linki do social media są placeholderami - zaktualizuj je
- Dane kontaktowe są przykładowe - zaktualizuj je

## 📄 Licencja

Projekt stworzony dla agencji reklamowej.
