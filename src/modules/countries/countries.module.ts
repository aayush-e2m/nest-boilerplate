import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Countries } from './entities/counties.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Countries])],
  providers: [CountriesService],
})
export class CountriesModule {}
