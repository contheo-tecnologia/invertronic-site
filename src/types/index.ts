export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Solution {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  category: 'elevacao' | 'acionamentos' | 'automacao' | 'paineis';
  highlights: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface HeroSlide {
  id: number;
  tagline: string;
  titleLight: string;
  titleBold: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  bgGradient: string;
  bgImage: string;
  techBadges: string[];
}

export interface Segment {
  id: string;
  name: string;
  description: string;
  icon: string;
  applications: string[];
  image: string;
}
