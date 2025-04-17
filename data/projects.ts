export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'SERVITC',
    description:
      'Tienda virtual para la venta de productos y servicios de mantenimiento industrial.',
    logo: 'images/projects/servitc.svg',
    link: 'https://www.servitc.cl',
    slug: 'servitc',
  },
  {
    title: 'Banchile Inversiones',
    description:
      'Portal web para la gestión y educación en inversiones.',
    logo: 'images/projects/banchile.svg',
    link: 'https://sitiospublicos.bancochile.cl/banchileinversiones/',
    slug: 'banchile-inversiones',
  },
  {
    title: '1WS',
    description:
      'Agencia de marketing digital y desarrollo web.',
    logo: 'images/projects/logo-1ws.svg',
    link: 'https://www.1ws.cl',
    slug: '1ws',
  },
  {
    title: 'Trekkly',
    description:
      'Una plataforma para compartir y descubrir rutas de trekking de Chile y el mundo.',
    logo: 'images/projects/trekkly.svg',
    link: 'https://trekkly.1ws.cl',
    slug: 'trekly',
  },
  {
    title: 'Finance Calculator',
    description:
      'Calculadora de finanzas para calcular el costo de un crédito e inversiones.',
    logo: 'images/projects/finance.svg',
    link: 'https://github.com/tamybl/finance-calculator',
    slug: 'finance-calculator'
  },
  {
    title: 'Bralishop',
    description:
      'Las mejores comparativas en productos de tecnología, belleza y hogar.',
    logo: 'images/projects/bralishop.svg',
    link: 'https://www.bralishop.com',
    slug: 'bralishop'
  },
];
