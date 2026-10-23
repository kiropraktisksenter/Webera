import { loadFont } from "@remotion/fonts";
import {
  AbsoluteFill,
  Composition,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

// Lokal kopi av Schibsted Grotesk (variabel, 400–900), så renderingen ikke trenger nett.
const fontFamily = "Schibsted Grotesk";
loadFont({
  family: fontFamily,
  url: staticFile("SchibstedGrotesk.woff2"),
  weight: "400 900",
});

// Samme tokens som webera.no (lys modus)
const PAPIR = "#FAFAF7";
const FLATE = "#FFFFFF";
const BLEKK = "#1B2A2A";
const DEMPET = "#56615F";
const GRANSKOG = "#1E4A3D";
const MYNTE = "#E5F0EA";
const KANT = "#7A8583";
const MERKEPENN = "#FFE066";

const IDE = "Vi svarer på de samme spørsmålene fra kunder hver eneste dag.";

const FPS = 30;
const VARIGHET = 9 * FPS;

const klamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

const myk = Easing.bezier(0.16, 1, 0.3, 1);

export const IdeTilLosning: React.FC = () => {
  const frame = useCurrentFrame();

  // Skriving: 12–100, ett tegn per ~1,4 bilde
  const antallTegn = Math.round(
    interpolate(frame, [12, 100], [0, IDE.length], klamp),
  );
  const skrevet = IDE.slice(0, antallTegn);
  const markorSynlig = frame < 112 && Math.floor(frame / 8) % 2 === 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PAPIR,
        fontFamily,
        color: BLEKK,
        // Hele bildet toner ut til papir på slutten, så loopen blir sømløs
        opacity: interpolate(frame, [VARIGHET - 14, VARIGHET - 1], [1, 0], klamp),
      }}
    >
      {/* Mynteglød øverst til høyre, som på nettsiden */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(900px 520px at 100% 0%, ${MYNTE}, transparent 70%)`,
        }}
      />

      {/* Idékortet */}
      <div
        style={{
          position: "absolute",
          left: 96,
          top: 110,
          width: 1088,
          transformOrigin: "0% 0%",
          scale: interpolate(frame, [130, 165], [1, 0.52], {
            ...klamp,
            easing: myk,
          }),
          translate: interpolate(frame, [130, 165], ["0px 0px", "0px 150px"], {
            ...klamp,
            easing: myk,
          }),
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 20,
            opacity: interpolate(frame, [0, 10], [0, 1], klamp),
          }}
        >
          Hva vil du lage?
        </div>
        <div
          style={{
            background: FLATE,
            border: `2px solid ${KANT}`,
            borderRadius: 22,
            padding: "34px 40px",
            minHeight: 260,
            boxShadow: "0 2px 4px rgba(22,58,48,0.06), 0 24px 60px -16px rgba(22,58,48,0.25)",
            fontSize: 58,
            fontWeight: 500,
            lineHeight: 1.35,
          }}
        >
          {/* Merkepenn-sveip: samme gradient som idéfeltet på nettsiden */}
          <span
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 55%, ${MERKEPENN} 55%, ${MERKEPENN} 92%, transparent 92%)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: interpolate(frame, [102, 126], ["0% 100%", "100% 100%"], {
                ...klamp,
                easing: myk,
              }),
              WebkitBoxDecorationBreak: "clone",
              boxDecorationBreak: "clone",
            }}
          >
            {skrevet}
          </span>
          <span
            style={{
              display: "inline-block",
              width: 4,
              height: 62,
              marginLeft: 4,
              verticalAlign: "-10px",
              background: GRANSKOG,
              opacity: markorSynlig ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* Pilen mellom idé og løsning */}
      <div
        style={{
          position: "absolute",
          left: 690,
          top: 318,
          fontSize: 84,
          fontWeight: 800,
          color: GRANSKOG,
          opacity: interpolate(frame, [158, 172], [0, 1], klamp),
          translate: interpolate(frame, [158, 176], ["-30px 0px", "0px 0px"], {
            ...klamp,
            easing: myk,
          }),
        }}
      >
        →
      </div>

      {/* Løsningen: en enkel AI-assistent */}
      <div
        style={{
          position: "absolute",
          left: 800,
          top: 96,
          width: 384,
          height: 420,
          borderRadius: 34,
          background: FLATE,
          border: `2px solid ${KANT}`,
          boxShadow: "0 2px 4px rgba(22,58,48,0.06), 0 30px 70px -20px rgba(22,58,48,0.35)",
          overflow: "hidden",
          opacity: interpolate(frame, [164, 180], [0, 1], klamp),
          scale: interpolate(frame, [164, 196], [0.9, 1], {
            ...klamp,
            easing: Easing.spring({ damping: 14 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            background: GRANSKOG,
            color: FLATE,
            padding: "22px 26px",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          Spør oss
        </div>
        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              alignSelf: "flex-end",
              maxWidth: "80%",
              background: MYNTE,
              borderRadius: 18,
              padding: "14px 18px",
              fontSize: 26,
              lineHeight: 1.3,
              opacity: interpolate(frame, [186, 196], [0, 1], klamp),
              translate: interpolate(frame, [186, 198], ["0px 16px", "0px 0px"], {
                ...klamp,
                easing: myk,
              }),
            }}
          >
            Kan dere levere neste uke?
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "85%",
              background: PAPIR,
              border: `1px solid ${MYNTE}`,
              borderRadius: 18,
              padding: "14px 18px",
              fontSize: 26,
              lineHeight: 1.3,
              opacity: interpolate(frame, [204, 214], [0, 1], klamp),
              translate: interpolate(frame, [204, 216], ["0px 16px", "0px 0px"], {
                ...klamp,
                easing: myk,
              }),
            }}
          >
            Ja, det går fint. Vil du sende en forespørsel?
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              background: GRANSKOG,
              color: FLATE,
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 24,
              fontWeight: 700,
              opacity: interpolate(frame, [220, 230], [0, 1], klamp),
            }}
          >
            Send forespørsel
          </div>
        </div>
      </div>

      {/* Avslutningen */}
      <div
        style={{
          position: "absolute",
          left: 96,
          bottom: 80,
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          opacity: interpolate(frame, [176, 192], [0, 1], klamp),
          translate: interpolate(frame, [176, 196], ["0px 24px", "0px 0px"], {
            ...klamp,
            easing: myk,
          }),
        }}
      >
        Fra idé til ferdig løsning.
        <div style={{ fontSize: 30, fontWeight: 500, color: DEMPET, letterSpacing: 0, marginTop: 10 }}>
          webera.no
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const MyComposition = () => {
  return (
    <Composition
      id="IdeTilLosning"
      component={IdeTilLosning}
      durationInFrames={VARIGHET}
      fps={FPS}
      width={1280}
      height={720}
    />
  );
};
