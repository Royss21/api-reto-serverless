import { Injectable } from '@nestjs/common';
import { IStarwarsService } from './startwars.service.interface';
import { SwapiProviderService } from 'src/shared/providers/swapi';
import { translatePropsToLanguage } from '../utils/translate-props-to-language.util';

@Injectable()
export class StarwarsService implements IStarwarsService {
  constructor(private readonly _employeeRepository: SwapiProviderService) {}

  async getAllPeople(): Promise<any> {
    const peoples = await this._employeeRepository.getAllPeople();
    return translatePropsToLanguage(peoples, 'people', 'es');
  }

  async getAllPlanet(): Promise<any> {
    const planets = await this._employeeRepository.getAllPlanet();
    return translatePropsToLanguage(planets, 'planets', 'es');
  }
}
