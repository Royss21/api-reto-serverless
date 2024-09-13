import { Module } from '@nestjs/common';
import { ProvidersModule } from 'src/shared/providers/providers.module';
import { StarwarsController } from './controllers/starwars.controller';
import { StarwarsService } from './services/startwars.service';

@Module({
  controllers: [StarwarsController],
  providers: [StarwarsService],
  imports: [ProvidersModule],
})
export class StarwarsModule {}
