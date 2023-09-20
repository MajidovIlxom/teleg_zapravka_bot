import { Module } from '@nestjs/common';
import { GasStationController } from './gas_station.controller';
import { GasStationService } from './gas_station.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStation } from './Models/gasStation.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStation])],
  controllers: [GasStationController],
  providers: [GasStationService]
})
export class GasStationModule {}
