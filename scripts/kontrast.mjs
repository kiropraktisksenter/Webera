// Sjekker WCAG-kontrast for designtokens i app/globals.css.
// Kjør: node scripts/kontrast.mjs
const L=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=0.03928?v/12.92:((v+0.055)/1.055)**2.4);return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]};
const r=(a,b)=>{const x=L(a),y=L(b);return ((Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)).toFixed(2)};
const sets={lys:{papir:'#FAFAF7',flate:'#FFFFFF',blekk:'#1B2A2A',dempet:'#56615F',granskog:'#1E4A3D',merkepenn:'#FFE066',feil:'#B3261E',kant:'#7A8583',pa:'#FFFFFF'},
mork:{papir:'#171C1B',flate:'#202726',blekk:'#EEF1EF',dempet:'#A9B3B0',granskog:'#7FC4AC',merkepenn:'#6B5A12',feil:'#F2B8B5',kant:'#7D8885',pa:'#171C1B'}};
for(const [n,s] of Object.entries(sets)){console.log('--',n);
for(const f of ['blekk','dempet','granskog','feil']) for(const b of ['papir','flate']) console.log(f,'på',b,r(s[f],s[b]));
console.log('blekk på merkepenn',r(s.blekk,s.merkepenn));console.log('pa-granskog på granskog',r(s.pa,s.granskog));
console.log('kant mot papir/flate',r(s.kant,s.papir),r(s.kant,s.flate));console.log('granskog(fokus) mot flate',r(s.granskog,s.flate));}
