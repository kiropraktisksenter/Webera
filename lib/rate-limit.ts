// Enkel rate limit i minnet, per IP. På Vercel lever minnet per
// serverless-instans, så dette stopper grov spam, ikke en bestemt angriper.

type Vindu = { start: number; antall: number };

export function lagRateLimit(maks: number, vinduMs: number) {
  const treff = new Map<string, Vindu>();

  return function erBegrenset(nokkel: string): boolean {
    const na = Date.now();

    if (treff.size > 5000) {
      for (const [k, v] of treff) if (na - v.start > vinduMs) treff.delete(k);
    }

    const vindu = treff.get(nokkel);
    if (!vindu || na - vindu.start > vinduMs) {
      treff.set(nokkel, { start: na, antall: 1 });
      return false;
    }
    vindu.antall += 1;
    return vindu.antall > maks;
  };
}

export function klientIp(request: Request): string {
  const videresendt = request.headers.get('x-forwarded-for');
  if (videresendt) return videresendt.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'ukjent';
}
