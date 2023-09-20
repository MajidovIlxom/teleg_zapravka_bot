import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FuelTypesService } from './fuel_types.service';
import { FuelTypes } from './Models/fuel_types.models';
import { CreateFuelType } from './dto/createFuelTypes.dto';
import { UpdateFuelType } from './dto/updateFuelTypes.dto';

@Controller('fuel_types')
export class FuelTypesController {
    constructor(private readonly fuelTypesService:FuelTypesService){}

    @Post("gas")
    async createGasStation(@Body() createFuelType:CreateFuelType): Promise<FuelTypes>{
        return this.fuelTypesService.createGasStation(createFuelType)
    }

    @Get("all")
    async findAllGasStation(): Promise<FuelTypes[]>{
        return this.fuelTypesService.findAllGasStation();
    }

    @Get("one/:id")
    async findOneGasStation(@Param("id") id: string): Promise<FuelTypes>{
        return this.fuelTypesService.findById(id)
    }

    @Put("update/:id")
    async updateGasStation(@Param("id") id: string, @Body() updateFuelType: UpdateFuelType){
        return this.fuelTypesService.updateById(+id, updateFuelType)
    }

    @Delete("delete/:id")
    async deleteGasStation(@Param("id") id: string): Promise<number> {
        return this.fuelTypesService.deleteById(+id)
    }
}
