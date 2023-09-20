import { Module } from '@nestjs/common';
import { GasStationFuelTypeController } from './gas_station_fuel_type.controller';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { GasSFT } from './Models/gsfueltype.models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([GasSFT])],
  controllers: [GasStationFuelTypeController],
  providers: [GasStationFuelTypeService]
})
export class GasStationFuelTypeModule {}
