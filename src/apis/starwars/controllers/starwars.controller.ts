import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StarwarsService } from '../services/startwars.service';

@ApiTags('Starwars')
@Controller('starwars')
export class StarwarsController {
  constructor(private readonly _starwarsService: StarwarsService) {}

  @Get('peoples')
  getAllPeoples() {
    return this._starwarsService.getAllPeople();
  }

  @Get('planets')
  getAllPlanets() {
    return this._starwarsService.getAllPlanet();
  }
}
