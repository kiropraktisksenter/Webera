# Animasjonen «Fra idé til ferdig løsning»

Remotion-prosjekt for den korte animasjonen i «Slik fungerer det» på webera.no.
Nettsiden bruker bare de ferdige filene i `../public/video/`. Denne mappen bygges ikke av Vercel.

```bash
cd video
npm i
npx remotion studio            # forhåndsvisning
# Render (bruk --browser-executable hvis Chrome ikke kan lastes ned):
npx remotion render IdeTilLosning ../public/video/ide-til-losning.mp4 --codec=h264 --crf=30
npx remotion still IdeTilLosning ../public/video/ide-til-losning.jpg --frame=235 --image-format=jpeg
```

Komposisjonen ligger i `src/Composition.tsx`. Fonten (Schibsted Grotesk) ligger lokalt i `public/`.
