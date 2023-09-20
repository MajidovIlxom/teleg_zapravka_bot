import { Module } from '@nestjs/common';
import { FuelTypesController } from './fuel_types.controller';
import { FuelTypesService } from './fuel_types.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelTypes } from './Models/fuel_types.models';

@Module({
  imports: [SequelizeModule.forFeature([FuelTypes])],
  controllers: [FuelTypesController],
  providers: [FuelTypesService]
})
export class FuelTypesModule {}
