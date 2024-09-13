import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { envs } from 'src/config';
import { IPeople, IPlanet, ISwapiResponse } from './interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SwapiProviderService {
  private readonly baseUrl = envs.apiUrlSwapi;
  constructor(private readonly _swapi: HttpService) {}

  async getAllPeople(): Promise<ISwapiResponse<IPeople[]>> {
    const response = await firstValueFrom(
      this._swapi.get<ISwapiResponse<IPeople[]>>(`${this.baseUrl}/people`),
    );
    const peoples = response.data;
    return peoples;
  }

  async getAllPlanet(): Promise<ISwapiResponse<IPlanet[]>> {
    const response = await firstValueFrom(
      this._swapi.get<ISwapiResponse<IPlanet[]>>(`${this.baseUrl}/planets`),
    );
    const planets = response.data;
    return planets;
  }
}
