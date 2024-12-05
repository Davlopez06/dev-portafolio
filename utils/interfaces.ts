import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface social {
  name: string;
  value: string;
  icon: StaticImport | string;
}

interface socialMedia {
  url: string;
  icon: StaticImport | string;
}

export interface MeCardProps {
  job: string;
  name: string;
  social: Array<social>;
  socialMedia: Array<socialMedia>;
}

export interface NavItems {
  label: string;
  value: string;
}

interface DoingCard {
  icon: StaticImport | string;
  title: string;
  subtitle: string;
}

interface RecomendedCard {
  name: string;
  recomended: string;
}

export interface AboutConfig {
  title: string;
  description: string;
  doingCard: Array<DoingCard>;
  recomendedCard: Array<RecomendedCard>;
}
