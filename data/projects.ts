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
    logo: '/logos/servitc.svg',
    link: 'https://www.servitc.cl',
    slug: 'servitc',
  },
  {
    title: '1WS',
    description:
      'Agencia de marketing digital y desarrollo web.',
    logo: '/logos/1ws.svg',
    link: 'https://www.1ws.cl',
    slug: '1ws',
  },
  {
    title: 'Trekly',
    description:
      'Una plataforma para compartir y descubrir rutas de trekking.',
    logo: '/logos/trekly.svg',
    link: 'trekly.1ws.cl',
    slug: 'trekly',
  },
  {
    title: 'Finance Calculator',
    description:
      'Calculadora de finanzas para calcular el costo de un crédito e inversiones.',
    logo: '/logos/finance.svg',
    link: 'https://github.com/tamybl/finance-calculator',
    slug: 'finance-calculator'
  },
  {
    title: 'Bralishop',
    description:
      'Las mejores comparativas en productos de tecnología y hogar.',
    logo: '/logos/bralishop.svg',
    link: 'https://www.bralishop.com',
    slug: 'bralishop'
  },
];
