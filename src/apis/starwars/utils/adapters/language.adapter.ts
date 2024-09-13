import { peopleAdapterPortugues } from './portugues';
import {
  peopleAdapterSpanish,
  planetAdapterSpanish,
  swapiResponseAdapterSpanish,
} from './spanish';

export const languageAdapter = {
  people: {
    es: peopleAdapterSpanish,
    bz: peopleAdapterPortugues,
  },
  planets: {
    es: planetAdapterSpanish,
  },
  swapiResponse: {
    es: swapiResponseAdapterSpanish,
  },
};
