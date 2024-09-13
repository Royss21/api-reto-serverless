import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StarwarsService } from '../services/startwars.service';
import { IStarwarsService } from '../services/startwars.service.interface';

@ApiTags('Starwars')
@Controller('starwars')
export class StarwarsController {
  constructor(
    @Inject(StarwarsService)
    private readonly _starwarsService: IStarwarsService,
  ) {}

  @Get('peoples')
  getAllPeoples() {
    return this._starwarsService.getAllPeople();
  }

  @Get('planets')
  getAllPlanets() {
    return this._starwarsService.getAllPlanet();
  }
}
