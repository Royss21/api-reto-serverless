import { IPeople, ISwapiResponse } from 'src/shared/providers/swapi/interfaces';
import {
  peopleAdapterSpanish,
  planetAdapterSpanish,
  swapiResponseAdapterSpanish,
} from './adapters/spanish';
import { peopleAdapterPortugues } from './adapters/portugues';
import { NotFoundException } from '@nestjs/common';
import { languageAdapter } from './adapters/language.adapter';


export const translatePropsToLanguage = (
  data: ISwapiResponse<any>,
  entity: string,
  language: string,
) => {
  if (!languageAdapter.hasOwnProperty(entity))
    throw new NotFoundException(
      `No se ha encontrado la configuracion de los datos a traducir`,
    );

  if (!languageAdapter[entity].hasOwnProperty(language))
    throw new NotFoundException(
      `No se ha encontrado la configuracion del idioma a traducir`,
    );

  const adapterSwapi = languageAdapter.swapiResponse[language];
  const adapterResult = languageAdapter[entity][language];
  const swapiResponseTranslated = Object.keys(data).reduce(
    (acc: {}, el: string): { [x: string]: any } => {
      return {
        ...acc,
        [adapterSwapi[el] || el]: adapterProp(data[el], adapterResult),
      };
    },
    {},
  );

  return swapiResponseTranslated;
};

const adapterProp = (property: any, adapter: Record<string, string>): any => {
  if (Array.isArray(property)) {
    return property.map((prop) => adapterProp(prop, adapter));
  } else if (typeof property === 'object' && property !== null) {
    return Object.keys(property).reduce(
      (acc: {}, el: string): { [x: string]: any } => {
        return {
          ...acc,
          [adapter[el] || el]: property[el],
        };
      },
      {},
    );
  } else return property;
};
