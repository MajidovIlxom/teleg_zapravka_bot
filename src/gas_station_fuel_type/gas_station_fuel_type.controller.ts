import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { CreateFuelType } from './dto/createGSFT.dto';
import { GasSFT } from './Models/gsfueltype.models';
import { UpdateFuelType } from './dto/updateGSFT.dto';

@Controller('gas_station_fuel_type')
export class GasStationFuelTypeController {
    constructor(private readonly gasStationFuelTypeService: GasStationFuelTypeService){}

    @Post("create")
    async createGASFuelType(@Body() createFuelType:CreateFuelType): Promise<GasSFT>{
        return this.gasStationFuelTypeService.createGasStationFuelType(createFuelType)
    }

    @Get("all")
    async findAll(): Promise<GasSFT[]>{
        return this.gasStationFuelTypeService.findAllGasFT()
    }

    @Get("find/:id")
    async findByID(id:string): Promise<GasSFT>{
        return this.gasStationFuelTypeService.findOneGasFT(+id)
    }

    @Put("update/:id")
    async updateGasStation(id: number, updateGasStationFuelTypeDto:UpdateFuelType): Promise<GasSFT>{
        return this.gasStationFuelTypeService.updateGSFT(+id, updateGasStationFuelTypeDto)
    }

    @Delete("delete/:id")
    async deleteGSFT(id:string): Promise<number>{
        return this.gasStationFuelTypeService.deleteGSFT(+id)
    }
}

