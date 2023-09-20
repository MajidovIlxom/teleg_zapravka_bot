import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationModule } from './gas_station/gas_station.module';
import { GasStationBranchModule } from './gas_station_branch/gas_station_branch.module';
import { GasStationFuelTypeModule } from './gas_station_fuel_type/gas_station_fuel_type.module';
import { FuelTypesModule } from './fuel_types/fuel_types.module';
import { GasStation } from './gas_station/Models/gasStation.model';
import { GasStationBranch } from './gas_station_branch/Models/gas_station_branch.models';
import { GasSFT } from './gas_station_fuel_type/Models/gsfueltype.models';
import { FuelTypes } from './fuel_types/Models/fuel_types.models';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host: process.env.POSTGREST_HOST,
      port:Number(process.env.POSTGREST_PORT),
      username: process.env.POSTGREST_USER,
      password: String(process.env.POSTGREST_PASSWORD),
      database: process.env.POSTGREST_DB,
      models:[
        GasStation,
        GasStationBranch,
        GasSFT,
        FuelTypes
      ],
      autoLoadModels: true,
      logging: true,  
    }),
    GasStationModule,
    GasStationBranchModule,
    GasStationFuelTypeModule,
    FuelTypesModule
    ],
})
export class AppModule {}
