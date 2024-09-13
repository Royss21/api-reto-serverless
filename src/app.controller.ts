import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller('app')
export class AppController {
  constructor() {}

  @Get()
  running(): string {
    return 'App running successfully...';
  }
}
