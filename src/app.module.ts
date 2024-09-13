import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EmployeesModule } from './apis/employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';
import { StarwarsModule } from './apis/starwars/starwars.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.dbHost,
      port: envs.dbPort,
      username: envs.dbUser,
      password: envs.dbPassword,
      database: envs.dbName,
      synchronize: envs.dbSynchronize,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // ssl: true,
    }),
    EmployeesModule,
    StarwarsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
