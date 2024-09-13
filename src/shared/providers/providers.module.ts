import { Module } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { SwapiProviderService } from './swapi/swapi-provider.service';
@Module({
  imports: [HttpModule],
  providers: [SwapiProviderService],
  exports: [SwapiProviderService],
})
export class ProvidersModule {}
