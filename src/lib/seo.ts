type MetaArgs = { title?: string; description?: string; canonical?: string; image?: string; };
export const defaultSEO = {
  title: 'FlyFPVCali — FPV Racing Club',
  description: 'Velocidad, precisión y adrenalina. Carreras FPV en Cali. Únete a FlyFPVCali.',
  image: '/og-image.png',
  canonical: 'https://flyfpvcali.example.com'
};
export function buildMeta(args: MetaArgs = {}) {
  const meta = { ...defaultSEO, ...args };
  return meta;
}
