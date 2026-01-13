# Webera Preview System

Dette systemet lar deg raskt lage preview-nettsider for potensielle kunder.

## Hvordan legge til en ny preview

### 1. Åpne `previews.json` og legg til en ny kunde:

```json
{
  "kundenavn": {
    "businessName": "Bedriftsnavn AS",
    "industry": "Bransje (f.eks. Advokat, Restaurant, Tannlege)",
    "tagline": "Hovedoverskrift på forsiden",
    "description": "Beskrivelse under overskriften",
    "colors": {
      "primary": "#0891b2",
      "secondary": "#06b6d4",
      "accent": "#6366f1"
    },
    "logo": "/images/logo.svg",
    "heroImage": "https://images.unsplash.com/photo-xxx?w=1200&q=80",
    "sections": [
      {
        "title": "Seksjonsoverskrift",
        "items": [
          {
            "icon": "💼",
            "title": "Tjeneste 1",
            "description": "Beskrivelse av tjenesten"
          }
        ]
      }
    ],
    "cta": {
      "text": "Kontakt oss",
      "subtext": "Ta kontakt for en uforpliktende samtale"
    }
  }
}
```

### 2. Preview vil være tilgjengelig på:
```
https://webera.no/preview/kundenavn
```

## Tips for rask tilpasning:

### Farger
Bruk kundens eksisterende profil eller velg fra deres nettsider/sosiale medier.

**Verktøy:**
- Unsplash for bilder: https://unsplash.com
- Coolors for fargepaletter: https://coolors.co
- Chrome color picker: Høyreklikk → Inspiser element → Color picker

### Bilder
- Unsplash har gratis, høykvalitets bilder
- Søk på industri: "office", "restaurant", "construction", etc.
- Kopier bilde-URL (høyreklikk → Copy image address)

### Emojis
Enkle ikoner som fungerer overalt:
- 💼 Business
- 🏗️ Bygg
- 🍽️ Restaurant
- ⚖️ Advokat
- 🏥 Helse
- 🔧 Håndverk
- 📊 Konsulent
- 🚗 Transport
- 🏠 Eiendom

## Eksempel på rask tilpasning (5-10 minutter):

1. **Snakk med kunden** → noter ned:
   - Bedriftsnavn
   - Hva de gjør (1 setning)
   - 3 hovedtjenester
   - Eksisterende farger (hvis de har)

2. **Finn bilde** → Unsplash.com → søk på bransje → kopier URL

3. **Velg farger** → Hvis de ikke har profil, bruk:
   - Profesjonell: `#0891b2` (cyan)
   - Kreativ: `#8b5cf6` (purple)
   - Trygg/seriøs: `#1e40af` (blue)
   - Moderne: `#06b6d4` (light cyan)

4. **Oppdater JSON** → Lim inn info → Lagre

5. **Test** → Gå til `webera.no/preview/kundenavn`

6. **Send til kunde** → "Her er et raskt konsept på hvordan forsiden kan bli"

## Beste praksis:

✅ **Gjør:**
- Hold det enkelt (3-4 seksjoner)
- Bruk kundens faktiske info
- Velg relevante bilder
- Test på mobil også

❌ **Ikke:**
- Lag komplett nettside (det er previews)
- Bruk for mye tid per preview (maks 1-2 timer)
- Send preview uten å ha snakket med kunden først
- Love at preview = ferdig nettside

## Timebruk:

- **Første gang:** 1-2 timer (lære systemet)
- **Etter hvert:** 30-60 minutter per preview
- **Når du er rask:** 15-30 minutter

## Når bruke preview:

✅ **Bruk preview for:**
- Seriøse leads som har snakket med deg
- Kunder med budsjett over 15.000,-
- Når kunden sier "jeg er usikker på hvordan det blir"
- For å skille deg fra konkurrenter

❌ **Ikke bruk preview for:**
- Generelle henvendelser uten samtale
- Folk som bare vil ha "tilbud"
- Når kunden allerede er solgt
- Lavbudsjett-leads som bare vil ha billigst

## Neste steg:

Når preview er godkjent:
1. Kunde signerer avtale
2. Du starter full utvikling
3. Preview blir utgangspunkt for design
